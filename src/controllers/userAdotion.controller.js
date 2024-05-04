import asyncWrapper from '../middleware/assynctWaraper.js';
import userModel from '../models/adoptionUser.models.js';



export const newUser = asyncWrapper(async (req, res, next) => {
    const arleadyExistingUser = await userModel.findOne({ userName: req.user.userName });
    if (arleadyExistingUser) {
        res.status(200).json({ message: "User already exists" })
    }
    const newuser = await userModel.create({
        userName: req.body.userName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        interestingPetId: req.body.pet
    })
    await sendEmail(req.body.email, req.body.userName + ", thank you for your interest in RissaVette!",
        "your interesting request in adopting a pet is well received! the call centre of RissaVette with the number 0787887312 is heading to call you in a while.",
        "In case you did not receive any call from the call centre, please contact us through email!");

    const savedUser = await newuser.save();
    // console.log(savedUser);

    if (savedUser) {
        return res.status(201).json({
            message: "Adoption client received!",
            user: savedUser
        });
    }

})


export const allClients = asyncWrapper(async (req, res, next) => {
    const eachuser = await userModel.find({})

    res.status(200).json({
        numberOfClients: eachuser.length,
        allClients: eachuser
    });
})
