import asyncWrapper from '../middleware/assynctWaraper.js';
import userModel from '../models/user.models.js';



export const newUser = asyncWrapper( async (req, res, next)=>{
    const arleadyExistingUser = await userModel.findOne({userName: req.user.userName});
    if(arleadyExistingUser){
        res.status(200).json({message: "User already exists"})
    }
    const newuser = await userModel.create({
        userName: req.body.userName,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        interestingPetId: req.body.pet
    })

    res.status(200).json({message: "client created successfully"})
})


export const allClients = asyncWrapper(async(req, res, next) => {
    const eachuser = await userModel.find({})

    res.status(200).json({ 
        numberOfClients: eachuser.length,
        allClients: eachuser
    });
})
