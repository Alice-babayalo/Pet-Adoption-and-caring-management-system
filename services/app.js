import express from 'express';
import configuration from '../configs/index.js';
import mongoDbConnect from './database.js';

const app = express();


app.listen(configuration.PORT, ()=>{
    mongoDbConnect();
    console.log("Listening on port " + configuration.PORT)
})


export default app;