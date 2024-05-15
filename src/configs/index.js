import dotenv from 'dotenv'
dotenv.config()

const configs ={
    MONGODB_URI_CONNECTION_STRING: process.env.MONGODB_URI||"mongodb+srv://bwisa:hey12345@cluster0.ygeraai.mongodb.net/LissaVette",
    PORT: process.env.PORT||2024
}

export default configs
