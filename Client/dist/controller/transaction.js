"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteTransaction = exports.addTransaction = exports.getTransaction = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Schema = _interopRequireDefault(require("../Driver/Schema"));

//@desc get the Balance
//@route GET /showBalance
var getTransaction = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var value;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Schema["default"].find();

          case 3:
            value = _context.sent;
            //finds all the value from moongo db
            res.status(200).json({
              Success: true,
              Count: value.length,
              data: value
            });
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function getTransaction(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}(); // @desc Adding Transaction History
// @route POST /addMoney
// @access public 


exports.getTransaction = getTransaction;

var addTransaction = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, text, amount, result, message;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body = req.body, text = _req$body.text, amount = _req$body.amount;
            _context2.next = 4;
            return _Schema["default"].create(req.body);

          case 4:
            result = _context2.sent;
            // create a seperate collection
            res.status(201).json({
              Success: true,
              data: result
            });
            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);

            if (_context2.t0.name == 'ValidationError') {
              message = Object.values(_context2.t0.errors).map(function (val) {
                return val.message;
              });
              res.status(400).json({
                Error: message
              });
            } else {
              res.status(500).json({
                Error: 'Internal Server Error'
              });
            }

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function addTransaction(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}(); // @desc deleting Transaction History
// @route POST /deleteMoney:id
// @access public 


exports.addTransaction = addTransaction;

var deleteTransaction = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            console.log("".concat(req.params.id));
            id = req.params.id;
            _context3.next = 5;
            return _Schema["default"].findById(id);

          case 5:
            result = _context3.sent;

            if (result) {
              _context3.next = 10;
              break;
            }

            res.status(404).json({
              Success: false,
              Error: 'Id Missing'
            });
            _context3.next = 13;
            break;

          case 10:
            _context3.next = 12;
            return result.remove();

          case 12:
            //delet the mentioned id
            res.status(200).json({
              Success: true,
              Message: 'Deleted'
            });

          case 13:
            _context3.next = 18;
            break;

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](0);
            res.status(500).json({
              Success: false,
              Error: 'Internal Server Error'
            });

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 15]]);
  }));

  return function deleteTransaction(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.deleteTransaction = deleteTransaction;