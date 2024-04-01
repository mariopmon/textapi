'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.validatelastName = void 0;
var express_validator_1 = require('express-validator');
exports.validatelastName = (0, express_validator_1.param)('name')
  .isString()
  .isIn(['fistName', 'lastName'])
  .withMessage('Any name');
