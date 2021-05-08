import express from 'express';
import {
    retrieveMountain,
    retrieveMountainList
} from '../../data/mountainFunctions';

//error messages
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();

// Retrieve all mountains
router.get('/', async (req, res) => {
    res.json(await retrieveMountainList());
});

// Retrieve single mountain
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    const mountain = await retrieveMountain(id);

    if (mountain) {
        res.json(mountain);
    }
    else {
        res.sendStatus(HTTP_NOT_FOUND);
    }
});

export default router;