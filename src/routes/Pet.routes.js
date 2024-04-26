import express from 'express';
import { addTaskValidation } from '../validation/validation.js';
import PetController from '../controllers/Pet.controllers.js';

const PetRoute = express.Router();

PetRoute.get('/api/test', PetController.test)
PetRoute.post('/api/add', addTaskValidation,  PetController.AddPet)



export default PetRoute;
