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
    _require$opt = _require.opt,
    unpack = _require$opt.unpack,
    parse = _require$opt.parse;

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
  return verify(unpack(parse(data[key]), key, data), pair).then(function (r) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcImd1bi1zdXBwcmVzc29yXCIiLCJ3ZWJwYWNrOi8vZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcImd1bi9ndW5cIiIsIndlYnBhY2s6Ly9ndW4tc3VwcHJlc3Nvci1zZWFyL2V4dGVybmFsIFwiZ3VuL3NlYVwiIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvZXh0ZXJuYWwgXCJyYW1kYVwiIiwid2VicGFjazovL2d1bi1zdXBwcmVzc29yLXNlYXIvZXh0ZXJuYWwgXCJyb3V0ZS1wYXJzZXJcIiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJHdW4iLCJyZXF1aXJlIiwidmVyaWZ5Iiwib3B0IiwidW5wYWNrIiwicGFyc2UiLCJNQVhfQVVUSE9SX0FMSUFTX1NJWkUiLCJNQVhfQVVUSE9SX0lEX1NJWkUiLCJhdXRob3JQYXR0ZXJuIiwic2VhQXV0aG9yUm91dGUiLCJzZWFTb3VsUm91dGUiLCJBVVRIX1NDSEVNQSIsInNlYUFsaWFzIiwidHlwZSIsIm1heExlbmd0aCIsIlNFQUFsaWFzIiwidGl0bGUiLCIkYXN5bmMiLCJzb3VsIiwicGF0dGVybiIsInByb3BlcnRpZXMiLCJhbGlhcyIsIiRyZWYiLCJyZXF1aXJlZCIsImFkZGl0aW9uYWxQcm9wZXJ0aWVzIiwiZWRnZU1hdGNoZXNLZXkiLCJhbnlPZiIsInNlYUF1dGhvcklkIiwic2VhQXV0aE9iaiIsIm9uZU9mIiwiZWsiLCJzIiwiU0VBQXV0aG9yIiwicHViIiwiZXB1YiIsInNlYSIsImF1dGgiLCJhdXRob3JJZCIsIlBFUk1JU1NJVkVfTk9ERV9TQ0hFTUEiLCJkZXNjcmlwdGlvbiIsInBhdGgiLCJQRVJNSVNTSVZFX1NDSEVNQSIsIlNFQU5vZGUiLCJyZWFkIiwiZGF0YSIsImtleSIsInBhaXIiLCJ0aGVuIiwiciIsIkVycm9yIiwidmFsaWRhdGVTZWFQcm9wZXJ0eSIsImFqdiIsInNjaGVtYSIsInBTY2hlbWEiLCJjUGF0aCIsInBhcmVudERhdGEiLCJrZXlJblBhcmVudCIsIm1hdGNoIiwidmFsaWRhdGUiLCJjb21waWxlIiwicmVzdWx0IiwicmVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFjayIsIlByb21pc2UiLCJyZXNvbHZlIiwiaXNWYWxpZCIsImVycm9ycyIsImluaXRBanYiLCJhZGRLZXl3b3JkIiwiYXN5bmMiLCJtb2RpZnlpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FB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SUFGRixFQUdFc0MsV0FIRixFQUlFSSxNQUpGLEVBS0VGLFFBQVEsQ0FBQ1ksTUFMWCxFQU1FakIsT0FORjtBQVFEOztBQUNELGVBQU9nQixPQUFQO0FBQ0QsT0FaTSxDQUFQO0FBYUQsS0EzQkksQ0FBUDtBQTRCRCxHQXhEOEI7QUFBQSxDQUEvQjs7QUEwRE8sSUFBTUUsT0FBTyxHQUFHLG9CQUNyQixVQUFBcEIsR0FBRyxFQUFJO0FBQ0xBLEtBQUcsQ0FBQ3FCLFVBQUosQ0FBZSxLQUFmLEVBQXNCO0FBQ3BCQyxTQUFLLEVBQUUsSUFEYTtBQUVwQkMsYUFBUyxFQUFFLElBRlM7QUFHcEJoQixZQUFRLEVBQUVSLG1CQUFtQixDQUFDQyxHQUFEO0FBSFQsR0FBdEI7QUFLQSxTQUFPQSxHQUFQO0FBQ0QsQ0FSb0IseUJBQWhCOzs7Ozs7Ozs7Ozs7O0FDM0xQLDREOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLG1EOzs7Ozs7Ozs7OztBQ0FBLDBEIiwiZmlsZSI6Imd1bi1zdXBwcmVzc29yLXNlYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJndW4tc3VwcHJlc3NvclwiKSwgcmVxdWlyZShcImd1bi9ndW5cIiksIHJlcXVpcmUoXCJndW4vc2VhXCIpLCByZXF1aXJlKFwicmFtZGFcIiksIHJlcXVpcmUoXCJyb3V0ZS1wYXJzZXJcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoXCJndW4tc3VwcHJlc3Nvci1zZWFyXCIsIFtcImd1bi1zdXBwcmVzc29yXCIsIFwiZ3VuL2d1blwiLCBcImd1bi9zZWFcIiwgXCJyYW1kYVwiLCBcInJvdXRlLXBhcnNlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJndW4tc3VwcHJlc3Nvci1zZWFyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiZ3VuLXN1cHByZXNzb3JcIiksIHJlcXVpcmUoXCJndW4vZ3VuXCIpLCByZXF1aXJlKFwiZ3VuL3NlYVwiKSwgcmVxdWlyZShcInJhbWRhXCIpLCByZXF1aXJlKFwicm91dGUtcGFyc2VyXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJndW4tc3VwcHJlc3Nvci1zZWFyXCJdID0gZmFjdG9yeShyb290W1wiZ3VuLXN1cHByZXNzb3JcIl0sIHJvb3RbXCJndW4vZ3VuXCJdLCByb290W1wiZ3VuL3NlYVwiXSwgcm9vdFtcInJhbWRhXCJdLCByb290W1wicm91dGUtcGFyc2VyXCJdKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2d1bl9zdXBwcmVzc29yX18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3VuX2d1bl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2d1bl9zZWFfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JvdXRlX3BhcnNlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCB7IGNvbXBvc2UsIHBhdGgsIGFzc29jIH0gZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgUm91dGUgZnJvbSBcInJvdXRlLXBhcnNlclwiO1xuaW1wb3J0IHtcbiAgUEVSTUlTU0lWRV9TQ0hFTUEgYXMgR1VOX1BFUk1JU1NJVkVfU0NIRU1BLFxuICBpbml0QWp2IGFzIGFqdkJhc2VJbml0XG59IGZyb20gXCJndW4tc3VwcHJlc3NvclwiO1xuXG5nbG9iYWwuR3VuID0gZ2xvYmFsLkd1biB8fCByZXF1aXJlKFwiZ3VuL2d1blwiKTtcbmNvbnN0IHtcbiAgdmVyaWZ5LFxuICBvcHQ6IHsgdW5wYWNrLCBwYXJzZSB9XG59ID0gcmVxdWlyZShcImd1bi9zZWFcIik7XG5cbmNvbnN0IE1BWF9BVVRIT1JfQUxJQVNfU0laRSA9IDUxMjtcbmNvbnN0IE1BWF9BVVRIT1JfSURfU0laRSA9IDEyODsgLy8gPz8/XG5jb25zdCBhdXRob3JQYXR0ZXJuID0gXCJ+OmF1dGhvcklkXCI7XG5jb25zdCBzZWFBdXRob3JSb3V0ZSA9IG5ldyBSb3V0ZShhdXRob3JQYXR0ZXJuKTtcbmNvbnN0IHNlYVNvdWxSb3V0ZSA9IG5ldyBSb3V0ZShcIipzdHVmZn46YXV0aG9ySWQuXCIpO1xuXG5leHBvcnQgY29uc3QgQVVUSF9TQ0hFTUEgPSB7XG4gIHNlYUFsaWFzOiB7IHR5cGU6IFwic3RyaW5nXCIsIG1heExlbmd0aDogTUFYX0FVVEhPUl9BTElBU19TSVpFIH0sXG4gIFNFQUFsaWFzOiB7XG4gICAgdGl0bGU6IFwiR3VuIFNFQSBBbGlhc1wiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBcIn5AOmFsaWFzXCIsXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFsaWFzOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUFsaWFzXCIgfVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbXCJhbGlhc1wiXVxuICAgIH0sXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIGVkZ2VNYXRjaGVzS2V5OiB0cnVlLFxuICAgICAgYW55T2Y6IFt7ICRyZWY6IFwiIy9kZWZpbml0aW9ucy9TRUFBdXRob3JFZGdlXCIgfV1cbiAgICB9XG4gIH0sXG4gIHNlYUF1dGhvcklkOiB7IHR5cGU6IFwic3RyaW5nXCIsIG1heExlbmd0aDogTUFYX0FVVEhPUl9JRF9TSVpFIH0sXG4gIHNlYUF1dGhPYmo6IHtcbiAgICBvbmVPZjogW1xuICAgICAge1xuICAgICAgICB0eXBlOiBcIm9iamVjdFwiLFxuICAgICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgZWs6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHM6IHsgdHlwZTogXCJzdHJpbmdcIiB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IFwic3RyaW5nXCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFNFQUF1dGhvcjoge1xuICAgIHRpdGxlOiBcIkd1biBTRUEgQXV0aG9yXCIsXG4gICAgJGFzeW5jOiB0cnVlLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHB1YjogeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvc2VhQXV0aG9ySWRcIiB9LFxuICAgICAgZXB1YjogeyBzZWE6IHsgdHlwZTogXCJzdHJpbmdcIiB9IH0sXG4gICAgICBhbGlhczogeyBzZWE6IHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQWxpYXNcIiB9IH0sXG4gICAgICBhdXRoOiB7XG4gICAgICAgIHNlYTogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRoT2JqXCIgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICAgIHNlYToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvR3VuRWRnZVwiIH0sXG4gICAgICAgICAgeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRoT2JqXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwibnVsbFwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bWJlclwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcImJvb2xlYW5cIiB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIHNvdWw6IHtcbiAgICAgIHBhdHRlcm46IGF1dGhvclBhdHRlcm4sXG4gICAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGF1dGhvcklkOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhvcklkXCIgfVxuICAgICAgfSxcbiAgICAgIHJlcXVpcmVkOiBbXCJhdXRob3JJZFwiXVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJVkVfTk9ERV9TQ0hFTUEgPSB7XG4gIHRpdGxlOiBcIkd1biBTRUEgTm9kZVwiLFxuICBkZXNjcmlwdGlvbjogXCJBbnkgU0VBIG5vZGUgc3VwcG9ydGVkIGJ5IGd1blwiLFxuICAkYXN5bmM6IHRydWUsXG5cbiAgc291bDoge1xuICAgIHBhdHRlcm46IFwiKnBhdGh+OmF1dGhvcklkLlwiLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHBhdGg6IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgYXV0aG9ySWQ6IHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aG9ySWRcIiB9XG4gICAgfSxcbiAgICByZXF1aXJlZDogW1wicGF0aFwiLCBcImF1dGhvcklkXCJdXG4gIH0sXG5cbiAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHtcbiAgICBcIi4qXCI6IHtcbiAgICAgIHNlYToge1xuICAgICAgICBhbnlPZjogW1xuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvR3VuTm9kZU1ldGFcIiB9LFxuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvR3VuRWRnZVwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bGxcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJib29sZWFuXCIgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgUEVSTUlTU0lWRV9TQ0hFTUEgPSB7XG4gIC4uLkFVVEhfU0NIRU1BLFxuICBTRUFOb2RlOiBQRVJNSVNTSVZFX05PREVfU0NIRU1BLFxuICAuLi5HVU5fUEVSTUlTU0lWRV9TQ0hFTUFcbn07XG5cbmV4cG9ydCBjb25zdCByZWFkID0gKGRhdGEsIGtleSwgcGFpciA9IGZhbHNlKSA9PlxuICB2ZXJpZnkodW5wYWNrKHBhcnNlKGRhdGFba2V5XSksIGtleSwgZGF0YSksIHBhaXIpLnRoZW4ociA9PiB7XG4gICAgaWYgKHR5cGVvZiByID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHNlYSBkYXRhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdW5wYWNrKHIsIGtleSwgZGF0YSk7XG4gIH0pO1xuXG5jb25zdCB2YWxpZGF0ZVNlYVByb3BlcnR5ID0gYWp2ID0+IChcbiAgc2NoZW1hLFxuICBkYXRhLFxuICBwU2NoZW1hLFxuICBjUGF0aCxcbiAgcGFyZW50RGF0YSxcbiAga2V5SW5QYXJlbnRcbikgPT4ge1xuICBjb25zdCBzb3VsID0gcGF0aChbXCJfXCIsIFwiI1wiXSwgcGFyZW50RGF0YSk7XG5cbiAgaWYgKGtleUluUGFyZW50ID09PSBcIl9cIikgcmV0dXJuIHRydWU7XG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9XG4gICAgc2VhU291bFJvdXRlLm1hdGNoKHNvdWwpIHx8IHNlYUF1dGhvclJvdXRlLm1hdGNoKHNvdWwpIHx8IHt9O1xuXG4gIGlmICghYXV0aG9ySWQpIHJldHVybiBmYWxzZTtcbiAgaWYgKHNvdWwgPT09IGB+JHthdXRob3JJZH1gICYmIGtleUluUGFyZW50ID09PSBcInB1YlwiKSB7XG4gICAgcmV0dXJuIGRhdGEgPT09IGF1dGhvcklkO1xuICB9XG5cbiAgLy8gVmFsaWRhdGUgYXMgYW4gb2JqZWN0IHRvIGdpdmUgcHJvcGVydHkgdmFsaWRhdG9ycyBtb3JlIGNvbnRleHRcbiAgY29uc3QgdmFsaWRhdGUgPSBhanYuY29tcGlsZSh7XG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHRydWUsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgW2tleUluUGFyZW50XTogc2NoZW1hXG4gICAgfVxuICB9KTtcbiAgbGV0IHJlc3VsdDtcblxuICByZXR1cm4gcmVhZChwYXJlbnREYXRhLCBrZXlJblBhcmVudCwgYXV0aG9ySWQpXG4gICAgLnRoZW4ocmVzID0+IChyZXN1bHQgPSByZXMpKVxuICAgIC50aGVuKHJlcyA9PiBhc3NvYyhrZXlJblBhcmVudCwgcmVzLCBwYXJlbnREYXRhKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJrZXkgZXJyXCIsIHNvdWwsIGtleUluUGFyZW50LCBlcnIuc3RhY2sgfHwgZXJyKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICBkZWxldGUgcGFyZW50RGF0YVtrZXlJblBhcmVudF07XG4gICAgICAgIGRlbGV0ZSAocGF0aChbXCJfXCIsIFwiPlwiXSwgcGFyZW50RGF0YSkgfHwge30pW2tleUluUGFyZW50XTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcInNlYSBwcm9wIGVyclwiLCBzb3VsLCBrZXlJblBhcmVudCwgcmVzdWx0LCBwU2NoZW1hKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH1cbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGUoKSkudGhlbihpc1ZhbGlkID0+IHtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgIFwic2VhIHZhbGlkYXRpb24gZXJyXCIsXG4gICAgICAgICAgICBzb3VsLFxuICAgICAgICAgICAga2V5SW5QYXJlbnQsXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMsXG4gICAgICAgICAgICBwU2NoZW1hXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaXNWYWxpZDtcbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGluaXRBanYgPSBjb21wb3NlKFxuICBhanYgPT4ge1xuICAgIGFqdi5hZGRLZXl3b3JkKFwic2VhXCIsIHtcbiAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgbW9kaWZ5aW5nOiB0cnVlLFxuICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlU2VhUHJvcGVydHkoYWp2KVxuICAgIH0pO1xuICAgIHJldHVybiBhanY7XG4gIH0sXG4gIGFqdkJhc2VJbml0XG4pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2d1bl9zdXBwcmVzc29yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2d1bl9ndW5fXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfZ3VuX3NlYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yb3V0ZV9wYXJzZXJfXzsiXSwic291cmNlUm9vdCI6IiJ9