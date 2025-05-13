import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2 rounded-lg">
      <img
        className="h-6"
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        alt="user-icon"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
