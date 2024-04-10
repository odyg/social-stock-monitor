import React, { useState, useEffect } from "react";
import {
  createOrJoinStockGroup,
  sendMessage,
  addMessageListener,
  removeMessageListener,
} from "../services/chatService";

const StockChat = ({ stockSymbol }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const listenerID = "UniqueListenerID_" + stockSymbol; // Ensure uniqueness

  useEffect(() => {
    createOrJoinStockGroup(stockSymbol).then(() => {
      addMessageListener(listenerID, (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    });

    return () => {
      removeMessageListener(listenerID);
    };
  }, [stockSymbol]);

  const handleSendMessage = () => {
    sendMessage(stockSymbol, newMessage).then(() => {
      setNewMessage("");
    });
  };

  return (
    <div>
      {/* Messages display */}
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg.text}</li>
        ))}
      </ul>
      {/* Message input */}
      <input
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default StockChat;
