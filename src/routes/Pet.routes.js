import express from 'express';
import { addPetValidation } from '../validation/validation.js';
import {PetController, findAge} from '../controllers/Pet.controllers.js';

const PetRoute = express.Router();

PetRoute.get('/test', PetController.test)
PetRoute.post('/add', addPetValidation,  PetController.AddPet, findAge)
PetRoute.get('/list', PetController.getPets)
PetRoute.delete('/delete', PetController.deletePet)
PetRoute.put('/update', PetController.updatePet)
PetRoute.get('/findPetByAdoption/:adopted', PetController.findByAdopted);
PetRoute.get('/findPetByGender/:gender', PetController.findPetByGender);
PetRoute.get('/findPetByAgetype/:ageType', PetController.findPetByAgetype);
PetRoute.get('/findPetById/:id', PetController.findPetById);
PetRoute.get('/findPetByName/:name', PetController.findPetByName);





export default PetRoute;
