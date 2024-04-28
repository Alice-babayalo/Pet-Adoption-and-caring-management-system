import Pet from "../models/pet.models.js";
import { NotFoundError, BadRequestError } from "../errors/index.js";
import { validationResult } from 'express-validator';
import { ageCalculator } from "../TimeCalculator/ageCalculator.js";


import asyncWrapper from "../middleware/assynctWaraper.js";

export const PetController = {
    test : asyncWrapper(async (req, res, next) => {
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

        const newPet = await Pet.create(req.body);
        return res.status(201).json(newPet);
    }),
    getPets: asyncWrapper(async (req, res, next) =>{
        const pets = await Pet.find({});
        if (pets){
            return res.status(200).json({
                numberOfPets: pets.length,
                pets: pets
            });
        }
    }),
    deletePet: asyncWrapper(async (req, res, next) =>{
        const deletePet = await Pet.findByIdAndDelete(req.params.id);
        if (!deletePet) {
            return next(new NotFoundError(`Pet not found`));
        }
        res.status(200).json({message: "Pet deleted"});
    }),
    updatePet: asyncWrapper(async (req, res, next) => {
        const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json(updatedPet);
    }),
    findByAdopted: asyncWrapper (async(req, res, next) => {
        const adopt= req.params.adopted;
        const findAdopted = await Pet.find({adopted: adopt});
        res.status(200).json({
            numberOfPets: findAdopted.length,
            findAdopted
        })
    }),
    findPetById: asyncWrapper (async(req, res, next) => {
        const foundPet = await Pet.findById(req.params.id)
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            message: "Pet found",
            foundPet
        })
    }),
    findPetByName: asyncWrapper (async(req, res, next) => {
        const foundPet = await Pet.find({name: req.params.name})
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            message: "Pet found",
            foundPet
        })
    }),
    findPetByGender: asyncWrapper (async(req, res, next) => {
        const foundPet = await Pet.find({gender: req.params.gender})
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            message: "Pet found",
            foundPet
        })
    }),
    findPetByAgetype: asyncWrapper (async(req, res, next) => {
        const foundPet = await Pet.find({ageType: req.params.ageType})
        if (!foundPet) {
            return next(new NotFoundError(`Pet not found`));
        }
        return res.status(200).json({
            message: "Pet found",
            foundPet
        })
    })
}


export const findAge = asyncWrapper(async (req, res, next) => {
    if (req.body.dateOfBirth){
        req.body.dateOfBirth = bD;
        const tD = new Date();
        ageCalculator(tD, bD);
        req.body.age=age.agePeriod;
        req.body.ageType=age.ageType;
    }
})

export const deleteAdopted = asyncWrapper(async(req, res, next) => {
    if (req.body.adopted === true){
        const deleteAdoptedPet = await Pet.findOneAndDelete()
    }
    //The pet which whill be adopted must be removed from our database because it is no longer for sale
})