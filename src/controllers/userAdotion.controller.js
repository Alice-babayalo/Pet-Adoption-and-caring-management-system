import asyncWrapper from '../middleware/assynctWaraper.js';
import UserModel from '../models/adoptionUser.models.js';
import { sendEmail } from '../middleware/sendemail.js';
import { BadRequestError } from "../errors/index.js";
import { validationResult } from 'express-validator';


export const newUser = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    }

    try {
        const existingUser = await UserModel.findOne({ userName: req.body.userName });
        if (existingUser) {
            return res.status(200).json({ message: "User already exists" });
        }

        const newUser = await UserModel.create(req.body);

        await sendEmail(
            req.body.email,
            "Pet adoption at LissaVette",
            `Dear ${req.body.userName}, \nthank you for your interest in LissaVette! Your request to adopt a pet has been received. Our call centre will contact you shortly as 0787887312. \nIf you don't receive a call, please contact us via email.`);

        return res.status(201).json({
            message: "Adoption client received!",
            user: newUser
        });
    } catch (error) {
        next(error);
    }
});


export const allClients = asyncWrapper(async (req, res, next) => {
    try {
        const eachUser = await UserModel.find({}).populate('pet');

        res.status(200).json({
            numberOfClients: eachUser.length,
            allClients: eachUser
        });
    } catch (error) {
        next(error);
    }
});

