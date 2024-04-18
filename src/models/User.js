import Schema, { model, models } from "mongoose";

const UserSchema = new Schema({
    mane: { type: String},
    email: { type: String, required: true, unique: true},
    password: { type: String}
}, {timestamps: true})

export const User = models?.User || model('User', UserSchema);