import { CometChat } from "@cometchat-pro/chat";

export const createOrJoinStockGroup = async (stockSymbol) => {
  // Implementation for creating or joining a stock discussion group
};

export const sendMessage = async (groupID, messageText) => {
  // Implementation for sending a message
};

export const addMessageListener = (listenerID, callback) => {
  CometChat.addMessageListener(
    listenerID,
    new CometChat.MessageListener({
      onTextMessageReceived: (textMessage) => {
        console.log("Text message received successfully", textMessage);
        callback(textMessage);
      },
    })
  );
};

export const removeMessageListener = (listenerID) => {
  CometChat.removeMessageListener(listenerID);
};
