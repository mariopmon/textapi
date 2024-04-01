import express from 'express';
import { getName } from '../controllers/getName.js';
import { validatelastName } from '../midleware/validators.js';
const router = express.Router();
router.get('/:name', validatelastName, getName);
export default router;
//# sourceMappingURL=messangerrouts.js.map