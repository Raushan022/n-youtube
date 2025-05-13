import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomString(20) + "🤷🏻",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="ml-2 p-2 border border-black h-[550px] bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {
          //Disclaimer: Don't use indexes as key
          chatMessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Raushan Kumar",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
        className="w-full p-2 ml-2  border border-black rounded-lg"
      >
        <input
          className="w-68 px-2 border border-green-400"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-slate-200 rounded-sm">Post</button>
      </form>
    </>
  );
};

export default LiveChat;
