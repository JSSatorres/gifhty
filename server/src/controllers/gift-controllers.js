import mongoose from "mongoose";
import { Gift } from "../models/gift-models.js";
// import { uploadImagePlaylistCloud } from "../libs/cloudinary.js";

export async function getGifts(req, res, next) {
  try {
    const gifts = await Gift.find().lean().exec();
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
    const giftToSearch = await Gift.find({ _id: id })
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
  const { title, url } = req.body;
  console.log(title, url);
  try {
    const newGifts = await Gift.create({
      title,
      url
    });
    res.status(200).send({
      message: "OK create",
    });
  } catch (error) {
    next(error);
  }
}

export async function updateGift(req, res, next) {
  const {title,  url } = req.body.values;
  const { id } = req.params;
  // const { uid } = req.user;
  try {

      await Gift.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            title,
            url
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
    const gitsRemove = await Gift.findByIdAndDelete(id, { new: true })
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
