import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
// import fileUpload from "express-fileupload";

import userRouter from "./routes/user-routes.js";
import giftRouter from "./routes/gift-routes.js";


const app = express();

app.use(express.json())
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(userRouter);
app.use(giftRouter);


export default app;
