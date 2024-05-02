import express, { json } from 'express';
import swaggerUi from 'swagger-ui-express'
import configuration from '../configs/index.js';
import mongoDbConnect from './database.js';
import route from '../routes/index.js';
import documentation from '../docs/swagger.json' assert {"type": "json"}
import ErrorHandlerMiddleware from "../middleware/ErrorHandlerV2.js";


const app = express();
app.use(express.json());
app.use('/api', route)
app.use('/api-documentation', swaggerUi.serve, swaggerUi.setup(documentation))


app.listen(configuration.PORT, ()=>{
    mongoDbConnect();
    console.log("Listening on port " + configuration.PORT)
})
app.use(ErrorHandlerMiddleware)

export default app;