import express from 'express';

const router = express.Router();

import mountains from './mountains';
router.use('/mountains', mountains);

import reviews from './reviews';
router.use('/reviews', reviews);

export default router;