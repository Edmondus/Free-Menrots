import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        trim: true,
        required: [true, 'Please add a first name']
    },
    lastName: {
        type: String,
        trim: true,
        required: [true, 'Please add a last name']
    },
    email: {
        type: String,
        trim: true,
        required: [true, 'Please add a valid email']
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Please add a valid password']
    },
    isAdmin: {
        type: Boolean,
        trim: true,
        default: false
    },
    isMentor: {
        type: Boolean,
        trim: true,
        default: false
    },
    address: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        trim: true,
        required: false
    },
    occupation: {
        type: String,
        trim: true,
        required: false
    },
    expertise: {
        type: String,
        trim: true, 
    }
});
export default mongoose.model('User', UserSchema);