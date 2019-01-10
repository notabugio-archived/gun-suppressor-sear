(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("gun-suppressor"), require("gun/gun"), require("gun/sea"), require("ramda"), require("route-parser"));
	else if(typeof define === 'function' && define.amd)
		define("gun-suppressor-sear", ["gun-suppressor", "gun/gun", "gun/sea", "ramda", "route-parser"], factory);
	else if(typeof exports === 'object')
		exports["gun-suppressor-sear"] = factory(require("gun-suppressor"), require("gun/gun"), require("gun/sea"), require("ramda"), require("route-parser"));
	else
		root["gun-suppressor-sear"] = factory(root["gun-suppressor"], root["gun/gun"], root["gun/sea"], root["ramda"], root["route-parser"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_gun_suppressor__, __WEBPACK_EXTERNAL_MODULE_gun_gun__, __WEBPACK_EXTERNAL_MODULE_gun_sea__, __WEBPACK_EXTERNAL_MODULE_ramda__, __WEBPACK_EXTERNAL_MODULE_route_parser__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initAjv = exports.read = exports.PERMISSIVE_SCHEMA = exports.PERMISSIVE_NODE_SCHEMA = exports.AUTH_SCHEMA = void 0;

var _ramda = __webpack_require__(/*! ramda */ "ramda");

var _routeParser = _interopRequireDefault(__webpack_require__(/*! route-parser */ "route-parser"));

var _gunSuppressor = __webpack_require__(/*! gun-suppressor */ "gun-suppressor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

global.Gun = global.Gun || __webpack_require__(/*! gun/gun */ "gun/gun");

var _require = __webpack_require__(/*! gun/sea */ "gun/sea"),
    verify = _require.verify,
    unpack = _require.opt.unpack;

var MAX_AUTHOR_ALIAS_SIZE = 512;
var MAX_AUTHOR_ID_SIZE = 128; // ???

var authorPattern = "~:authorId";
var seaAuthorRoute = new _routeParser.default(authorPattern);
var seaSoulRoute = new _routeParser.default("*stuff~:authorId.");
var AUTH_SCHEMA = {
  seaAlias: {
    type: "string",
    maxLength: MAX_AUTHOR_ALIAS_SIZE
  },
  SEAAlias: {
    title: "Gun SEA Alias",
    $async: true,
    soul: {
      pattern: "~@:alias",
      properties: {
        alias: {
          $ref: "schema.json#/definitions/seaAlias"
        }
      },
      required: ["alias"]
    },
    additionalProperties: {
      edgeMatchesKey: true,
      anyOf: [{
        $ref: "#/definitions/SEAAuthorEdge"
      }]
    }
  },
  seaAuthorId: {
    type: "string",
    maxLength: MAX_AUTHOR_ID_SIZE
  },
  seaAuthObj: {
    oneOf: [{
      type: "object",
      properties: {
        ek: {
          type: "string"
        },
        s: {
          type: "string"
        }
      }
    }, {
      type: "string"
    }]
  },
  SEAAuthor: {
    title: "Gun SEA Author",
    $async: true,
    properties: {
      pub: {
        $ref: "#/definitions/seaAuthorId"
      },
      epub: {
        sea: {
          type: "string"
        }
      },
      alias: {
        sea: {
          $ref: "schema.json#/definitions/seaAlias"
        }
      },
      auth: {
        sea: {
          $ref: "schema.json#/definitions/seaAuthObj"
        }
      }
    },
    additionalProperties: {
      sea: {
        anyOf: [{
          $ref: "schema.json#/definitions/GunEdge"
        }, {
          $ref: "schema.json#/definitions/seaAuthObj"
        }, {
          type: "null"
        }, {
          type: "string"
        }, {
          type: "number"
        }, {
          type: "boolean"
        }]
      }
    },
    soul: {
      pattern: authorPattern,
      properties: {
        authorId: {
          $ref: "schema.json#/definitions/seaAuthorId"
        }
      },
      required: ["authorId"]
    }
  }
};
exports.AUTH_SCHEMA = AUTH_SCHEMA;
var PERMISSIVE_NODE_SCHEMA = {
  title: "Gun SEA Node",
  description: "Any SEA node supported by gun",
  $async: true,
  soul: {
    pattern: "*path~:authorId.",
    properties: {
      path: {
        type: "string"
      },
      authorId: {
        $ref: "schema.json#/definitions/seaAuthorId"
      }
    },
    required: ["path", "authorId"]
  },
  additionalProperties: {
    ".*": {
      sea: {
        anyOf: [{
          $ref: "schema.json#/definitions/GunNodeMeta"
        }, {
          $ref: "schema.json#/definitions/GunEdge"
        }, {
          type: "null"
        }, {
          type: "string"
        }, {
          type: "number"
        }, {
          type: "boolean"
        }]
      }
    }
  }
};
exports.PERMISSIVE_NODE_SCHEMA = PERMISSIVE_NODE_SCHEMA;
var PERMISSIVE_SCHEMA = { ...AUTH_SCHEMA,
  SEANode: PERMISSIVE_NODE_SCHEMA,
  ..._gunSuppressor.PERMISSIVE_SCHEMA
};
exports.PERMISSIVE_SCHEMA = PERMISSIVE_SCHEMA;

var read = function read(data, key) {
  var pair = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return verify(unpack(data[key], key, data), pair).then(function (r) {
    if (typeof r === "undefined") {
      throw new Error("invalid sea data");
    }

    return unpack(r, key, data);
  });
};

exports.read = read;

var validateSeaProperty = function validateSeaProperty(ajv) {
  return function (schema, data, pSchema, cPath, parentData, keyInParent) {
    var soul = (0, _ramda.path)(["_", "#"], parentData);
    if (keyInParent === "_") return true;

    var _ref = seaSoulRoute.match(soul) || seaAuthorRoute.match(soul) || {},
        authorId = _ref.authorId;

    if (!authorId) return false;

    if (soul === "~".concat(authorId) && keyInParent === "pub") {
      return data === authorId;
    } // Validate as an object to give property validators more context


    var validate = ajv.compile({
      additionalProperties: true,
      properties: _defineProperty({}, keyInParent, schema)
    });
    var result;
    return read(parentData, keyInParent, authorId).then(function (res) {
      return result = res;
    }).then(function (res) {
      return (0, _ramda.assoc)(keyInParent, res, parentData);
    }).catch(function (err) {
      console.error("key err", soul, keyInParent, err.stack || err);
      return false;
    }).then(function (res) {
      if (!res) {
        delete parentData[keyInParent];
        delete ((0, _ramda.path)(["_", ">"], parentData) || {})[keyInParent];
        console.error("sea prop err", soul, keyInParent, result, pSchema);
        return res;
      }

      return Promise.resolve(validate()).then(function (isValid) {
        if (!isValid) {
          console.error("sea validation err", soul, keyInParent, result, validate.errors, pSchema);
        }

        return isValid;
      });
    });
  };
};

var initAjv = (0, _ramda.compose)(function (ajv) {
  ajv.addKeyword("sea", {
    async: true,
    modifying: true,
    validate: validateSeaProperty(ajv)
  });
  return ajv;
}, _gunSuppressor.initAjv);
exports.initAjv = initAjv;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "gun-suppressor":
/*!*********************************!*\
  !*** external "gun-suppressor" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_gun_suppressor__;

/***/ }),

/***/ "gun/gun":
/*!**************************!*\
  !*** external "gun/gun" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_gun_gun__;

/***/ }),

/***/ "gun/sea":
/*!**************************!*\
  !*** external "gun/sea" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_gun_sea__;

/***/ }),

/***/ "ramda":
/*!************************!*\
  !*** external "ramda" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ramda__;

/***/ }),

/***/ "route-parser":
/*!*******************************!*\
  !*** external "route-parser" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_route_parser__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcImd1bi1zdXBwcmVzc29yXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcImd1bi9ndW5cIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL2V4dGVybmFsIFwiZ3VuL3NlYVwiIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvZXh0ZXJuYWwgXCJyYW1kYVwiIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJHdW4iLCJyZXF1aXJlIiwidmVyaWZ5IiwidW5wYWNrIiwib3B0IiwiTUFYX0FVVEhPUl9BTElBU19TSVpFIiwiTUFYX0FVVEhPUl9JRF9TSVpFIiwiYXV0aG9yUGF0dGVybiIsInNlYUF1dGhvclJvdXRlIiwic2VhU291bFJvdXRlIiwiQVVUSF9TQ0hFTUEiLCJzZWFBbGlhcyIsInR5cGUiLCJtYXhMZW5ndGgiLCJTRUFBbGlhcyIsInRpdGxlIiwiJGFzeW5jIiwic291bCIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwiYWxpYXMiLCIkcmVmIiwicmVxdWlyZWQiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImVkZ2VNYXRjaGVzS2V5IiwiYW55T2YiLCJzZWFBdXRob3JJZCIsInNlYUF1dGhPYmoiLCJvbmVPZiIsImVrIiwicyIsIlNFQUF1dGhvciIsInB1YiIsImVwdWIiLCJzZWEiLCJhdXRoIiwiYXV0aG9ySWQiLCJQRVJNSVNTSVZFX05PREVfU0NIRU1BIiwiZGVzY3JpcHRpb24iLCJwYXRoIiwiUEVSTUlTU0lWRV9TQ0hFTUEiLCJTRUFOb2RlIiwicmVhZCIsImRhdGEiLCJrZXkiLCJwYWlyIiwidGhlbiIsInIiLCJFcnJvciIsInZhbGlkYXRlU2VhUHJvcGVydHkiLCJhanYiLCJzY2hlbWEiLCJwU2NoZW1hIiwiY1BhdGgiLCJwYXJlbnREYXRhIiwia2V5SW5QYXJlbnQiLCJtYXRjaCIsInZhbGlkYXRlIiwiY29tcGlsZSIsInJlc3VsdCIsInJlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzVmFsaWQiLCJlcnJvcnMiLCJpbml0QWp2IiwiYWRkS2V5d29yZCIsImFzeW5jIiwibW9kaWZ5aW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7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QUxYLEVBTUVqQixPQU5GO0FBUUQ7O0FBQ0QsZUFBT2dCLE9BQVA7QUFDRCxPQVpNLENBQVA7QUFhRCxLQTNCSSxDQUFQO0FBNEJELEdBeEQ4QjtBQUFBLENBQS9COztBQTBETyxJQUFNRSxPQUFPLEdBQUcsb0JBQ3JCLFVBQUFwQixHQUFHLEVBQUk7QUFDTEEsS0FBRyxDQUFDcUIsVUFBSixDQUFlLEtBQWYsRUFBc0I7QUFDcEJDLFNBQUssRUFBRSxJQURhO0FBRXBCQyxhQUFTLEVBQUUsSUFGUztBQUdwQmhCLFlBQVEsRUFBRVIsbUJBQW1CLENBQUNDLEdBQUQ7QUFIVCxHQUF0QjtBQUtBLFNBQU9BLEdBQVA7QUFDRCxDQVJvQix5QkFBaEI7Ozs7Ozs7Ozs7Ozs7QUMzTFAsNEQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQiLCJmaWxlIjoiZ3VuLXN1cHByZXNzb3Itc2Vhci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImd1bi1zdXBwcmVzc29yXCIpLCByZXF1aXJlKFwiZ3VuL2d1blwiKSwgcmVxdWlyZShcImd1bi9zZWFcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImd1bi1zdXBwcmVzc29yLXNlYXJcIiwgW1wiZ3VuLXN1cHByZXNzb3JcIiwgXCJndW4vZ3VuXCIsIFwiZ3VuL3NlYVwiLCBcInJhbWRhXCIsIFwicm91dGUtcGFyc2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImd1bi1zdXBwcmVzc29yLXNlYXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJndW4tc3VwcHJlc3NvclwiKSwgcmVxdWlyZShcImd1bi9ndW5cIiksIHJlcXVpcmUoXCJndW4vc2VhXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXJcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImd1bi1zdXBwcmVzc29yLXNlYXJcIl0gPSBmYWN0b3J5KHJvb3RbXCJndW4tc3VwcHJlc3NvclwiXSwgcm9vdFtcImd1bi9ndW5cIl0sIHJvb3RbXCJndW4vc2VhXCJdLCByb290W1wicmFtZGFcIl0sIHJvb3RbXCJyb3V0ZS1wYXJzZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3VuX3N1cHByZXNzb3JfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ndW5fZ3VuX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3VuX3NlYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0IHsgY29tcG9zZSwgcGF0aCwgYXNzb2MgfSBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCBSb3V0ZSBmcm9tIFwicm91dGUtcGFyc2VyXCI7XG5pbXBvcnQge1xuICBQRVJNSVNTSVZFX1NDSEVNQSBhcyBHVU5fUEVSTUlTU0lWRV9TQ0hFTUEsXG4gIGluaXRBanYgYXMgYWp2QmFzZUluaXRcbn0gZnJvbSBcImd1bi1zdXBwcmVzc29yXCI7XG5cbmdsb2JhbC5HdW4gPSBnbG9iYWwuR3VuIHx8IHJlcXVpcmUoXCJndW4vZ3VuXCIpO1xuY29uc3Qge1xuICB2ZXJpZnksXG4gIG9wdDogeyB1bnBhY2sgfVxufSA9IHJlcXVpcmUoXCJndW4vc2VhXCIpO1xuXG5jb25zdCBNQVhfQVVUSE9SX0FMSUFTX1NJWkUgPSA1MTI7XG5jb25zdCBNQVhfQVVUSE9SX0lEX1NJWkUgPSAxMjg7IC8vID8/P1xuY29uc3QgYXV0aG9yUGF0dGVybiA9IFwifjphdXRob3JJZFwiO1xuY29uc3Qgc2VhQXV0aG9yUm91dGUgPSBuZXcgUm91dGUoYXV0aG9yUGF0dGVybik7XG5jb25zdCBzZWFTb3VsUm91dGUgPSBuZXcgUm91dGUoXCIqc3R1ZmZ+OmF1dGhvcklkLlwiKTtcblxuZXhwb3J0IGNvbnN0IEFVVEhfU0NIRU1BID0ge1xuICBzZWFBbGlhczogeyB0eXBlOiBcInN0cmluZ1wiLCBtYXhMZW5ndGg6IE1BWF9BVVRIT1JfQUxJQVNfU0laRSB9LFxuICBTRUFBbGlhczoge1xuICAgIHRpdGxlOiBcIkd1biBTRUEgQWxpYXNcIixcbiAgICAkYXN5bmM6IHRydWUsXG4gICAgc291bDoge1xuICAgICAgcGF0dGVybjogXCJ+QDphbGlhc1wiLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBhbGlhczogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBbGlhc1wiIH1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogW1wiYWxpYXNcIl1cbiAgICB9LFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICBlZGdlTWF0Y2hlc0tleTogdHJ1ZSxcbiAgICAgIGFueU9mOiBbeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvU0VBQXV0aG9yRWRnZVwiIH1dXG4gICAgfVxuICB9LFxuICBzZWFBdXRob3JJZDogeyB0eXBlOiBcInN0cmluZ1wiLCBtYXhMZW5ndGg6IE1BWF9BVVRIT1JfSURfU0laRSB9LFxuICBzZWFBdXRoT2JqOiB7XG4gICAgb25lT2Y6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGVrOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICBzOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBTRUFBdXRob3I6IHtcbiAgICB0aXRsZTogXCJHdW4gU0VBIEF1dGhvclwiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBwdWI6IHsgJHJlZjogXCIjL2RlZmluaXRpb25zL3NlYUF1dGhvcklkXCIgfSxcbiAgICAgIGVwdWI6IHsgc2VhOiB7IHR5cGU6IFwic3RyaW5nXCIgfSB9LFxuICAgICAgYWxpYXM6IHsgc2VhOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUFsaWFzXCIgfSB9LFxuICAgICAgYXV0aDoge1xuICAgICAgICBzZWE6IHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aE9ialwiIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICBzZWE6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bkVkZ2VcIiB9LFxuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aE9ialwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bGxcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJib29sZWFuXCIgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBhdXRob3JQYXR0ZXJuLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBhdXRob3JJZDogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRob3JJZFwiIH1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogW1wiYXV0aG9ySWRcIl1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQRVJNSVNTSVZFX05PREVfU0NIRU1BID0ge1xuICB0aXRsZTogXCJHdW4gU0VBIE5vZGVcIixcbiAgZGVzY3JpcHRpb246IFwiQW55IFNFQSBub2RlIHN1cHBvcnRlZCBieSBndW5cIixcbiAgJGFzeW5jOiB0cnVlLFxuXG4gIHNvdWw6IHtcbiAgICBwYXR0ZXJuOiBcIipwYXRofjphdXRob3JJZC5cIixcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBwYXRoOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIGF1dGhvcklkOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhvcklkXCIgfVxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IFtcInBhdGhcIiwgXCJhdXRob3JJZFwiXVxuICB9LFxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgXCIuKlwiOiB7XG4gICAgICBzZWE6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bk5vZGVNZXRhXCIgfSxcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bkVkZ2VcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudWxsXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwiYm9vbGVhblwiIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJVkVfU0NIRU1BID0ge1xuICAuLi5BVVRIX1NDSEVNQSxcbiAgU0VBTm9kZTogUEVSTUlTU0lWRV9OT0RFX1NDSEVNQSxcbiAgLi4uR1VOX1BFUk1JU1NJVkVfU0NIRU1BXG59O1xuXG5leHBvcnQgY29uc3QgcmVhZCA9IChkYXRhLCBrZXksIHBhaXIgPSBmYWxzZSkgPT5cbiAgdmVyaWZ5KHVucGFjayhkYXRhW2tleV0sIGtleSwgZGF0YSksIHBhaXIpLnRoZW4ociA9PiB7XG4gICAgaWYgKHR5cGVvZiByID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHNlYSBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdW5wYWNrKHIsIGtleSwgZGF0YSk7XG4gIH0pO1xuXG5jb25zdCB2YWxpZGF0ZVNlYVByb3BlcnR5ID0gYWp2ID0+IChcbiAgc2NoZW1hLFxuICBkYXRhLFxuICBwU2NoZW1hLFxuICBjUGF0aCxcbiAgcGFyZW50RGF0YSxcbiAga2V5SW5QYXJlbnRcbikgPT4ge1xuICBjb25zdCBzb3VsID0gcGF0aChbXCJfXCIsIFwiI1wiXSwgcGFyZW50RGF0YSk7XG5cbiAgaWYgKGtleUluUGFyZW50ID09PSBcIl9cIikgcmV0dXJuIHRydWU7XG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9XG4gICAgc2VhU291bFJvdXRlLm1hdGNoKHNvdWwpIHx8IHNlYUF1dGhvclJvdXRlLm1hdGNoKHNvdWwpIHx8IHt9O1xuXG4gIGlmICghYXV0aG9ySWQpIHJldHVybiBmYWxzZTtcbiAgaWYgKHNvdWwgPT09IGB+JHthdXRob3JJZH1gICYmIGtleUluUGFyZW50ID09PSBcInB1YlwiKSB7XG4gICAgcmV0dXJuIGRhdGEgPT09IGF1dGhvcklkO1xuICB9XG5cbiAgLy8gVmFsaWRhdGUgYXMgYW4gb2JqZWN0IHRvIGdpdmUgcHJvcGVydHkgdmFsaWRhdG9ycyBtb3JlIGNvbnRleHRcbiAgY29uc3QgdmFsaWRhdGUgPSBhanYuY29tcGlsZSh7XG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHRydWUsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgW2tleUluUGFyZW50XTogc2NoZW1hXG4gICAgfVxuICB9KTtcbiAgbGV0IHJlc3VsdDtcblxuICByZXR1cm4gcmVhZChwYXJlbnREYXRhLCBrZXlJblBhcmVudCwgYXV0aG9ySWQpXG4gICAgLnRoZW4ocmVzID0+IChyZXN1bHQgPSByZXMpKVxuICAgIC50aGVuKHJlcyA9PiBhc3NvYyhrZXlJblBhcmVudCwgcmVzLCBwYXJlbnREYXRhKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJrZXkgZXJyXCIsIHNvdWwsIGtleUluUGFyZW50LCBlcnIuc3RhY2sgfHwgZXJyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICBkZWxldGUgcGFyZW50RGF0YVtrZXlJblBhcmVudF07XG4gICAgICAgIGRlbGV0ZSAocGF0aChbXCJfXCIsIFwiPlwiXSwgcGFyZW50RGF0YSkgfHwge30pW2tleUluUGFyZW50XTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcInNlYSBwcm9wIGVyclwiLCBzb3VsLCBrZXlJblBhcmVudCwgcmVzdWx0LCBwU2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGUoKSkudGhlbihpc1ZhbGlkID0+IHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwic2VhIHZhbGlkYXRpb24gZXJyXCIsXG4gICAgICAgICAgICBzb3VsLFxuICAgICAgICAgICAga2V5SW5QYXJlbnQsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMsXG4gICAgICAgICAgICBwU2NoZW1hXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRBanYgPSBjb21wb3NlKFxuICBhanYgPT4ge1xuICAgIGFqdi5hZGRLZXl3b3JkKFwic2VhXCIsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgbW9kaWZ5aW5nOiB0cnVlLFxuICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlU2VhUHJvcGVydHkoYWp2KVxuICAgIH0pO1xuICAgIHJldHVybiBhanY7XG4gIH0sXG4gIGFqdkJhc2VJbml0XG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2d1bl9zdXBwcmVzc29yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2d1bl9ndW5fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3VuX3NlYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9