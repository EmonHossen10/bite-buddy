import { User } from "../../../models/User.js";
import mongoose from "mongoose";


export async function POST( res ) {
    const body = await res.json();
    mongoose.connect(process.env.MONGO_URL);

    const createUser = await User.create(body);

    return Response.json(createUser);
}