import mongoose, { Schema } from 'mongoose';
const userSchema = new mongoose.Schema({
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
    pet:[{
        type: Schema.Types.ObjectId,
        ref: 'Pet',
        required: true
    }]
},
    {
        timestamps: true,
    })

const UserModel = mongoose.model('adoptionUser', userSchema)

export default UserModel;