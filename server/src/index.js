import app from "./server.js"
import {PORT} from "./config/config.js"
import connectDB from "./db/connect.js"

connectDB()

app.listen(PORT, ()=>console.log("listening",PORT))