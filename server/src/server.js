import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// import fileUpload from "express-fileupload";

import userRouter from "./routes/user-routes.js";
import giftRouter from "./routes/gift-routes.js";

const whitelist = ['http://localhost:3000'];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

const app = express();

app.use(express.json())
app.use(morgan("dev"));
// app.use(helmet());
app.use(cors(corsOptions));

app.use(userRouter);
app.use(giftRouter);


export default app;
