"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _index = _interopRequireDefault(require("./route/index"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _mongoDB = _interopRequireDefault(require("./Driver/mongoDB"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var app = (0, _express["default"])();

_dotenv["default"].config({
  path: './config/config.env'
});

console.log(process.env.NODE_ENV);
console.log(_path["default"].join(__dirname, './Client/build'));
(0, _mongoDB["default"])();
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])());
app.use('/', _index["default"]);

if (process.env.NODE_ENV == 'development') {
  app.use((0, _morgan["default"])('dev'));
}

if (process.env.NODE_ENV == 'production') {
  app.use(_express["default"]["static"](_path["default"].join(__dirname, '../Client/build')));
  app.get('*', function (req, res) {
    res.sendFile(_path["default"].join(__dirname, '../client/build/index.html'));
  });
}

var _default = app;
exports["default"] = _default;