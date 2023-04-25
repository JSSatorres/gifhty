import mongoose from "mongoose";
import { MONGO_URL } from "../config/config.js";

const mongoOpts =  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

export default async function connectDB (){
  try{
      const db = await mongoose.connect( MONGO_URL,mongoOpts)
      console.log("concect DB ok to =>", db.connection.name );
  }catch(error){
      console.log(error);
      throw new Error ('DB error:' +  error)
  }
}
