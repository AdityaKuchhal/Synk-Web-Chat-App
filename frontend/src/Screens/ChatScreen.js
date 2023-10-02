import axios from "axios";
import React, { useEffect } from "react";

const ChatScreen = () => {
  const fetchChats = async () => {
    const data = await axios.get("/api/chat");

    console.log(data);
  };

  useEffect(() => {
    fetchChats();
  });
  return <div>ChatScreen</div>;
};

export default ChatScreen;
