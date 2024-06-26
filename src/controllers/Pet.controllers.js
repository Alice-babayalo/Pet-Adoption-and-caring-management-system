import Pet from "../models/pet.models.js";
import { NotFoundError, BadRequestError } from "../errors/index.js";
import { validationResult } from 'express-validator';


import asyncWrapper from "../middleware/assynctWaraper.js";

export const PetController = {
    AddPet: asyncWrapper(async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                next(new BadRequestError(errors.array()[0].msg));
            }


            const newPet = await Pet.create(req.body);

            return res.status(201).json(newPet);
        } catch (error) {
            next(error); // Pass any error to the error handling middleware
        }
    }),

    getPets: asyncWrapper(async (req, res, next) => {
        const pets = await Pet.find({});
        if (pets) {
            return res.status(200).json({
                numberOfPets: pets.length,
                pets: pets
            });
        }
    }),
    deletePet: asyncWrapper(async (req, res, next) => {
        const deletePet = await Pet.findByIdAndDelete(req.query.id);
            if (!deletePet) {
                return next(new NotFoundError(`Pet not found`));
            }
            res.status(200).json({ message: "Pet deleted" });
    }),
    updatePet: asyncWrapper(async (req, res, next) => {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json(updatedPet);
    }),
    findByAdopted: asyncWrapper(async (req, res, next) => {
        const findAdopted = await Pet.find({ adopted: req.query.adopted });
        res.status(200).json({
            numberOfPets: findAdopted.length,
            findAdopted
        })
    }),
    findPetById: asyncWrapper(async (req, res, next) => {
        const foundPet = await Pet.findById(req.query.id)
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            message: "Pet found",
            foundPet
        })
    }),
    findPetByName: asyncWrapper(async (req, res, next) => {
        const foundPet = await Pet.find({ petName: req.query.petName })
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            numberOfPets: foundPet.length,
            foundPet
        })
    }),
    findPetByGender: asyncWrapper(async (req, res, next) => {
        const foundPet = await Pet.find({ gender: req.query.gender })
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            numberOfPets: foundPet.length,
            foundPet
        })
    }),
    findPetByAgetype: asyncWrapper(async (req, res, next) => {
        const foundPet = await Pet.find({ ageType: req.query.ageType })
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            numberOfPets: foundPet.length,
            foundPet
        })
    })
}



export const deleteAdopted = asyncWrapper(async (req, res, next) => {
    if (req.body.adopted === true) {
        const deleteAdoptedPet = await Pet.findOneAndDelete()
    }
    //The pet which whill be adopted must be removed from our database because it is no longer for sale
})