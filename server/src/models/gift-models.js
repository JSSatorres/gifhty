import mongoose from "mongoose";
const { Schema, model } = mongoose;

const GiftSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      uppercase: true,
    },
    url: {
      type: String,
      trim: true,
      lowercase: true,
    },
    // gift: {
    //   type: String,
    //   trim: true,
    // },
    //   users: {
    //     type: [{ type: Schema.Types.ObjectId, ref: "users" }],
    //     default: [],
    //   },
  },
  { timestamps: true }
);

export const Gift = new model("gift", GiftSchema);
