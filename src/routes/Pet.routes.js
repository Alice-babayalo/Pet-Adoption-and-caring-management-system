import express from 'express';

import PetController from '../controllers/Pet.controllers.js';

const PetRoute = express.Router();

PetRoute.get('/api/test', PetController.test)




export default PetRoute;
