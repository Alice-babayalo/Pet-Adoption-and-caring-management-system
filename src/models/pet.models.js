import mongoose from 'mongoose';

const petSchema = new mongoose.Schema({
    petName: {
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
        default: "018-04-21T13:00:00.000Z"
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
