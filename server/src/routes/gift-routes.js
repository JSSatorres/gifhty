import { Router } from "express";
import {
  getGifts,
  getGift,
  createGift,
  removeGift,
  updateGift
} from "../controllers/gift-controllers.js";

const giftRouter = Router();

giftRouter.get("/gifts", getGifts);
giftRouter.get("/gift/:id", getGift);
giftRouter.post("/gift", createGift);
giftRouter.delete("/gift/:id", removeGift);
giftRouter.patch("/gift/:id", updateGift);

export default giftRouter;
