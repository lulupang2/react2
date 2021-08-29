import mongoose, { Model } from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: Number,
    userid: String,
    joindate: {
        type: Date,
        default: Date.now,
    },
}
);

const User = mongoose.model('User', userSchema);

