import express from 'express';
import {newUser, allClients} from '../controllers/userDayCare.controllers.js.js'
import {userValidation} from '../middleware/validation/validation.js';


const dayCareRoute= express.Router();

dayCareRoute.post('/addClient',userValidation, newUser)

dayCareRoute.get('/allClients', allClients);


export default dayCareRoute;