import { param } from 'express-validator';
export const validatelastName = param('name')
    .isString()
    .isIn(['fistName', 'lastName'])
    .withMessage('Any name');
//# sourceMappingURL=validators.js.map