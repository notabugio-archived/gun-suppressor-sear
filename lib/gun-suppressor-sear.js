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
        $ref: "#/definitions/SEAAuthor"
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
        nyOf: [{
          $ref: "schema.json#/definitions/GunNodeMeta"
        }, {
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
  return verify(data[key], pair).then(function (r) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcImd1bi1zdXBwcmVzc29yXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcImd1bi9ndW5cIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL2V4dGVybmFsIFwiZ3VuL3NlYVwiIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvZXh0ZXJuYWwgXCJyYW1kYVwiIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJHdW4iLCJyZXF1aXJlIiwidmVyaWZ5IiwidW5wYWNrIiwib3B0IiwiTUFYX0FVVEhPUl9BTElBU19TSVpFIiwiTUFYX0FVVEhPUl9JRF9TSVpFIiwiYXV0aG9yUGF0dGVybiIsInNlYUF1dGhvclJvdXRlIiwic2VhU291bFJvdXRlIiwiQVVUSF9TQ0hFTUEiLCJzZWFBbGlhcyIsInR5cGUiLCJtYXhMZW5ndGgiLCJTRUFBbGlhcyIsInRpdGxlIiwiJGFzeW5jIiwic291bCIsInBhdHRlcm4iLCJwcm9wZXJ0aWVzIiwiYWxpYXMiLCIkcmVmIiwicmVxdWlyZWQiLCJhZGRpdGlvbmFsUHJvcGVydGllcyIsImVkZ2VNYXRjaGVzS2V5IiwiYW55T2YiLCJzZWFBdXRob3JJZCIsInNlYUF1dGhPYmoiLCJvbmVPZiIsImVrIiwicyIsIlNFQUF1dGhvciIsInB1YiIsImVwdWIiLCJzZWEiLCJhdXRoIiwibnlPZiIsImF1dGhvcklkIiwiUEVSTUlTU0lWRV9OT0RFX1NDSEVNQSIsImRlc2NyaXB0aW9uIiwicGF0aCIsIlBFUk1JU1NJVkVfU0NIRU1BIiwiU0VBTm9kZSIsInJlYWQiLCJkYXRhIiwia2V5IiwicGFpciIsInRoZW4iLCJyIiwiRXJyb3IiLCJ2YWxpZGF0ZVNlYVByb3BlcnR5IiwiYWp2Iiwic2NoZW1hIiwicFNjaGVtYSIsImNQYXRoIiwicGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJ2YWxpZGF0ZSIsImNvbXBpbGUiLCJyZXN1bHQiLCJyZXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc1ZhbGlkIiwiZXJyb3JzIiwiaW5pdEFqdiIsImFkZEtleXdvcmQiLCJhc3luYyIsIm1vZGlmeWluZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFp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TFgsRUFNRWpCLE9BTkY7QUFRRDs7QUFDRCxlQUFPZ0IsT0FBUDtBQUNELE9BWk0sQ0FBUDtBQWFELEtBM0JJLENBQVA7QUE0QkQsR0F4RDhCO0FBQUEsQ0FBL0I7O0FBMERPLElBQU1FLE9BQU8sR0FBRyxvQkFDckIsVUFBQXBCLEdBQUcsRUFBSTtBQUNMQSxLQUFHLENBQUNxQixVQUFKLENBQWUsS0FBZixFQUFzQjtBQUNwQkMsU0FBSyxFQUFFLElBRGE7QUFFcEJDLGFBQVMsRUFBRSxJQUZTO0FBR3BCaEIsWUFBUSxFQUFFUixtQkFBbUIsQ0FBQ0MsR0FBRDtBQUhULEdBQXRCO0FBS0EsU0FBT0EsR0FBUDtBQUNELENBUm9CLHlCQUFoQjs7Ozs7Ozs7Ozs7OztBQzVMUCw0RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwwRCIsImZpbGUiOiJndW4tc3VwcHJlc3Nvci1zZWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiZ3VuLXN1cHByZXNzb3JcIiksIHJlcXVpcmUoXCJndW4vZ3VuXCIpLCByZXF1aXJlKFwiZ3VuL3NlYVwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZ3VuLXN1cHByZXNzb3Itc2VhclwiLCBbXCJndW4tc3VwcHJlc3NvclwiLCBcImd1bi9ndW5cIiwgXCJndW4vc2VhXCIsIFwicmFtZGFcIiwgXCJyb3V0ZS1wYXJzZXJcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZ3VuLXN1cHByZXNzb3Itc2VhclwiXSA9IGZhY3RvcnkocmVxdWlyZShcImd1bi1zdXBwcmVzc29yXCIpLCByZXF1aXJlKFwiZ3VuL2d1blwiKSwgcmVxdWlyZShcImd1bi9zZWFcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiZ3VuLXN1cHByZXNzb3Itc2VhclwiXSA9IGZhY3Rvcnkocm9vdFtcImd1bi1zdXBwcmVzc29yXCJdLCByb290W1wiZ3VuL2d1blwiXSwgcm9vdFtcImd1bi9zZWFcIl0sIHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInJvdXRlLXBhcnNlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ndW5fc3VwcHJlc3Nvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2d1bl9ndW5fXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ndW5fc2VhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXykge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiLyogZ2xvYmFscyBQcm9taXNlICovXG5pbXBvcnQgeyBjb21wb3NlLCBwYXRoLCBhc3NvYyB9IGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IFJvdXRlIGZyb20gXCJyb3V0ZS1wYXJzZXJcIjtcbmltcG9ydCB7XG4gIFBFUk1JU1NJVkVfU0NIRU1BIGFzIEdVTl9QRVJNSVNTSVZFX1NDSEVNQSxcbiAgaW5pdEFqdiBhcyBhanZCYXNlSW5pdFxufSBmcm9tIFwiZ3VuLXN1cHByZXNzb3JcIjtcblxuZ2xvYmFsLkd1biA9IGdsb2JhbC5HdW4gfHwgcmVxdWlyZShcImd1bi9ndW5cIik7XG5jb25zdCB7XG4gIHZlcmlmeSxcbiAgb3B0OiB7IHVucGFjayB9XG59ID0gcmVxdWlyZShcImd1bi9zZWFcIik7XG5cbmNvbnN0IE1BWF9BVVRIT1JfQUxJQVNfU0laRSA9IDUxMjtcbmNvbnN0IE1BWF9BVVRIT1JfSURfU0laRSA9IDEyODsgLy8gPz8/XG5jb25zdCBhdXRob3JQYXR0ZXJuID0gXCJ+OmF1dGhvcklkXCI7XG5jb25zdCBzZWFBdXRob3JSb3V0ZSA9IG5ldyBSb3V0ZShhdXRob3JQYXR0ZXJuKTtcbmNvbnN0IHNlYVNvdWxSb3V0ZSA9IG5ldyBSb3V0ZShcIipzdHVmZn46YXV0aG9ySWQuXCIpO1xuXG5leHBvcnQgY29uc3QgQVVUSF9TQ0hFTUEgPSB7XG4gIHNlYUFsaWFzOiB7IHR5cGU6IFwic3RyaW5nXCIsIG1heExlbmd0aDogTUFYX0FVVEhPUl9BTElBU19TSVpFIH0sXG4gIFNFQUFsaWFzOiB7XG4gICAgdGl0bGU6IFwiR3VuIFNFQSBBbGlhc1wiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBcIn5AOmFsaWFzXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFsaWFzOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUFsaWFzXCIgfVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbXCJhbGlhc1wiXVxuICAgIH0sXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIGVkZ2VNYXRjaGVzS2V5OiB0cnVlLFxuICAgICAgYW55T2Y6IFt7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9TRUFBdXRob3JcIiB9XVxuICAgIH1cbiAgfSxcbiAgc2VhQXV0aG9ySWQ6IHsgdHlwZTogXCJzdHJpbmdcIiwgbWF4TGVuZ3RoOiBNQVhfQVVUSE9SX0lEX1NJWkUgfSxcbiAgc2VhQXV0aE9iajoge1xuICAgIG9uZU9mOiBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICBlazogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgczogeyB0eXBlOiBcInN0cmluZ1wiIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgU0VBQXV0aG9yOiB7XG4gICAgdGl0bGU6IFwiR3VuIFNFQSBBdXRob3JcIixcbiAgICAkYXN5bmM6IHRydWUsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgcHViOiB7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9zZWFBdXRob3JJZFwiIH0sXG4gICAgICBlcHViOiB7IHNlYTogeyB0eXBlOiBcInN0cmluZ1wiIH0gfSxcbiAgICAgIGFsaWFzOiB7IHNlYTogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBbGlhc1wiIH0gfSxcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgc2VhOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhPYmpcIiB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgICAgc2VhOiB7XG4gICAgICAgIG55T2Y6IFtcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bk5vZGVNZXRhXCIgfSxcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bkVkZ2VcIiB9LFxuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aE9ialwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bGxcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJib29sZWFuXCIgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBhdXRob3JQYXR0ZXJuLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBhdXRob3JJZDogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRob3JJZFwiIH1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogW1wiYXV0aG9ySWRcIl1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQRVJNSVNTSVZFX05PREVfU0NIRU1BID0ge1xuICB0aXRsZTogXCJHdW4gU0VBIE5vZGVcIixcbiAgZGVzY3JpcHRpb246IFwiQW55IFNFQSBub2RlIHN1cHBvcnRlZCBieSBndW5cIixcbiAgJGFzeW5jOiB0cnVlLFxuXG4gIHNvdWw6IHtcbiAgICBwYXR0ZXJuOiBcIipwYXRofjphdXRob3JJZC5cIixcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBwYXRoOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIGF1dGhvcklkOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhvcklkXCIgfVxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IFtcInBhdGhcIiwgXCJhdXRob3JJZFwiXVxuICB9LFxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgXCIuKlwiOiB7XG4gICAgICBzZWE6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bk5vZGVNZXRhXCIgfSxcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bkVkZ2VcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudWxsXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwiYm9vbGVhblwiIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJVkVfU0NIRU1BID0ge1xuICAuLi5BVVRIX1NDSEVNQSxcbiAgU0VBTm9kZTogUEVSTUlTU0lWRV9OT0RFX1NDSEVNQSxcbiAgLi4uR1VOX1BFUk1JU1NJVkVfU0NIRU1BXG59O1xuXG5leHBvcnQgY29uc3QgcmVhZCA9IChkYXRhLCBrZXksIHBhaXIgPSBmYWxzZSkgPT5cbiAgdmVyaWZ5KGRhdGFba2V5XSwgcGFpcikudGhlbihyID0+IHtcbiAgICBpZiAodHlwZW9mIHIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgc2VhIGRhdGFcIik7XG4gICAgfVxuICAgIHJldHVybiB1bnBhY2sociwga2V5LCBkYXRhKTtcbiAgfSk7XG5cbmNvbnN0IHZhbGlkYXRlU2VhUHJvcGVydHkgPSBhanYgPT4gKFxuICBzY2hlbWEsXG4gIGRhdGEsXG4gIHBTY2hlbWEsXG4gIGNQYXRoLFxuICBwYXJlbnREYXRhLFxuICBrZXlJblBhcmVudFxuKSA9PiB7XG4gIGNvbnN0IHNvdWwgPSBwYXRoKFtcIl9cIiwgXCIjXCJdLCBwYXJlbnREYXRhKTtcblxuICBpZiAoa2V5SW5QYXJlbnQgPT09IFwiX1wiKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgeyBhdXRob3JJZCB9ID1cbiAgICBzZWFTb3VsUm91dGUubWF0Y2goc291bCkgfHwgc2VhQXV0aG9yUm91dGUubWF0Y2goc291bCkgfHwge307XG5cbiAgaWYgKCFhdXRob3JJZCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoc291bCA9PT0gYH4ke2F1dGhvcklkfWAgJiYga2V5SW5QYXJlbnQgPT09IFwicHViXCIpIHtcbiAgICByZXR1cm4gZGF0YSA9PT0gYXV0aG9ySWQ7XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBhcyBhbiBvYmplY3QgdG8gZ2l2ZSBwcm9wZXJ0eSB2YWxpZGF0b3JzIG1vcmUgY29udGV4dFxuICBjb25zdCB2YWxpZGF0ZSA9IGFqdi5jb21waWxlKHtcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczogdHJ1ZSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBba2V5SW5QYXJlbnRdOiBzY2hlbWFcbiAgICB9XG4gIH0pO1xuICBsZXQgcmVzdWx0O1xuXG4gIHJldHVybiByZWFkKHBhcmVudERhdGEsIGtleUluUGFyZW50LCBhdXRob3JJZClcbiAgICAudGhlbihyZXMgPT4gKHJlc3VsdCA9IHJlcykpXG4gICAgLnRoZW4ocmVzID0+IGFzc29jKGtleUluUGFyZW50LCByZXMsIHBhcmVudERhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcImtleSBlcnJcIiwgc291bCwga2V5SW5QYXJlbnQsIGVyci5zdGFjayB8fCBlcnIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnREYXRhW2tleUluUGFyZW50XTtcbiAgICAgICAgZGVsZXRlIChwYXRoKFtcIl9cIiwgXCI+XCJdLCBwYXJlbnREYXRhKSB8fCB7fSlba2V5SW5QYXJlbnRdO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwic2VhIHByb3AgZXJyXCIsIHNvdWwsIGtleUluUGFyZW50LCByZXN1bHQsIHBTY2hlbWEpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWxpZGF0ZSgpKS50aGVuKGlzVmFsaWQgPT4ge1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJzZWEgdmFsaWRhdGlvbiBlcnJcIixcbiAgICAgICAgICAgIHNvdWwsXG4gICAgICAgICAgICBrZXlJblBhcmVudCxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyxcbiAgICAgICAgICAgIHBTY2hlbWFcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEFqdiA9IGNvbXBvc2UoXG4gIGFqdiA9PiB7XG4gICAgYWp2LmFkZEtleXdvcmQoXCJzZWFcIiwge1xuICAgICAgYXN5bmM6IHRydWUsXG4gICAgICBtb2RpZnlpbmc6IHRydWUsXG4gICAgICB2YWxpZGF0ZTogdmFsaWRhdGVTZWFQcm9wZXJ0eShhanYpXG4gICAgfSk7XG4gICAgcmV0dXJuIGFqdjtcbiAgfSxcbiAgYWp2QmFzZUluaXRcbik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3VuX3N1cHByZXNzb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3VuX2d1bl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9ndW5fc2VhX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JvdXRlX3BhcnNlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=