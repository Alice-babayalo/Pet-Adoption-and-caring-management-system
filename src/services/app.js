import express from 'express';
import configuration from '../configs/index.js';
import mongoDbConnect from './database.js';
import PetRoute from '../routes/Pet.routes.js';


const app = express();
app.use('/Pet-Adoption', PetRoute)

app.listen(configuration.PORT, ()=>{
    mongoDbConnect();
    console.log("Listening on port " + configuration.PORT)
})


export default app;