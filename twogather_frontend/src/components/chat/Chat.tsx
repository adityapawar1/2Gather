import { ReactNode, useContext, useEffect, useState } from "react";
import "./Chat.css";
import ChatMessage from "./ChatMessage.tsx";
import {
  sendMessage,
  SocketContext,
  useEventHandler,
} from "@ericlathrop/phoenix-js-react-hooks";
import UserContext from "../../UserContext";

type ChatProps = {
  event_id: number;
};

type UserContextType = {
  user_name: string | null;
  user_email: string | null;
  user_id: string | null;
  jwt_token: string | null;
};

type Message = {
  sender: string;
  message: string;
};

const getPastMessages = (
  event_id: number | string,
  jwt_token: string | null
) => {
  let headers: any = { "X-Mx-ReqToken": jwt_token };
  return fetch(`http://localhost:4000/api/event/${event_id}/chat`, { headers });
};
const jwt_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NTUwOTQ4NjYsImlhdCI6MTY1NTA2NjA2NiwiaWQiOjMzLCJpc3MiOiIyZ2F0aGVyLWF1dGgiLCJqdGkiOiIycnJ2amtkN3FnYzBtM3JlbjgwMDAwMjQiLCJuYmYiOjE2NTUwNjYwNjZ9.y0mHh2k5PB26bqtMuVw9Gcz9Y1sV_3YOJYjDl3fzct4";

const funny = Math.random() > 0.5 ? "John" : "Vivek";
export default function Chat({ event_id }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [{ user_id }, setData]: [UserContextType, any] =
    useContext(UserContext);
  const user_name = funny;

  const { socket } = useContext(SocketContext);
  const [channel, setChannel] = useState<any>(null);

  const autoScroll = () => {
    let bottom: any = document.getElementById("bottom");
    bottom.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    autoScroll();
    console.log(messages);
  }, [messages]);

  useEffect(() => {
    getPastMessages(event_id, jwt_token).then((res) => {
      console.log(res.json().then(({ messages }) => setMessages(messages)));
    });

    if (socket === null) {
      return;
    }
    const ch = socket.channel(`event:${event_id}`, {
      token: Math.random().toString(36).substring(2, 12),
    });
    ch.join().receive("ok", (message) => console.log(ch, message));
    setChannel(ch);

    return () => {
      ch.leave();
      setChannel(null);
    };
  }, [socket, event_id, jwt_token]);

  useEffect(() => {
    console.log("Event handler effect");
    if (channel === null) {
      return;
    }

    const ref = channel.on("new_msg", ({ message }) => {
      console.log("new message", message);
      let chatMessage: Message = {
        sender: message.sender,
        message: message.message,
      };

      setMessages((messages) => [...messages, chatMessage]);
    });

    return () => {
      channel.off("new_msg", ref);
    };
  }, [channel]);

  const sendMessageHandler = () => {
    let doc: any = document;
    let message_body: any = doc.getElementById("message-input").value;
    if (message_body == "") return;
    let message = {
      sender: user_name || "First Last",
      body: message_body,
    };
    sendMessage(channel, "new_msg", message);
    doc.getElementById("message-input").value = "";
  };

  return (
    <div className="w-1/5 h-screen m-auto my-2">
      <div className="flex flex-col overflow-auto h-screen">
        {messages.map((message: Message, index: number): ReactNode => {
          return (
            <ChatMessage
              user={message.sender}
              body={message.message}
              key={index}
              sentByCurrentUser={user_name === message.sender}
            />
          );
        })}
        <div id="bottom"></div>
      </div>
      <div className="flex flex-row border-1 ">
        <input
          className="w-full text-left mt-1"
          type="text"
          placeholder="Type a message..."
          id="message-input"
        />
        <button
          className="rounded-xl bg-blue-600 text-white p-1 mx-3 my-1"
          onClick={() => sendMessageHandler()}
        >
          Send
        </button>
      </div>
    </div>
  );
}
