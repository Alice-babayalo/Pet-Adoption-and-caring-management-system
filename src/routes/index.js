import express from 'express';
import adoptionUserRoute from './adoptionUser.routes.js';
import PetRoute from './Pet.routes.js';
import dayCareRoute from './dayCareUser.routes.js';

const route = express.Router();

route.use('/pet', PetRoute)
route.use('/adoptionUser', adoptionUserRoute)
route.use('/dayCareUser', dayCareRoute)


export default route;