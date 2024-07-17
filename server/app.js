import 'dotenv/config';
import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json());
app.use(cookieParser())

app.use("/api/post", postRouter);

app.use("/api/auth", authRouter);

app.listen(8080, () => {
  console.log("Connected to server!!");
});
