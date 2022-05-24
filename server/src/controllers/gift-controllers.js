import mongoose from "mongoose";
import { GiftDB } from "../models/gift-models.js";
// import { uploadImagePlaylistCloud } from "../libs/cloudinary.js";

export async function getGifts(req, res, next) {
  try {
    const gifts = await GiftDB.find().lean().exec();
    res.status(200).send({
      data: gifts,
    });
  } catch (error) {
    next(error);
  }
}

export async function getGift(req, res, next) {
  const { id } = req.params;
  try {
    const giftToSearch = await GiftDB.find({ _id: id })
      // .populate("songs", { songData: 1, songFile: 1, songImage: 1 })
      .lean()
      .exec();
    res.status(200).send({giftToSearch,
    });
  } catch (err) {
    next(err);
  }
}

export async function createGift(req, res) {
  const { title, gift, user } = req.body;
  try {
    const newGifts = await GiftDB.create({
      title,
      gift,
      user,
    });
    res.status(200).send({
      message: "OK create",
    });
  } catch (error) {
    next(error);
  }
}

export async function updateGift(req, res, next) {
  const {title, gift, user } = req.body.values;
  const { id } = req.params;
  // const { uid } = req.user;
  try {

      await GiftDB.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            title,
            gift,
            user,
          },
        },
        { new: true }
      );
    res.status(200).send({
      message: "OK update",
    });
  } catch (error) {
    next(error);
  }
}
export async function removeGift(req, res, next) {
  const { id } = req.params;

  try {
    const gitsRemove = await GiftDB.findByIdAndDelete(id, { new: true })
      .lean()
      .exec();
    console.log(id);
    res.status(200).send({
      message: "OK delete",
    });
  } catch (err) {
    next(err);
  }
}
