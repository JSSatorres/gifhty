import mongoose from "mongoose";
const { Schema, model } = mongoose;

const coasterSchema = new Schema(
  {
    
        title:String,
      description: String,
    },
    //   image: {
    //     url: String,
    //     public_id: String,
    //     trim: true,
    //   },
    //   users: {
    //     type: [{ type: Schema.Types.ObjectId, ref: "users" }],
    //     default: [],
    //   },
  
  { timestamps: true }
);

export const Coaster = new model("coaster", coasterSchema);