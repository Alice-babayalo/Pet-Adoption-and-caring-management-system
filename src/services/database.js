import mongoose from 'mongoose';
import configs from '../configs/index.js';

const mongoDbConnect = () => {
    mongoose.connect(configs.MONGODB_URI_CONNECTION_STRING.toString())
                .then(() => { console.log("Connected to the database") })
        .catch(err => { console.log(err) })
}

export default mongoDbConnect;