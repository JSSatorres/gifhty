import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// import fileUpload from "express-fileupload";
import {Coaster} from "./models/coaster-model.js"
import userRouter from "./routes/user-routes.js";
import giftRouter from "./routes/gift-routes.js";

import mongoose from "mongoose";

// import config from "./src/config/config.js";

const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(userRouter);
app.use(giftRouter);

app.get("/products", (req,res) => {
    Coaster.find()
})

export default app;
