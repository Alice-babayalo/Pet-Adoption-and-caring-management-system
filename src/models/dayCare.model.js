import mongoose, { Schema } from 'mongoose';
const dayCareSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'User name is required'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    address: {
        type: Array
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    petName:{
        type: String
    }
},
    {
        timestamps: true,
    })

const dareCareModel = mongoose.model('daycareUser', dayCareSchema)

export default dareCareModel;