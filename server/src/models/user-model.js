import mongoose from "mongoose";
import validator from "validator";

const { Schema, model } = mongoose;
const { isEmail } = validator;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: [true, "The username is required"],
      min: [4, 'please enter more than 4 characters'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "The email is required"],
      trim: true,
      unique: true,
      validate: {
        validator: (value) => isEmail(value),
        message: (props) => `The email ${props.value} is not valid`,
      },
    },
    postalCode: {
      type: Number,
      required: [true, "The postal code is required"],
      trim: true,
      validate: {
        validator: (value) => value.toString().length === 5,
        message: (props) => `The postal code ${props.value} should be 5 number`,
      },
    },
    province: {
      type: String,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    image: {
      url: String,
      public_id: String,
    },
    myFavoriteGift: {
      type: [{ type: Schema.Types.ObjectId, ref: "gift" }],
      default: [],
    },
  },
  { timestamps: true }
);

export const User = new model("user", UserSchema);
