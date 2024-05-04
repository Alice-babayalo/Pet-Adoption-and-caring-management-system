import asyncWrapper from '../middleware/assynctWaraper.js';
import dareCareModel from '../models/dayCare.model.js';
import { sendEmail } from '../middleware/sendemail.js';


export const newUser = asyncWrapper( async (req, res, next)=>{
    const arleadyExistingUser = await userModel.findOne({userName: req.user.userName});
    if(arleadyExistingUser){
        res.status(200).json({message: "User already exists"})
    }
    const newuser = await dareCareModel.create({
        userName: req.body.userName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        pet: req.body.pet
    })
    await sendEmail(req.body.email,
        "Pet adoption at LissaVette",
        "Dear " + req.body.userName + ",  thank you for your interest in LissaVette! \nYour interesting request in booking a daycare for your pet is well received! the call centre of LissaVette with the number 0787887312 is heading to call you in a while.\nIn case you did not receive any call from the call centre, please contact us through email!");

    const savedUser = await newuser.save();
    // console.log(savedUser);

    if (savedUser) {
        return res.status(201).json({
            message: "dayCare client received!",
            user: savedUser
        });
    }
})


export const allClients = asyncWrapper(async(req, res, next) => {
    const eachuser = await dareCareModel.find({})

    res.status(200).json({ 
        numberOfClients: eachuser.length,
        allClients: eachuser
    });
})
