import "dotenv/config";
import express from "express";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import testRouter from "./routes/test.route.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";
import messageRouter from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/post", postRouter);

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.use("/api/test", testRouter);

app.use("/api/chat", chatRouter);

app.use("/api/message", messageRouter);

app.listen(8080, () => {
  console.log("Connected to server!");
});
