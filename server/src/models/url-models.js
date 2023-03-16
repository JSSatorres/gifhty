import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UrlSchema = new Schema(
  {
    url: {
      type: String,
      trim: true,
      uppercase: true, // Convierte los valores de cadena en mayúsculas.
      required: [true, "The url is required"],
      index: true, // Crea un índice para el campo.
    },

  },
  { timestamps: true }
);

export const Url = new model("url", UrlSchema);
