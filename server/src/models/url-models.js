import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UrlSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
    },
    url: {
      type: String,
      trim: true,
    },

  },
  { timestamps: true }
);

export const Url = new model("url", UrlSchema);
