import express from 'express';
import userRoute from './user.route.js';
import PetRoute from './Pet.routes.js';


const route = express.Router();

route.use('/pet', PetRoute)
route.use('/user', userRoute)


export default route;