"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var mongoDriver = function mongoDriver() {
  return new Promise( /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(resolve, reject) {
      var connection;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _mongoose["default"].connect('mongodb+srv://devsociety:Dinesh@16@dev-society-0-qvzuo.mongodb.net/expense_tracker?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
              });

            case 3:
              connection = _context.sent;
              console.log("MongoDB connected:".concat(connection).cyan.bold);
              resolve(connection);
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log("Mongo Connection Error:".concat(_context.t0));
              reject(_context.t0);
              process.exit(1);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

var _default = mongoDriver;
exports["default"] = _default;