const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Successfully executed API!");
});
app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:chatId", (req, res) => {
  //   console.log(req.params.chatId);
  const singleChat = chats.find((c) => c._chatId === req.params.chatId);
  res.send(singleChat);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`Server started at PORT ${PORT}!`));
