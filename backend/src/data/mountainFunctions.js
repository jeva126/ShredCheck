import { Mountain } from './schema';

//functions to retrieve data from db
async function retrieveMountainList() {
    return await Mountain.find();
}

async function retrieveMountain(id) {
    return await Mountain.findById(id);
}

export {
    retrieveMountain,
    retrieveMountainList
}