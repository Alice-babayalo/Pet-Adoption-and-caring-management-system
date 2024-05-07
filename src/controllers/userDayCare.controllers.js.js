import asyncWrapper from '../middleware/assynctWaraper.js';
import dareCareModel from '../models/dayCare.model.js';
import { sendEmail } from '../middleware/sendemail.js';
import { BadRequestError } from "../errors/index.js";
import { validationResult } from 'express-validator';


export const newUser = asyncWrapper(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(new BadRequestError(errors.array()[0].msg));
    }

    try {

        const newUser = await dareCareModel.create(req.body);

        await sendEmail(req.body.email,
            "day care at LissaVette",
            "Dear " + req.body.userName + ",\n  thank you for your interest in LissaVette! \nYour interesting request in booking a daycare for your pet '"+req.body.petName+"' is well received! the call centre of LissaVette with the number 0787887312 is heading to call you in a while.\nIn case you did not receive any call from the call centre, please contact us through email!");

        const savedUser = await newUser.save();

        if (savedUser) {
            return res.status(201).json({
                message: "dayCare client received!",
                user: savedUser
            });
        }
    } 
    catch (error) {
        next(error);
    }
});


export const allClients = asyncWrapper(async(req, res, next) => {
    const eachuser = await dareCareModel.find({})

    res.status(200).json({ 
        numberOfClients: eachuser.length,
        allClients: eachuser
    });
})
