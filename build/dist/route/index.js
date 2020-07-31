"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _transaction = require("../controller/transaction");

var router = _express["default"].Router();

router.post('/addMoney', _transaction.addTransaction).post('/deleteMoney/:id', _transaction.deleteTransaction);
router.get('/showbalance', _transaction.getTransaction);
var _default = router;
exports["default"] = _default;