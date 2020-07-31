"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireWildcard(require("mongoose"));

//@desc Transaction Collection kindaa Table 
var Transaction = new _mongoose["default"].Schema({
  text: {
    type: String,
    trim: true,
    required: [true, 'Please add the reason for spending']
  },
  amount: {
    type: Number,
    required: [true, 'Enter the amount']
  },
  CreatedAt: {
    type: Date,
    "default": Date.now
  }
});

var _default = _mongoose["default"].model('Transaction', Transaction); //first parameter table name and the second one is the schema for teh table name 


exports["default"] = _default;