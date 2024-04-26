import express, { json } from 'express';
import swaggerUi from 'swagger-ui-express'
import configuration from '../configs/index.js';
import mongoDbConnect from './database.js';
import PetRoute from '../routes/Pet.routes.js';
import documentation from '../docs/swagger.json' assert {"type": "json"}

const app = express();
app.use('/Pet-Adoption', PetRoute)
app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(documentation))


app.listen(configuration.PORT, ()=>{
    mongoDbConnect();
    console.log("Listening on port " + configuration.PORT)
})


export default app;