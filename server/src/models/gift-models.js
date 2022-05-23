import mongoose from "mongoose";
const { Schema, model } = mongoose;

const GiftSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    image: {
      url: String,
      public_id: String,
      trim: true,
    },
    users: {
      type: [{ type: Schema.Types.ObjectId, ref: "users" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const Gifts = new model("Gifts", GiftSchema);
