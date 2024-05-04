import express from 'express';
import {newUser, allClients} from '../controllers/userAdotion.controller.js'
import {userValidation} from '../middleware/validation/validation.js';


const adoptionUserRoute= express.Router();

adoptionUserRoute.post('/addClient',userValidation, newUser)

adoptionUserRoute.get('/allClients', allClients);


export default adoptionUserRoute;