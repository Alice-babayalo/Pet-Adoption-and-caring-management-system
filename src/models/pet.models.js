import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: [true, "A simple description must be provided"],
        unique: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female", "undefined"]
    },
    dateOfBirth: {
        type: Date, // Changed from String to Date
        required: false,
        default: "Jan 21 2024 12:38:27 GMT+0000"
    },
    age: {
        type: Number,
        required: true
    },
    ageType: {
        type: String,
        enum: ["years", "months", "days"]
    },
    adopted: {
        type: Boolean,
        required: true,
        default: false
    }
});

const Pet = mongoose.model('Pet', petSchema);

export default Pet;
