/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const express = __webpack_require__(1);
const dotenv = __webpack_require__(2);
const bodyParser = __webpack_require__(3);
const homeController = __webpack_require__(4);
dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/api', homeController.httpGet);
app.put('/api', homeController.httpPut);
app.listen(app.get('port'), () => {
    console.log(('App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
    console.log('Press CTRL-C to stop\n');
});
module.exports = app;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let pkg = __webpack_require__(5);
exports.httpGet = (req, res) => {
    res.json({
        message: 'Hello World',
        name: 'Anonimous',
    });
};
exports.httpPut = (req, res) => {
    console.log(req.body);
    res.json({
        message: 'Hello',
        name: req.body.name
    });
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {"name":"express.ts","version":"0.1.0","description":"skeleton API in Typescript","main":"./dist/server.js","scripts":{"build":"webpack --config webpack.config.js","postinstall":"npm run build","start":"node ./dist/server.js"},"author":"Someone","devDependencies":{"@types/body-parser":"^1.16.4","@types/chai":"^4.0.1","@types/dotenv":"^4.0.0","@types/express":"^4.0.36","@types/jest":"^20.0.4","@types/node":"^8.0.13","@types/supertest":"^2.0.2","chai":"^4.1.0","coveralls":"^3.0.0","jest":"^21.2.1","mocha":"^4.0.1","supertest":"^3.0.0","ts-jest":"^21.2.4","ts-loader":"^3.2.0","ts-node":"^3.2.0","tslint":"^5.8.0","typescript":"^2.6.2","webpack":"^3.9.1"},"dependencies":{"body-parser":"^1.17.2","dotenv":"^4.0.0","express":"^4.16.2"}}

/***/ })
/******/ ]);