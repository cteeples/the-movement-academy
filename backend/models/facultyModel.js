import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const FacultySchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    image: {
        type: String, //need to change this
    }

})