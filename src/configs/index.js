import dotenv from 'dotenv'
dotenv.config()

const configs ={
    MONGODB_URI_CONNECTION_STRING: process.env.MONGODB_URI,
    PORT: process.env.PORT
}

export default configs
