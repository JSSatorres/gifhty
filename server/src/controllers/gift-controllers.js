// import { Gifts } from "../models/gift-models.js";

// import { uploadImagePlaylistCloud } from "../libs/cloudinary.js";

export async function getGifts(req, res, next) {
  try {
    // const gifts = await Gifts.find().lean().exec();
    // console.log(">>>>>>>>>getss ",gifts);
    res.status(200).send({
      // data: gifts,
      data: "gifts",
    });
  } catch (error) {
    next(error);
  }
}

export async function getGift(req, res, next) {
  // const { id } = req.params;
  try {
    // const PlaylistsToSearch = await Playlists.find({ _id: id })
    //   .populate("songs", { songData: 1, songFile: 1, songImage: 1 })
    //   .lean()
    //   .exec();
    res.status(200).send({
      data: "PlaylistsToSearch",
    });
  } catch (err) {
    next(err);
  }
}

export async function createGift(req, res, next) {
  // const { title } = req.body;
  try {
    // const newPlaylist = await Playlists.create({
    //   title: title,
    // });
    res.status(200).send({
      message: "OK create",
    });
  } catch (error) {
    next(error);
  }
}

export async function updateGift(req, res, next) {
  // const playlistId = req.body.idPlaylist;
  // const { id: songId } = req.params;
  // const { uid } = req.user;

  try {
    // const checkPlaylist = await Playlists.findById(playlistId);
    // if (!checkPlaylist.songs.includes(songId)) {
    //   await Playlists.findOneAndUpdate(
    //     { _id: playlistId },
    //     {
    //       $push: { songs: [{ _id: songId }] },
    //     },
    //     { new: true }
    //   );
    // }
    // console.log(">>>>>>>>>get playerlist checkPlaylist", checkPlaylist);
    res.status(200).send({
      message: "OK update",
    });
  } catch (error) {
    next(error);
  }
}
export async function removeGift(req, res, next) {
  // const { id } = req.params;

  try {
    // const playlistsRemove = await Playlists.findByIdAndDelete(id, { new: true })
    //   .lean()
    //   .exec();

    res.status(200).send({
      message: "OK delete",
    });
  } catch (err) {
    next(error);
  }
}
