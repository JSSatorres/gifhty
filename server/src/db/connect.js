import mongoose from "mongoose";

// const URI = process.env.MONGODB_URL;
const URI = "mongodb+srv://JSS:CaraVaya2020@cluster0.hww2k.mongodb.net/GiftDB?retryWrites=true&w=majority"

// export default function connectDB() {
//   return mongoose.connect(URI);
// }


export default async function connectDB (){
  try{
      const db = await mongoose.connect( URI)
      console.log("conecto to db ", db.connection.name );
      // console.log("conecto to db ");
  }catch(error){
      console.error(error);
  }
}

// export default function connectDB() {
//   return mongoose.connect(URI);
// }