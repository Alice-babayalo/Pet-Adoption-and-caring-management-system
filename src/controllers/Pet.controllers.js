import Pet from "../models/pet.models.js";

import asyncWrapper from "../middleware/assynctWaraper.js";

const PetController = {
    Test: asyncWrapper((req,res, next) => {})
}



export default PetController