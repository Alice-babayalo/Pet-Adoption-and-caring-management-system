import mongoose from 'mongoose';
import configuration from '../configs/index.js';

const mongoDbConnect = () => {
    mongoose.connect(configuration.MONGODB_URI_CONNECTION_STRING)
        .then(() => { console.log("Connected to the database") })
        .catch(err => { console.log(err) })
}

export default mongoDbConnect;