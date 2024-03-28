import mongoose,{Mongoose} from "mongoose";
import { Interface } from "readline";

const MONGODB_URL= process.env.MONGODB_URL;

interface MongooseConnection{
    conn:Mongoose | null;
    promise:Promise<Mongoose> | null;

}