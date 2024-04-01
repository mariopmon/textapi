'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var express_1 = require('express');
var getName_js_1 = require('../controllers/getName.js');
var validators_js_1 = require('../midleware/validators.js');
var router = express_1.default.Router();
router.get('/:name', validators_js_1.validatelastName, getName_js_1.getName);
exports.default = router;
