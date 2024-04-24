import express from 'express';

import PetController from '../controllers/Pet.controllers.js';

const PetRoute = express.Router();

PetRoute.get('/api/test', PetController.Test)




export default PetRoute;
