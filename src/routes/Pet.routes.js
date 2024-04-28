import express from 'express';
import { addPetValidation } from '../validation/validation.js';
import {PetController, findAge, deleteAdopted} from '../controllers/Pet.controllers.js';

const PetRoute = express.Router();

PetRoute.get('/test', PetController.test)
PetRoute.post('/add', addPetValidation,  PetController.AddPet, findAge)
PetRoute.get('/list', PetController.getPets)
PetRoute.delete('/delete', PetController.deletePet)


// When updating an existing pet and it is found to be adopted, we have to use the deleteAdoption method
// in order to remove it in our database of pets to be adopted.
// We will do this in this route PetRoute.put('/update', PetController.updatePet, deleteAdoption)
// Or just delete where the req.body.adopted = true 

PetRoute.put('/update', PetController.updatePet)
PetRoute.get('/findPetByAdoption/:adopted', PetController.findByAdopted);
PetRoute.get('/findPetByGender/:gender', PetController.findPetByGender);
PetRoute.get('/findPetByAgetype/:ageType', PetController.findPetByAgetype);
PetRoute.get('/findPetById/:id', PetController.findPetById);
PetRoute.get('/findPetByName/:name', PetController.findPetByName);





export default PetRoute;
