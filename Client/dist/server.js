"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _colors = _interopRequireDefault(require("colors"));

_app["default"].listen(process.env.PORT, console.log("Application running in ".concat(process.env.PORT).white.bold));