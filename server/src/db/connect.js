import mongoose from "mongoose";
import { MONGO_URL } from "../config/config.js";


export default async function connectDB (){
  try{
      const db = await mongoose.connect( MONGO_URL)
      console.log("conecto to db ", db.connection.name );
  }catch(error){
      console.error(error);
  }
}
