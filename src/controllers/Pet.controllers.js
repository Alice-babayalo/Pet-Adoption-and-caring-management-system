import Pet from "../models/pet.models.js";
import { NotFoundError, BadRequestError } from "../errors/index.js";
import { validationResult } from 'express-validator';


import asyncWrapper from "../middleware/assynctWaraper.js";

const PetController = {
    test : asyncWrapper((req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors.array());
            return next(new BadRequestError(errors.array()[0].msg));
        }
    
        res.status(200).json({
            message: 'Hello World!'
        });
    }),
    AddPet: asyncWrapper(async (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            next(new BadRequestError(errors.array()[0].msg));
        }

        const newPet = await  Pet.create(req.body);
        return res.status(201).json(newTask);
    })
}



export default PetController