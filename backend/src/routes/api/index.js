import express from 'express';

const router = express.Router();

import mountains from './mountains';
router.use('/mountains', mountains);

export default router;