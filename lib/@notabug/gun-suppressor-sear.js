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
      if (typeof parentData[keyInParent] === "undefined") return false;
      console.error("key err", soul, keyInParent, authorId, parentData[keyInParent], err.stack || err);
      return false;
    }).then(function (res) {
      if (!res) {
        delete parentData[keyInParent];
        delete (R.path(["_", ">"], parentData) || {})[keyInParent]; // console.error("sea prop err", soul, keyInParent, result, pSchema);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9Abm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIvKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovL0Bub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yXCIiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcInJhbWRhXCIiLCJ3ZWJwYWNrOi8vQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2Vhci9leHRlcm5hbCBcInJvdXRlLXBhcnNlclwiIl0sIm5hbWVzIjpbIk1BWF9BVVRIT1JfQUxJQVNfU0laRSIsIk1BWF9BVVRIT1JfSURfU0laRSIsImF1dGhvclBhdHRlcm4iLCJzZWFBdXRob3JSb3V0ZSIsInNlYVNvdWxSb3V0ZSIsIkFVVEhfU0NIRU1BIiwic2VhQWxpYXMiLCJ0eXBlIiwibWF4TGVuZ3RoIiwiU0VBQWxpYXMiLCJ0aXRsZSIsIiRhc3luYyIsInNvdWwiLCJwYXR0ZXJuIiwicHJvcGVydGllcyIsImFsaWFzIiwiJHJlZiIsInJlcXVpcmVkIiwiYWRkaXRpb25hbFByb3BlcnRpZXMiLCJlZGdlTWF0Y2hlc0tleSIsImFueU9mIiwic2VhQXV0aG9ySWQiLCJzZWFBdXRoT2JqIiwib25lT2YiLCJlayIsInMiLCJTRUFBdXRob3IiLCJwdWIiLCJlcHViIiwic2VhIiwiYXV0aCIsImF1dGhvcklkIiwiUEVSTUlTU0lWRV9OT0RFX1NDSEVNQSIsImRlc2NyaXB0aW9uIiwicGF0aCIsIlBFUk1JU1NJVkVfU0NIRU1BIiwiU0VBTm9kZSIsInJlYWQiLCJHdW4iLCJkYXRhIiwia2V5IiwicGFpciIsInBhY2tlZCIsIlNFQSIsIm9wdCIsInBhY2siLCJSIiwidmVyaWZ5IiwidGhlbiIsInIiLCJFcnJvciIsInVucGFjayIsInZhbGlkYXRlU2VhUHJvcGVydHkiLCJhanYiLCJzY2hlbWEiLCJwU2NoZW1hIiwiX2NQYXRoIiwicGFyZW50RGF0YSIsImtleUluUGFyZW50IiwibWF0Y2giLCJ2YWxpZGF0ZSIsImNvbXBpbGUiLCJyZXN1bHQiLCJyZXMiLCJhc3NvYyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJQcm9taXNlIiwicmVzb2x2ZSIsImlzVmFsaWQiLCJlcnJvcnMiLCJpbml0QWp2IiwiY29uZiIsImdsb2JhbCIsImNvbXBvc2UiLCJhZGRLZXl3b3JkIiwiYXN5bmMiLCJtb2RpZnlpbmciXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FB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T0FBUixDQUFnQlgsUUFBUSxFQUF4QixFQUE0QlosSUFBNUIsQ0FBaUMsVUFBQXdCLE9BQU8sRUFBSTtBQUNqRCxZQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaTCxpQkFBTyxDQUFDQyxLQUFSLENBQ0Usb0JBREYsRUFFRXhELElBRkYsRUFHRThDLFdBSEYsRUFJRUksTUFKRixFQUtFRixRQUFRLENBQUNhLE1BTFgsRUFNRWxCLE9BTkY7QUFRRDs7QUFDRCxlQUFPaUIsT0FBUDtBQUNELE9BWk0sQ0FBUDtBQWFELEtBbkNJLENBQVA7QUFvQ0QsR0FoRTJCO0FBQUEsQ0FBNUI7O0FBa0VPLElBQU1FLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLElBQUQ7QUFBQSxNQUFPckMsR0FBUCx1RUFBYXNDLE1BQU0sQ0FBQ3RDLEdBQXBCO0FBQUEsU0FDckJRLENBQUMsQ0FBQytCLE9BQUYsQ0FDRSxVQUFBeEIsR0FBRyxFQUFJO0FBQ0xBLE9BQUcsQ0FBQ3lCLFVBQUosQ0FBZSxLQUFmLEVBQXNCO0FBQ3BCQyxXQUFLLEVBQUUsSUFEYTtBQUVwQkMsZUFBUyxFQUFFLElBRlM7QUFHcEJwQixjQUFRLEVBQUVSLG1CQUFtQixDQUFDZCxHQUFELEVBQU1lLEdBQU47QUFIVCxLQUF0QjtBQUtBLFdBQU9BLEdBQVA7QUFDRCxHQVJILDBCQVVFc0IsSUFWRixDQURxQjtBQUFBLENBQWhCOzs7Ozs7Ozs7Ozs7OztBQ3JNUCxxRTs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwwRCIsImZpbGUiOiJAbm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3JcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlclwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yLXNlYXJcIiwgW1wiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3JcIiwgXCJyYW1kYVwiLCBcInJvdXRlLXBhcnNlclwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3Nvci1zZWFyXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3JcIiksIHJlcXVpcmUoXCJyYW1kYVwiKSwgcmVxdWlyZShcInJvdXRlLXBhcnNlclwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wiQG5vdGFidWcvZ3VuLXN1cHByZXNzb3Itc2VhclwiXSA9IGZhY3Rvcnkocm9vdFtcIkBub3RhYnVnL2d1bi1zdXBwcmVzc29yXCJdLCByb290W1wicmFtZGFcIl0sIHJvb3RbXCJyb3V0ZS1wYXJzZXJcIl0pO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX25vdGFidWdfZ3VuX3N1cHByZXNzb3JfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9yYW1kYV9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JvdXRlX3BhcnNlcl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCIvKiBnbG9iYWxzIFByb21pc2UgKi9cbmltcG9ydCAqIGFzIFIgZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgUm91dGUgZnJvbSBcInJvdXRlLXBhcnNlclwiO1xuaW1wb3J0IHtcbiAgUEVSTUlTU0lWRV9TQ0hFTUEgYXMgR1VOX1BFUk1JU1NJVkVfU0NIRU1BLFxuICBpbml0QWp2IGFzIGFqdkJhc2VJbml0XG59IGZyb20gXCJAbm90YWJ1Zy9ndW4tc3VwcHJlc3NvclwiO1xuXG5jb25zdCBNQVhfQVVUSE9SX0FMSUFTX1NJWkUgPSA1MTI7XG5jb25zdCBNQVhfQVVUSE9SX0lEX1NJWkUgPSAxMjg7IC8vID8/P1xuY29uc3QgYXV0aG9yUGF0dGVybiA9IFwifjphdXRob3JJZFwiO1xuY29uc3Qgc2VhQXV0aG9yUm91dGUgPSBuZXcgUm91dGUoYXV0aG9yUGF0dGVybik7XG5jb25zdCBzZWFTb3VsUm91dGUgPSBuZXcgUm91dGUoXCIqc3R1ZmZ+OmF1dGhvcklkLlwiKTtcblxuZXhwb3J0IGNvbnN0IEFVVEhfU0NIRU1BID0ge1xuICBzZWFBbGlhczogeyB0eXBlOiBcInN0cmluZ1wiLCBtYXhMZW5ndGg6IE1BWF9BVVRIT1JfQUxJQVNfU0laRSB9LFxuICBTRUFBbGlhczoge1xuICAgIHRpdGxlOiBcIkd1biBTRUEgQWxpYXNcIixcbiAgICAkYXN5bmM6IHRydWUsXG4gICAgc291bDoge1xuICAgICAgcGF0dGVybjogXCJ+QDphbGlhc1wiLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBhbGlhczogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBbGlhc1wiIH1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogW1wiYWxpYXNcIl1cbiAgICB9LFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICBlZGdlTWF0Y2hlc0tleTogdHJ1ZSxcbiAgICAgIGFueU9mOiBbeyAkcmVmOiBcIiMvZGVmaW5pdGlvbnMvU0VBQXV0aG9yRWRnZVwiIH1dXG4gICAgfVxuICB9LFxuICBzZWFBdXRob3JJZDogeyB0eXBlOiBcInN0cmluZ1wiLCBtYXhMZW5ndGg6IE1BWF9BVVRIT1JfSURfU0laRSB9LFxuICBzZWFBdXRoT2JqOiB7XG4gICAgb25lT2Y6IFtcbiAgICAgIHtcbiAgICAgICAgdHlwZTogXCJvYmplY3RcIixcbiAgICAgICAgcHJvcGVydGllczoge1xuICAgICAgICAgIGVrOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICBzOiB7IHR5cGU6IFwic3RyaW5nXCIgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiBcInN0cmluZ1wiXG4gICAgICB9XG4gICAgXVxuICB9LFxuICBTRUFBdXRob3I6IHtcbiAgICB0aXRsZTogXCJHdW4gU0VBIEF1dGhvclwiLFxuICAgICRhc3luYzogdHJ1ZSxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBwdWI6IHsgJHJlZjogXCIjL2RlZmluaXRpb25zL3NlYUF1dGhvcklkXCIgfSxcbiAgICAgIGVwdWI6IHsgc2VhOiB7IHR5cGU6IFwic3RyaW5nXCIgfSB9LFxuICAgICAgYWxpYXM6IHsgc2VhOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUFsaWFzXCIgfSB9LFxuICAgICAgYXV0aDoge1xuICAgICAgICBzZWE6IHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aE9ialwiIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgICBzZWE6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bkVkZ2VcIiB9LFxuICAgICAgICAgIHsgJHJlZjogXCJzY2hlbWEuanNvbiMvZGVmaW5pdGlvbnMvc2VhQXV0aE9ialwiIH0sXG4gICAgICAgICAgeyB0eXBlOiBcIm51bGxcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudW1iZXJcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJib29sZWFuXCIgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBzb3VsOiB7XG4gICAgICBwYXR0ZXJuOiBhdXRob3JQYXR0ZXJuLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICBhdXRob3JJZDogeyAkcmVmOiBcInNjaGVtYS5qc29uIy9kZWZpbml0aW9ucy9zZWFBdXRob3JJZFwiIH1cbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDogW1wiYXV0aG9ySWRcIl1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBQRVJNSVNTSVZFX05PREVfU0NIRU1BID0ge1xuICB0aXRsZTogXCJHdW4gU0VBIE5vZGVcIixcbiAgZGVzY3JpcHRpb246IFwiQW55IFNFQSBub2RlIHN1cHBvcnRlZCBieSBndW5cIixcbiAgJGFzeW5jOiB0cnVlLFxuXG4gIHNvdWw6IHtcbiAgICBwYXR0ZXJuOiBcIipwYXRofjphdXRob3JJZC5cIixcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBwYXRoOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgIGF1dGhvcklkOiB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL3NlYUF1dGhvcklkXCIgfVxuICAgIH0sXG4gICAgcmVxdWlyZWQ6IFtcInBhdGhcIiwgXCJhdXRob3JJZFwiXVxuICB9LFxuXG4gIGFkZGl0aW9uYWxQcm9wZXJ0aWVzOiB7XG4gICAgXCIuKlwiOiB7XG4gICAgICBzZWE6IHtcbiAgICAgICAgYW55T2Y6IFtcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bk5vZGVNZXRhXCIgfSxcbiAgICAgICAgICB7ICRyZWY6IFwic2NoZW1hLmpzb24jL2RlZmluaXRpb25zL0d1bkVkZ2VcIiB9LFxuICAgICAgICAgIHsgdHlwZTogXCJudWxsXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwibnVtYmVyXCIgfSxcbiAgICAgICAgICB7IHR5cGU6IFwiYm9vbGVhblwiIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IFBFUk1JU1NJVkVfU0NIRU1BID0ge1xuICAuLi5BVVRIX1NDSEVNQSxcbiAgU0VBTm9kZTogUEVSTUlTU0lWRV9OT0RFX1NDSEVNQSxcbiAgLi4uR1VOX1BFUk1JU1NJVkVfU0NIRU1BXG59O1xuXG5leHBvcnQgY29uc3QgcmVhZCA9IChHdW4sIGRhdGEsIGtleSwgcGFpciA9IGZhbHNlKSA9PiB7XG4gIGNvbnN0IHBhY2tlZCA9IEd1bi5TRUEub3B0LnBhY2soXG4gICAgZGF0YVtrZXldLFxuICAgIGtleSxcbiAgICBkYXRhLFxuICAgIFIucGF0aChbXCJfXCIsIFwiI1wiXSwgZGF0YSlcbiAgKTtcblxuICByZXR1cm4gR3VuLlNFQS52ZXJpZnkocGFja2VkLCBwYWlyKS50aGVuKHIgPT4ge1xuICAgIGlmICh0eXBlb2YgciA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBzZWEgZGF0YVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIEd1bi5TRUEub3B0LnVucGFjayhyLCBrZXksIGRhdGEpO1xuICB9KTtcbn07XG5cbmNvbnN0IHZhbGlkYXRlU2VhUHJvcGVydHkgPSAoR3VuLCBhanYpID0+IChcbiAgc2NoZW1hLFxuICBkYXRhLFxuICBwU2NoZW1hLFxuICBfY1BhdGgsXG4gIHBhcmVudERhdGEsXG4gIGtleUluUGFyZW50XG4pID0+IHtcbiAgY29uc3Qgc291bCA9IFIucGF0aChbXCJfXCIsIFwiI1wiXSwgcGFyZW50RGF0YSk7XG5cbiAgaWYgKGtleUluUGFyZW50ID09PSBcIl9cIikgcmV0dXJuIHRydWU7XG4gIGNvbnN0IHsgYXV0aG9ySWQgfSA9XG4gICAgc2VhU291bFJvdXRlLm1hdGNoKHNvdWwpIHx8IHNlYUF1dGhvclJvdXRlLm1hdGNoKHNvdWwpIHx8IHt9O1xuXG4gIGlmICghYXV0aG9ySWQpIHJldHVybiBmYWxzZTtcbiAgaWYgKHNvdWwgPT09IGB+JHthdXRob3JJZH1gICYmIGtleUluUGFyZW50ID09PSBcInB1YlwiKSB7XG4gICAgcmV0dXJuIGRhdGEgPT09IGF1dGhvcklkO1xuICB9XG5cbiAgLy8gVmFsaWRhdGUgYXMgYW4gb2JqZWN0IHRvIGdpdmUgcHJvcGVydHkgdmFsaWRhdG9ycyBtb3JlIGNvbnRleHRcbiAgY29uc3QgdmFsaWRhdGUgPSBhanYuY29tcGlsZSh7XG4gICAgYWRkaXRpb25hbFByb3BlcnRpZXM6IHRydWUsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgW2tleUluUGFyZW50XTogc2NoZW1hXG4gICAgfVxuICB9KTtcbiAgbGV0IHJlc3VsdDtcblxuICByZXR1cm4gcmVhZChHdW4sIHBhcmVudERhdGEsIGtleUluUGFyZW50LCBhdXRob3JJZClcbiAgICAudGhlbihyZXMgPT4gKHJlc3VsdCA9IHJlcykpXG4gICAgLnRoZW4ocmVzID0+IFIuYXNzb2Moa2V5SW5QYXJlbnQsIHJlcywgcGFyZW50RGF0YSkpXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBpZiAodHlwZW9mIHBhcmVudERhdGFba2V5SW5QYXJlbnRdID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBcImtleSBlcnJcIixcbiAgICAgICAgc291bCxcbiAgICAgICAga2V5SW5QYXJlbnQsXG4gICAgICAgIGF1dGhvcklkLFxuICAgICAgICBwYXJlbnREYXRhW2tleUluUGFyZW50XSxcbiAgICAgICAgZXJyLnN0YWNrIHx8IGVyclxuICAgICAgKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICBkZWxldGUgcGFyZW50RGF0YVtrZXlJblBhcmVudF07XG4gICAgICAgIGRlbGV0ZSAoUi5wYXRoKFtcIl9cIiwgXCI+XCJdLCBwYXJlbnREYXRhKSB8fCB7fSlba2V5SW5QYXJlbnRdO1xuICAgICAgICAvLyBjb25zb2xlLmVycm9yKFwic2VhIHByb3AgZXJyXCIsIHNvdWwsIGtleUluUGFyZW50LCByZXN1bHQsIHBTY2hlbWEpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWxpZGF0ZSgpKS50aGVuKGlzVmFsaWQgPT4ge1xuICAgICAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgXCJzZWEgdmFsaWRhdGlvbiBlcnJcIixcbiAgICAgICAgICAgIHNvdWwsXG4gICAgICAgICAgICBrZXlJblBhcmVudCxcbiAgICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyxcbiAgICAgICAgICAgIHBTY2hlbWFcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpc1ZhbGlkO1xuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgaW5pdEFqdiA9IChjb25mLCBHdW4gPSBnbG9iYWwuR3VuKSA9PlxuICBSLmNvbXBvc2UoXG4gICAgYWp2ID0+IHtcbiAgICAgIGFqdi5hZGRLZXl3b3JkKFwic2VhXCIsIHtcbiAgICAgICAgYXN5bmM6IHRydWUsXG4gICAgICAgIG1vZGlmeWluZzogdHJ1ZSxcbiAgICAgICAgdmFsaWRhdGU6IHZhbGlkYXRlU2VhUHJvcGVydHkoR3VuLCBhanYpXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBhanY7XG4gICAgfSxcbiAgICBhanZCYXNlSW5pdFxuICApKGNvbmYpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19ub3RhYnVnX2d1bl9zdXBwcmVzc29yX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JhbWRhX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX3JvdXRlX3BhcnNlcl9fOyJdLCJzb3VyY2VSb290IjoiIn0=