(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@notabug/gun-suppressor"), require("ramda"), require("route-parser"));
	else if(typeof define === 'function' && define.amd)
		define("@notabug/gun-suppressor-sear", ["@notabug/gun-suppressor", "ramda", "route-parser"], factory);
	else if(typeof exports === 'object')
		exports["@notabug/gun-suppressor-sear"] = factory(require("@notabug/gun-suppressor"), require("ramda"), require("route-parser"));
	else
		root["@notabug/gun-suppressor-sear"] = factory(root["@notabug/gun-suppressor"], root["ramda"], root["route-parser"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__notabug_gun_suppressor__, __WEBPACK_EXTERNAL_MODULE_ramda__, __WEBPACK_EXTERNAL_MODULE_route_parser__) {
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

var R = _interopRequireWildcard(__webpack_require__(/*! ramda */ "ramda"));

var _routeParser = _interopRequireDefault(__webpack_require__(/*! route-parser */ "route-parser"));

var _gunSuppressor = __webpack_require__(/*! @notabug/gun-suppressor */ "@notabug/gun-suppressor");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
          type: "object",
          properties: {
            ct: {
              type: "string"
            },
            iv: {
              type: "string"
            },
            s: {
              type: "string"
            }
          }
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

var read = function read(Gun, data, key) {
  var pair = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var packed = Gun.SEA.opt.pack(data[key], key, data, R.path(["_", "#"], data));
  return Gun.SEA.verify(packed, pair).then(function (r) {
    if (typeof r === "undefined") {
      throw new Error("invalid sea data");
    }

    return Gun.SEA.opt.unpack(r, key, data);
  });
};

exports.read = read;

var validateSeaProperty = function validateSeaProperty(Gun, ajv) {
  return function (schema, data, pSchema, _cPath, parentData, keyInParent) {
    var soul = R.path(["_", "#"], parentData);
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
    return read(Gun, parentData, keyInParent, authorId).then(function (res) {
      return result = res;
    }).then(function (res) {
      return R.assoc(keyInParent, res, parentData);
    }).catch(function (err) {
      console.error("key err", soul, keyInParent, authorId, parentData[keyInParent], err.stack || err);
      return false;
    }).then(function (res) {
      if (!res || typeof res[keyInParent] === "undefined") {
        delete parentData[keyInParent];
        delete (R.path(["_", ">"], parentData) || {})[keyInParent];
        console.error("sea prop err", soul, keyInParent, result, pSchema);
        return res;
      }

      return Promise.resolve(validate(res)).then(function (isValid) {
        if (!isValid) {
          console.error("sea validation err", soul, keyInParent, result, validate.errors, pSchema);
        }

        return isValid;
      });
    });
  };
};

var initAjv = function initAjv(conf) {
  var Gun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : global.Gun;
  return R.compose(function (ajv) {
    ajv.addKeyword("sea", {
      async: true,
      modifying: true,
      validate: validateSeaProperty(Gun, ajv)
    });
    return ajv;
  }, _gunSuppressor.initAjv)(conf);
};

exports.initAjv = initAjv;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@notabug/gun-suppressor":
/*!******************************************!*\
  !*** external "@notabug/gun-suppressor" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__notabug_gun_suppressor__;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yXCIiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcInJvdXRlLXBhcnNlclwiIl0sIm5hbWVzIjpbIk1BWF9BVVRIT1JfQUxJQVNfU0laRSIsIk1BWF9BVVRIT1JfSURfU0laRSIsImF1dGhvclBhdHRlcm4iLCJzZWFBdXRob3JSb3V0ZSIsInNlYVNvdWxSb3V0ZSIsIkFVVEhfU0NIRU1BIiwic2VhQWxpYXMiLCJ0eXBlIiwibWF4TGVuZ3RoIiwiU0VBQWxpYXMiLCJ0aXRsZSIsIiRhc3luYyIsInNvdWwiLCJwYXR0ZXJuIiwicHJvcGVydGllcyIsImFsaWFzIiwiJHJlZiIsInJlcXVpcmVkIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJlZGdlTWF0Y2hlc0tleSIsImFueU9mIiwic2VhQXV0aG9ySWQiLCJzZWFBdXRoT2JqIiwib25lT2YiLCJlayIsImN0IiwiaXYiLCJzIiwiU0VBQXV0aG9yIiwicHViIiwiZXB1YiIsInNlYSIsImF1dGgiLCJhdXRob3JJZCIsIlBFUk1JU1NJVkVfTk9ERV9TQ0hFTUEiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJQRVJNSVNTSVZFX1NDSEVNQSIsIlNFQU5vZGUiLCJyZWFkIiwiR3VuIiwiZGF0YSIsImtleSIsInBhaXIiLCJwYWNrZWQiLCJTRUEiLCJvcHQiLCJwYWNrIiwiUiIsInZlcmlmeSIsInRoZW4iLCJyIiwiRXJyb3IiLCJ1bnBhY2siLCJ2YWxpZGF0ZVNlYVByb3BlcnR5IiwiYWp2Iiwic2NoZW1hIiwicFNjaGVtYSIsIl9jUGF0aCIsInBhcmVudERhdGEiLCJrZXlJblBhcmVudCIsIm1hdGNoIiwidmFsaWRhdGUiLCJjb21waWxlIiwicmVzdWx0IiwicmVzIiwiYXNzb2MiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJpc1ZhbGlkIiwiZXJyb3JzIiwiaW5pdEFqdiIsImNvbmYiLCJnbG9iYWwiLCJjb21wb3NlIiwiYWRkS2V5d29yZCIsImFzeW5jIiwibW9kaWZ5aW5nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7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ZmlsZSI6IkBub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3NvclwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2VhclwiLCBbXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3NvclwiLCBcInJhbWRhXCIsIFwicm91dGUtcGFyc2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3NvclwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyXCJdID0gZmFjdG9yeShyb290W1wiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3JcIl0sIHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInJvdXRlLXBhcnNlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbm90YWJ1Z19ndW5fc3VwcHJlc3Nvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCBSb3V0ZSBmcm9tIFwicm91dGUtcGFyc2VyXCI7XG5pbXBvcnQge1xuICBQRVJNSVNTSVZFX1NDSEVNQSBhcyBHVU5fUEVSTUlTU0lWRV9TQ0hFTUEsXG4gIGluaXRBanYgYXMgYWp2QmFzZUluaXRcbn0gZnJvbSBcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yXCI7XG5cbmNvbnN0IE1BWF9BVVRIT1JfQUxJQVNfU0laRSA9IDUxMjtcbmNvbnN0IE1BWF9BVVRIT1JfSURfU0laRSA9IDEyODsgLy8gPz8/XG5jb25zdCBhdXRob3JQYXR0ZXJuID0gXCJ+OmF1dGhvcklkXCI7XG5jb25zdCBzZWFBdXRob3JSb3V0ZSA9IG5ldyBSb3V0ZShhdXRob3JQYXR0ZXJuKTtcbmNvbnN0IHNlYVNvdWxSb3V0ZSA9IG5ldyBSb3V0ZShcIipzdHVmZn46YXV0aG9ySWQuXCIpO1xuXG5leHBvcnQgY29uc3QgQVVUSF9TQ0hFTUEgPSB7XG4gIHNlYUFsaWFzOiB7IHR5cGU6IFwic3RyaW5nXCIsIG1heExlbmd0aDogTUFYX0FVVEhPUl9BTElBU19TSVpFIH0sXG4gIFNFQUFsaWFzOiB7XG4gICAgdGl0bGU6IFwiR3VuIFNFQSBBbGlhc1wiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBcIn5AOmFsaWFzXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFsaWFzOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUFsaWFzXCIgfVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbXCJhbGlhc1wiXVxuICAgIH0sXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIGVkZ2VNYXRjaGVzS2V5OiB0cnVlLFxuICAgICAgYW55T2Y6IFt7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9TRUFBdXRob3JFZGdlXCIgfV1cbiAgICB9XG4gIH0sXG4gIHNlYUF1dGhvcklkOiB7IHR5cGU6IFwic3RyaW5nXCIsIG1heExlbmd0aDogTUFYX0FVVEhPUl9JRF9TSVpFIH0sXG4gIHNlYUF1dGhPYmo6IHtcbiAgICBvbmVPZjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgZWs6IHtcbiAgICAgICAgICAgIHR5cGU6IFwib2JqZWN0XCIsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICAgIGN0OiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICAgICAgaXY6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgICAgICBzOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgczogeyB0eXBlOiBcInN0cmluZ1wiIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJzdHJpbmdcIlxuICAgICAgfVxuICAgIF1cbiAgfSxcbiAgU0VBQXV0aG9yOiB7XG4gICAgdGl0bGU6IFwiR3VuIFNFQSBBdXRob3JcIixcbiAgICAkYXN5bmM6IHRydWUsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgcHViOiB7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9zZWFBdXRob3JJZFwiIH0sXG4gICAgICBlcHViOiB7IHNlYTogeyB0eXBlOiBcInN0cmluZ1wiIH0gfSxcbiAgICAgIGFsaWFzOiB7IHNlYTogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBbGlhc1wiIH0gfSxcbiAgICAgIGF1dGg6IHtcbiAgICAgICAgc2VhOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhPYmpcIiB9XG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgICAgc2VhOiB7XG4gICAgICAgIGFueU9mOiBbXG4gICAgICAgICAgeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9HdW5FZGdlXCIgfSxcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhPYmpcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudWxsXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwiYm9vbGVhblwiIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgc291bDoge1xuICAgICAgcGF0dGVybjogYXV0aG9yUGF0dGVybixcbiAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYXV0aG9ySWQ6IHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aG9ySWRcIiB9XG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFtcImF1dGhvcklkXCJdXG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUEVSTUlTU0lWRV9OT0RFX1NDSEVNQSA9IHtcbiAgdGl0bGU6IFwiR3VuIFNFQSBOb2RlXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkFueSBTRUEgbm9kZSBzdXBwb3J0ZWQgYnkgZ3VuXCIsXG4gICRhc3luYzogdHJ1ZSxcblxuICBzb3VsOiB7XG4gICAgcGF0dGVybjogXCIqcGF0aH46YXV0aG9ySWQuXCIsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgcGF0aDogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICBhdXRob3JJZDogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRob3JJZFwiIH1cbiAgICB9LFxuICAgIHJlcXVpcmVkOiBbXCJwYXRoXCIsIFwiYXV0aG9ySWRcIl1cbiAgfSxcblxuICBhZGRpdGlvbmFsUHJvcGVydGllczoge1xuICAgIFwiLipcIjoge1xuICAgICAgc2VhOiB7XG4gICAgICAgIGFueU9mOiBbXG4gICAgICAgICAgeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9HdW5Ob2RlTWV0YVwiIH0sXG4gICAgICAgICAgeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9HdW5FZGdlXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwibnVsbFwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcImJvb2xlYW5cIiB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQRVJNSVNTSVZFX1NDSEVNQSA9IHtcbiAgLi4uQVVUSF9TQ0hFTUEsXG4gIFNFQU5vZGU6IFBFUk1JU1NJVkVfTk9ERV9TQ0hFTUEsXG4gIC4uLkdVTl9QRVJNSVNTSVZFX1NDSEVNQVxufTtcblxuZXhwb3J0IGNvbnN0IHJlYWQgPSAoR3VuLCBkYXRhLCBrZXksIHBhaXIgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBwYWNrZWQgPSBHdW4uU0VBLm9wdC5wYWNrKFxuICAgIGRhdGFba2V5XSxcbiAgICBrZXksXG4gICAgZGF0YSxcbiAgICBSLnBhdGgoW1wiX1wiLCBcIiNcIl0sIGRhdGEpXG4gICk7XG5cbiAgcmV0dXJuIEd1bi5TRUEudmVyaWZ5KHBhY2tlZCwgcGFpcikudGhlbihyID0+IHtcbiAgICBpZiAodHlwZW9mIHIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgc2VhIGRhdGFcIik7XG4gICAgfVxuICAgIHJldHVybiBHdW4uU0VBLm9wdC51bnBhY2sociwga2V5LCBkYXRhKTtcbiAgfSk7XG59O1xuXG5jb25zdCB2YWxpZGF0ZVNlYVByb3BlcnR5ID0gKEd1biwgYWp2KSA9PiAoXG4gIHNjaGVtYSxcbiAgZGF0YSxcbiAgcFNjaGVtYSxcbiAgX2NQYXRoLFxuICBwYXJlbnREYXRhLFxuICBrZXlJblBhcmVudFxuKSA9PiB7XG4gIGNvbnN0IHNvdWwgPSBSLnBhdGgoW1wiX1wiLCBcIiNcIl0sIHBhcmVudERhdGEpO1xuXG4gIGlmIChrZXlJblBhcmVudCA9PT0gXCJfXCIpIHJldHVybiB0cnVlO1xuICBjb25zdCB7IGF1dGhvcklkIH0gPVxuICAgIHNlYVNvdWxSb3V0ZS5tYXRjaChzb3VsKSB8fCBzZWFBdXRob3JSb3V0ZS5tYXRjaChzb3VsKSB8fCB7fTtcblxuICBpZiAoIWF1dGhvcklkKSByZXR1cm4gZmFsc2U7XG4gIGlmIChzb3VsID09PSBgfiR7YXV0aG9ySWR9YCAmJiBrZXlJblBhcmVudCA9PT0gXCJwdWJcIikge1xuICAgIHJldHVybiBkYXRhID09PSBhdXRob3JJZDtcbiAgfVxuXG4gIC8vIFZhbGlkYXRlIGFzIGFuIG9iamVjdCB0byBnaXZlIHByb3BlcnR5IHZhbGlkYXRvcnMgbW9yZSBjb250ZXh0XG4gIGNvbnN0IHZhbGlkYXRlID0gYWp2LmNvbXBpbGUoe1xuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB0cnVlLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIFtrZXlJblBhcmVudF06IHNjaGVtYVxuICAgIH1cbiAgfSk7XG4gIGxldCByZXN1bHQ7XG5cbiAgcmV0dXJuIHJlYWQoR3VuLCBwYXJlbnREYXRhLCBrZXlJblBhcmVudCwgYXV0aG9ySWQpXG4gICAgLnRoZW4ocmVzID0+IChyZXN1bHQgPSByZXMpKVxuICAgIC50aGVuKHJlcyA9PiBSLmFzc29jKGtleUluUGFyZW50LCByZXMsIHBhcmVudERhdGEpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgXCJrZXkgZXJyXCIsXG4gICAgICAgIHNvdWwsXG4gICAgICAgIGtleUluUGFyZW50LFxuICAgICAgICBhdXRob3JJZCxcbiAgICAgICAgcGFyZW50RGF0YVtrZXlJblBhcmVudF0sXG4gICAgICAgIGVyci5zdGFjayB8fCBlcnJcbiAgICAgICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4ge1xuICAgICAgaWYgKCFyZXMgfHwgdHlwZW9mIHJlc1trZXlJblBhcmVudF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgZGVsZXRlIHBhcmVudERhdGFba2V5SW5QYXJlbnRdO1xuICAgICAgICBkZWxldGUgKFIucGF0aChbXCJfXCIsIFwiPlwiXSwgcGFyZW50RGF0YSkgfHwge30pW2tleUluUGFyZW50XTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcInNlYSBwcm9wIGVyclwiLCBzb3VsLCBrZXlJblBhcmVudCwgcmVzdWx0LCBwU2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGUocmVzKSkudGhlbihpc1ZhbGlkID0+IHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwic2VhIHZhbGlkYXRpb24gZXJyXCIsXG4gICAgICAgICAgICBzb3VsLFxuICAgICAgICAgICAga2V5SW5QYXJlbnQsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMsXG4gICAgICAgICAgICBwU2NoZW1hXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRBanYgPSAoY29uZiwgR3VuID0gZ2xvYmFsLkd1bikgPT5cbiAgUi5jb21wb3NlKFxuICAgIGFqdiA9PiB7XG4gICAgICBhanYuYWRkS2V5d29yZChcInNlYVwiLCB7XG4gICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICBtb2RpZnlpbmc6IHRydWUsXG4gICAgICAgIHZhbGlkYXRlOiB2YWxpZGF0ZVNlYVByb3BlcnR5KEd1biwgYWp2KVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWp2O1xuICAgIH0sXG4gICAgYWp2QmFzZUluaXRcbiAgKShjb25mKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbm90YWJ1Z19ndW5fc3VwcHJlc3Nvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9