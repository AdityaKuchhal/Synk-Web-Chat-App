const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
const app = express();
connectDB();

app.use(express.json());

// app.get("/api/chat/:chatId", (req, res) => {
//   //   console.log(req.params.chatId);
//   const singleChat = chats.find((c) => c._chatId === req.params.chatId);
//   res.send(singleChat);
// });

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 8090;

app.listen(PORT, console.log(`Server started at PORT ${PORT}!`.yellow.bold));
