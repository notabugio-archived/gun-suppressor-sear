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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yXCIiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcInJvdXRlLXBhcnNlclwiIl0sIm5hbWVzIjpbIk1BWF9BVVRIT1JfQUxJQVNfU0laRSIsIk1BWF9BVVRIT1JfSURfU0laRSIsImF1dGhvclBhdHRlcm4iLCJzZWFBdXRob3JSb3V0ZSIsInNlYVNvdWxSb3V0ZSIsIkFVVEhfU0NIRU1BIiwic2VhQWxpYXMiLCJ0eXBlIiwibWF4TGVuZ3RoIiwiU0VBQWxpYXMiLCJ0aXRsZSIsIiRhc3luYyIsInNvdWwiLCJwYXR0ZXJuIiwicHJvcGVydGllcyIsImFsaWFzIiwiJHJlZiIsInJlcXVpcmVkIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJlZGdlTWF0Y2hlc0tleSIsImFueU9mIiwic2VhQXV0aG9ySWQiLCJzZWFBdXRoT2JqIiwib25lT2YiLCJlayIsInMiLCJTRUFBdXRob3IiLCJwdWIiLCJlcHViIiwic2VhIiwiYXV0aCIsImF1dGhvcklkIiwiUEVSTUlTU0lWRV9OT0RFX1NDSEVNQSIsImRlc2NyaXB0aW9uIiwicGF0aCIsIlBFUk1JU1NJVkVfU0NIRU1BIiwiU0VBTm9kZSIsInJlYWQiLCJHdW4iLCJkYXRhIiwia2V5IiwicGFpciIsInBhY2tlZCIsIlNFQSIsIm9wdCIsInBhY2siLCJSIiwidmVyaWZ5IiwidGhlbiIsInIiLCJFcnJvciIsInVucGFjayIsInZhbGlkYXRlU2VhUHJvcGVydHkiLCJhanYiLCJzY2hlbWEiLCJwU2NoZW1hIiwiX2NQYXRoIiwicGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJ2YWxpZGF0ZSIsImNvbXBpbGUiLCJyZXN1bHQiLCJyZXMiLCJhc3NvYyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzVmFsaWQiLCJlcnJvcnMiLCJpbml0QWp2IiwiY29uZiIsImdsb2JhbCIsImNvbXBvc2UiLCJhZGRLZXl3b3JkIiwiYXN5bmMiLCJtb2RpZnlpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FB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eURQLE9BQXpEO0FBQ0EsZUFBT1EsR0FBUDtBQUNEOztBQUNELGFBQU9PLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQlgsUUFBUSxDQUFDRyxHQUFELENBQXhCLEVBQStCZixJQUEvQixDQUFvQyxVQUFBd0IsT0FBTyxFQUFJO0FBQ3BELFlBQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1pMLGlCQUFPLENBQUNDLEtBQVIsQ0FDRSxvQkFERixFQUVFeEQsSUFGRixFQUdFOEMsV0FIRixFQUlFSSxNQUpGLEVBS0VGLFFBQVEsQ0FBQ2EsTUFMWCxFQU1FbEIsT0FORjtBQVFEOztBQUNELGVBQU9pQixPQUFQO0FBQ0QsT0FaTSxDQUFQO0FBYUQsS0FsQ0ksQ0FBUDtBQW1DRCxHQS9EMkI7QUFBQSxDQUE1Qjs7QUFpRU8sSUFBTUUsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRDtBQUFBLE1BQU9yQyxHQUFQLHVFQUFhc0MsTUFBTSxDQUFDdEMsR0FBcEI7QUFBQSxTQUNyQlEsQ0FBQyxDQUFDK0IsT0FBRixDQUNFLFVBQUF4QixHQUFHLEVBQUk7QUFDTEEsT0FBRyxDQUFDeUIsVUFBSixDQUFlLEtBQWYsRUFBc0I7QUFDcEJDLFdBQUssRUFBRSxJQURhO0FBRXBCQyxlQUFTLEVBQUUsSUFGUztBQUdwQnBCLGNBQVEsRUFBRVIsbUJBQW1CLENBQUNkLEdBQUQsRUFBTWUsR0FBTjtBQUhULEtBQXRCO0FBS0EsV0FBT0EsR0FBUDtBQUNELEdBUkgsMEJBVUVzQixJQVZGLENBRHFCO0FBQUEsQ0FBaEI7Ozs7Ozs7Ozs7Ozs7O0FDcE1QLHFFOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6IkBub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3NvclwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2VhclwiLCBbXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3NvclwiLCBcInJhbWRhXCIsIFwicm91dGUtcGFyc2VyXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXJcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3NvclwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyXCJdID0gZmFjdG9yeShyb290W1wiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3JcIl0sIHJvb3RbXCJyYW1kYVwiXSwgcm9vdFtcInJvdXRlLXBhcnNlclwiXSk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fbm90YWJ1Z19ndW5fc3VwcHJlc3Nvcl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX18pIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsIi8qIGdsb2JhbHMgUHJvbWlzZSAqL1xuaW1wb3J0ICogYXMgUiBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCBSb3V0ZSBmcm9tIFwicm91dGUtcGFyc2VyXCI7XG5pbXBvcnQge1xuICBQRVJNSVNTSVZFX1NDSEVNQSBhcyBHVU5fUEVSTUlTU0lWRV9TQ0hFTUEsXG4gIGluaXRBanYgYXMgYWp2QmFzZUluaXRcbn0gZnJvbSBcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yXCI7XG5cbmNvbnN0IE1BWF9BVVRIT1JfQUxJQVNfU0laRSA9IDUxMjtcbmNvbnN0IE1BWF9BVVRIT1JfSURfU0laRSA9IDEyODsgLy8gPz8/XG5jb25zdCBhdXRob3JQYXR0ZXJuID0gXCJ+OmF1dGhvcklkXCI7XG5jb25zdCBzZWFBdXRob3JSb3V0ZSA9IG5ldyBSb3V0ZShhdXRob3JQYXR0ZXJuKTtcbmNvbnN0IHNlYVNvdWxSb3V0ZSA9IG5ldyBSb3V0ZShcIipzdHVmZn46YXV0aG9ySWQuXCIpO1xuXG5leHBvcnQgY29uc3QgQVVUSF9TQ0hFTUEgPSB7XG4gIHNlYUFsaWFzOiB7IHR5cGU6IFwic3RyaW5nXCIsIG1heExlbmd0aDogTUFYX0FVVEhPUl9BTElBU19TSVpFIH0sXG4gIFNFQUFsaWFzOiB7XG4gICAgdGl0bGU6IFwiR3VuIFNFQSBBbGlhc1wiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBcIn5AOmFsaWFzXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFsaWFzOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUFsaWFzXCIgfVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbXCJhbGlhc1wiXVxuICAgIH0sXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIGVkZ2VNYXRjaGVzS2V5OiB0cnVlLFxuICAgICAgYW55T2Y6IFt7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9TRUFBdXRob3JFZGdlXCIgfV1cbiAgICB9XG4gIH0sXG4gIHNlYUF1dGhvcklkOiB7IHR5cGU6IFwic3RyaW5nXCIsIG1heExlbmd0aDogTUFYX0FVVEhPUl9JRF9TSVpFIH0sXG4gIHNlYUF1dGhPYmo6IHtcbiAgICBvbmVPZjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgZWs6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHM6IHsgdHlwZTogXCJzdHJpbmdcIiB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFNFQUF1dGhvcjoge1xuICAgIHRpdGxlOiBcIkd1biBTRUEgQXV0aG9yXCIsXG4gICAgJGFzeW5jOiB0cnVlLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHB1YjogeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvc2VhQXV0aG9ySWRcIiB9LFxuICAgICAgZXB1YjogeyBzZWE6IHsgdHlwZTogXCJzdHJpbmdcIiB9IH0sXG4gICAgICBhbGlhczogeyBzZWE6IHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQWxpYXNcIiB9IH0sXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHNlYTogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRoT2JqXCIgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIHNlYToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvR3VuRWRnZVwiIH0sXG4gICAgICAgICAgeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRoT2JqXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwibnVsbFwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcImJvb2xlYW5cIiB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNvdWw6IHtcbiAgICAgIHBhdHRlcm46IGF1dGhvclBhdHRlcm4sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGF1dGhvcklkOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhvcklkXCIgfVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbXCJhdXRob3JJZFwiXVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJVkVfTk9ERV9TQ0hFTUEgPSB7XG4gIHRpdGxlOiBcIkd1biBTRUEgTm9kZVwiLFxuICBkZXNjcmlwdGlvbjogXCJBbnkgU0VBIG5vZGUgc3VwcG9ydGVkIGJ5IGd1blwiLFxuICAkYXN5bmM6IHRydWUsXG5cbiAgc291bDoge1xuICAgIHBhdHRlcm46IFwiKnBhdGh+OmF1dGhvcklkLlwiLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHBhdGg6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgYXV0aG9ySWQ6IHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aG9ySWRcIiB9XG4gICAgfSxcbiAgICByZXF1aXJlZDogW1wicGF0aFwiLCBcImF1dGhvcklkXCJdXG4gIH0sXG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICBcIi4qXCI6IHtcbiAgICAgIHNlYToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvR3VuTm9kZU1ldGFcIiB9LFxuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvR3VuRWRnZVwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bGxcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJib29sZWFuXCIgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUEVSTUlTU0lWRV9TQ0hFTUEgPSB7XG4gIC4uLkFVVEhfU0NIRU1BLFxuICBTRUFOb2RlOiBQRVJNSVNTSVZFX05PREVfU0NIRU1BLFxuICAuLi5HVU5fUEVSTUlTU0lWRV9TQ0hFTUFcbn07XG5cbmV4cG9ydCBjb25zdCByZWFkID0gKEd1biwgZGF0YSwga2V5LCBwYWlyID0gZmFsc2UpID0+IHtcbiAgY29uc3QgcGFja2VkID0gR3VuLlNFQS5vcHQucGFjayhcbiAgICBkYXRhW2tleV0sXG4gICAga2V5LFxuICAgIGRhdGEsXG4gICAgUi5wYXRoKFtcIl9cIiwgXCIjXCJdLCBkYXRhKVxuICApO1xuXG4gIHJldHVybiBHdW4uU0VBLnZlcmlmeShwYWNrZWQsIHBhaXIpLnRoZW4ociA9PiB7XG4gICAgaWYgKHR5cGVvZiByID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHNlYSBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gR3VuLlNFQS5vcHQudW5wYWNrKHIsIGtleSwgZGF0YSk7XG4gIH0pO1xufTtcblxuY29uc3QgdmFsaWRhdGVTZWFQcm9wZXJ0eSA9IChHdW4sIGFqdikgPT4gKFxuICBzY2hlbWEsXG4gIGRhdGEsXG4gIHBTY2hlbWEsXG4gIF9jUGF0aCxcbiAgcGFyZW50RGF0YSxcbiAga2V5SW5QYXJlbnRcbikgPT4ge1xuICBjb25zdCBzb3VsID0gUi5wYXRoKFtcIl9cIiwgXCIjXCJdLCBwYXJlbnREYXRhKTtcblxuICBpZiAoa2V5SW5QYXJlbnQgPT09IFwiX1wiKSByZXR1cm4gdHJ1ZTtcbiAgY29uc3QgeyBhdXRob3JJZCB9ID1cbiAgICBzZWFTb3VsUm91dGUubWF0Y2goc291bCkgfHwgc2VhQXV0aG9yUm91dGUubWF0Y2goc291bCkgfHwge307XG5cbiAgaWYgKCFhdXRob3JJZCkgcmV0dXJuIGZhbHNlO1xuICBpZiAoc291bCA9PT0gYH4ke2F1dGhvcklkfWAgJiYga2V5SW5QYXJlbnQgPT09IFwicHViXCIpIHtcbiAgICByZXR1cm4gZGF0YSA9PT0gYXV0aG9ySWQ7XG4gIH1cblxuICAvLyBWYWxpZGF0ZSBhcyBhbiBvYmplY3QgdG8gZ2l2ZSBwcm9wZXJ0eSB2YWxpZGF0b3JzIG1vcmUgY29udGV4dFxuICBjb25zdCB2YWxpZGF0ZSA9IGFqdi5jb21waWxlKHtcbiAgICBhZGRpdGlvbmFsUHJvcGVydGllczogdHJ1ZSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBba2V5SW5QYXJlbnRdOiBzY2hlbWFcbiAgICB9XG4gIH0pO1xuICBsZXQgcmVzdWx0O1xuXG4gIHJldHVybiByZWFkKEd1biwgcGFyZW50RGF0YSwga2V5SW5QYXJlbnQsIGF1dGhvcklkKVxuICAgIC50aGVuKHJlcyA9PiAocmVzdWx0ID0gcmVzKSlcbiAgICAudGhlbihyZXMgPT4gUi5hc3NvYyhrZXlJblBhcmVudCwgcmVzLCBwYXJlbnREYXRhKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIFwia2V5IGVyclwiLFxuICAgICAgICBzb3VsLFxuICAgICAgICBrZXlJblBhcmVudCxcbiAgICAgICAgYXV0aG9ySWQsXG4gICAgICAgIHBhcmVudERhdGFba2V5SW5QYXJlbnRdLFxuICAgICAgICBlcnIuc3RhY2sgfHwgZXJyXG4gICAgICApO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmICghcmVzIHx8IHR5cGVvZiByZXNba2V5SW5QYXJlbnRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJlbnREYXRhW2tleUluUGFyZW50XTtcbiAgICAgICAgZGVsZXRlIChSLnBhdGgoW1wiX1wiLCBcIj5cIl0sIHBhcmVudERhdGEpIHx8IHt9KVtrZXlJblBhcmVudF07XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJzZWEgcHJvcCBlcnJcIiwgc291bCwga2V5SW5QYXJlbnQsIHJlc3VsdCwgcFNjaGVtYSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRlKHJlcykpLnRoZW4oaXNWYWxpZCA9PiB7XG4gICAgICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICBcInNlYSB2YWxpZGF0aW9uIGVyclwiLFxuICAgICAgICAgICAgc291bCxcbiAgICAgICAgICAgIGtleUluUGFyZW50LFxuICAgICAgICAgICAgcmVzdWx0LFxuICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzLFxuICAgICAgICAgICAgcFNjaGVtYVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzVmFsaWQ7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBpbml0QWp2ID0gKGNvbmYsIEd1biA9IGdsb2JhbC5HdW4pID0+XG4gIFIuY29tcG9zZShcbiAgICBhanYgPT4ge1xuICAgICAgYWp2LmFkZEtleXdvcmQoXCJzZWFcIiwge1xuICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgbW9kaWZ5aW5nOiB0cnVlLFxuICAgICAgICB2YWxpZGF0ZTogdmFsaWRhdGVTZWFQcm9wZXJ0eShHdW4sIGFqdilcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFqdjtcbiAgICB9LFxuICAgIGFqdkJhc2VJbml0XG4gICkoY29uZik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX25vdGFidWdfZ3VuX3N1cHByZXNzb3JfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmFtZGFfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcm91dGVfcGFyc2VyX187Il0sInNvdXJjZVJvb3QiOiIifQ==