import { ReactNode, useContext, useState } from "react";
import UserContext from "../../store";
import "./Chat.css";
import ChatMessage from "./ChatMessage.tsx";

type ChatProps = {
  event_id: number | null;
};

type UserContextType = {
  user_name: string | null;
  user_email: string | null;
  user_id: string | null;
};

type Message = {
  sender: string;
  body: string;
};

const testMessages: Message[] = [
  {
    sender: "First Last",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    sender: "First Last",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  { sender: "First Last", body: "yooooooo" },
  { sender: "First Last", body: "Im so excited" },
  {
    sender: "First Last",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  { sender: "First Last", body: "Ill be there" },
  { sender: "First Last", body: "Got it" },
  {
    sender: "First Last",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  { sender: "First Last", body: "hello there" },
  { sender: "First Last", body: "i will not be there" },
];

export default function Chat({ event_id }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>(testMessages);
  const { user_name, user_email, user_id }: UserContextType =
    useContext(UserContext);

  return (
    <div className="flex flex-col w-1/6 h-1/3 m-auto overflow-auto">
      {messages.map((message: Message): ReactNode => {
        return (
          <ChatMessage
            user={message.sender}
            body={message.body}
            sentByCurrentUser={user_name == message.sender}
          />
        );
      })}
    </div>
  );
}
