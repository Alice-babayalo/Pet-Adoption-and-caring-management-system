import express from 'express';
import { addPetValidation } from '../middleware/validation/validation.js';
import {PetController, deleteAdopted} from '../controllers/Pet.controllers.js';
import { ageTime } from '../middleware/PetAge.js';

const PetRoute = express.Router();

PetRoute.post('/add', ageTime,  PetController.AddPet, addPetValidation)
PetRoute.get('/list', PetController.getPets)
PetRoute.delete('/delete', PetController.deletePet)


// When updating an existing pet and it is found to be adopted, we have to use the deleteAdoption method
// in order to remove it in our database of pets to be adopted.
// We will do this in this route PetRoute.put('/update', PetController.updatePet, deleteAdoption)
// Or just delete where the req.body.adopted = true 

PetRoute.put('/update/:id', ageTime, PetController.updatePet, addPetValidation)
PetRoute.get('/findPetByAdoption', PetController.findByAdopted);
PetRoute.get('/findPetByGender', PetController.findPetByGender);
PetRoute.get('/findPetByAgetype', PetController.findPetByAgetype);
PetRoute.get('/findPetById', PetController.findPetById);
PetRoute.get('/findPetByName', PetController.findPetByName);





export default PetRoute;
