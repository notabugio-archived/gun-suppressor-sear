/* globals Promise */
import { compose, path, assoc } from "ramda";
import Route from "route-parser";
import {
  PERMISSIVE_SCHEMA as GUN_PERMISSIVE_SCHEMA,
  initAjv as ajvBaseInit
} from "gun-suppressor";

global.Gun = global.Gun || require("gun/gun");
const {
  verify,
  opt: { unpack }
} = require("gun/sea");

const MAX_AUTHOR_ALIAS_SIZE = 512;
const MAX_AUTHOR_ID_SIZE = 128; // ???
const authorPattern = "~:authorId";
const seaAuthorRoute = new Route(authorPattern);
const seaSoulRoute = new Route("*stuff~:authorId.");

export const AUTH_SCHEMA = {
  seaAlias: { type: "string", maxLength: MAX_AUTHOR_ALIAS_SIZE },
  SEAAlias: {
    title: "Gun SEA Alias",
    $async: true,
    soul: {
      pattern: "~@:alias",
      properties: {
        alias: { $ref: "schema.json#/definitions/seaAlias" }
      },
      required: ["alias"]
    },
    additionalProperties: {
      edgeMatchesKey: true,
      anyOf: [{ $ref: "#/definitions/SEAAuthorEdge" }]
    }
  },
  seaAuthorId: { type: "string", maxLength: MAX_AUTHOR_ID_SIZE },
  seaAuthObj: {
    oneOf: [
      {
        type: "object",
        properties: {
          ek: { type: "string" },
          s: { type: "string" }
        }
      },
      {
        type: "string"
      }
    ]
  },
  SEAAuthor: {
    title: "Gun SEA Author",
    $async: true,
    properties: {
      pub: { $ref: "#/definitions/seaAuthorId" },
      epub: { sea: { type: "string" } },
      alias: { sea: { $ref: "schema.json#/definitions/seaAlias" } },
      auth: {
        sea: { $ref: "schema.json#/definitions/seaAuthObj" }
      }
    },
    additionalProperties: {
      sea: {
        anyOf: [
          { $ref: "schema.json#/definitions/GunEdge" },
          { $ref: "schema.json#/definitions/seaAuthObj" },
          { type: "null" },
          { type: "string" },
          { type: "number" },
          { type: "boolean" }
        ]
      }
    },
    soul: {
      pattern: authorPattern,
      properties: {
        authorId: { $ref: "schema.json#/definitions/seaAuthorId" }
      },
      required: ["authorId"]
    }
  }
};

export const PERMISSIVE_NODE_SCHEMA = {
  title: "Gun SEA Node",
  description: "Any SEA node supported by gun",
  $async: true,

  soul: {
    pattern: "*path~:authorId.",
    properties: {
      path: { type: "string" },
      authorId: { $ref: "schema.json#/definitions/seaAuthorId" }
    },
    required: ["path", "authorId"]
  },

  additionalProperties: {
    ".*": {
      sea: {
        anyOf: [
          { $ref: "schema.json#/definitions/GunNodeMeta" },
          { $ref: "schema.json#/definitions/GunEdge" },
          { type: "null" },
          { type: "string" },
          { type: "number" },
          { type: "boolean" }
        ]
      }
    }
  }
};

export const PERMISSIVE_SCHEMA = {
  ...AUTH_SCHEMA,
  SEANode: PERMISSIVE_NODE_SCHEMA,
  ...GUN_PERMISSIVE_SCHEMA
};

export const read = (data, key, pair = false) =>
  verify(unpack(data[key], key, data), pair).then(r => {
    if (typeof r === "undefined") {
      throw new Error("invalid sea data");
    }
    return unpack(r, key, data);
  });

const validateSeaProperty = ajv => (
  schema,
  data,
  pSchema,
  cPath,
  parentData,
  keyInParent
) => {
  const soul = path(["_", "#"], parentData);

  if (keyInParent === "_") return true;
  const { authorId } =
    seaSoulRoute.match(soul) || seaAuthorRoute.match(soul) || {};

  if (!authorId) return false;
  if (soul === `~${authorId}` && keyInParent === "pub") {
    return data === authorId;
  }

  // Validate as an object to give property validators more context
  const validate = ajv.compile({
    additionalProperties: true,
    properties: {
      [keyInParent]: schema
    }
  });
  let result;

  return read(parentData, keyInParent, authorId)
    .then(res => (result = res))
    .then(res => assoc(keyInParent, res, parentData))
    .catch(err => {
      console.error("key err", soul, keyInParent, err.stack || err);
      return false;
    })
    .then(res => {
      if (!res) {
        delete parentData[keyInParent];
        delete (path(["_", ">"], parentData) || {})[keyInParent];
        console.error("sea prop err", soul, keyInParent, result, pSchema);
        return res;
      }
      return Promise.resolve(validate()).then(isValid => {
        if (!isValid) {
          console.error(
            "sea validation err",
            soul,
            keyInParent,
            result,
            validate.errors,
            pSchema
          );
        }
        return isValid;
      });
    });
};

export const initAjv = compose(
  ajv => {
    ajv.addKeyword("sea", {
      async: true,
      modifying: true,
      validate: validateSeaProperty(ajv)
    });
    return ajv;
  },
  ajvBaseInit
);
