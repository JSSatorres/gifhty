import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UrlSchema = new Schema(
  {
    url: {
      type: String,
      trim: true,
      required: [true, "The url is required"],
    },

  },
  { timestamps: true }
);

export const Url = new model("url", UrlSchema);
