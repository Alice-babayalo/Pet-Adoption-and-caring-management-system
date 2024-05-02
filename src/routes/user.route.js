import express from 'express';
import {newUser, allClients} from '../controllers/user.controller.js'
import {userValidation} from '../middleware/validation/validation.js';


const userRoute= express.Router();

userRoute.post('/addClient',userValidation, newUser)

userRoute.get('/allClients', allClients);


export default userRoute;