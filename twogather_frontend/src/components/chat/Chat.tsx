// import { ReactNode, useContext, useEffect, useRef, useState } from "react";
// import UserContext from "../../store";
// import "./Chat.css";
// import { Socket } from "phoenixjs";
// import ChatMessage from "./ChatMessage.tsx";
// import { useEventHandler } from "@ericlathrop/phoenix-js-react-hooks";
// import { SocketContext } from "../../SocketContext";

// type ChatProps = {
//   event_id: number | null;
// };

// type UserContextType = {
//   user_name: string | null;
//   user_email: string | null;
//   user_id: string | null;
//   jwt_token: string | null;
// };

// type Message = {
//   sender: string;
//   body: string;
// };

// const testMessages: Message[] = [
//   {
//     sender: "First Last",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
//   },
//   {
//     sender: "Some Person",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
//   },
//   { sender: "First Last", body: "yooooooo" },
//   { sender: "First Last", body: "Im so excited" },
//   {
//     sender: "Some Person",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
//   },
//   { sender: "First Last", body: "Ill be there" },
//   { sender: "Some Person", body: "Got it" },
//   {
//     sender: "First Last",
//     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
//   },
//   { sender: "First Last", body: "hello there" },
//   { sender: "Some Person", body: "i will not be there" },
// ];

// export default function Chat({ event_id }: ChatProps) {
//   const [messages, setMessages] = useState<Message[]>(testMessages);
//   const { user_name, jwt_token }: UserContextType = useContext(UserContext);

//   const { channel: chatChannel }: any = useChannel(
//     "event:" + event_id,
//     { token: jwt_token },
//     (channel, { messages: initialMessages }) => {
//       setMessages(initialMessages);
//     }
//   );

//   // useEventHandler(chatChannel, "new_msg", (message) => {
//   //   console.log("new message", message);
//   //   setMessages(messages.slice(0).concat([message]));
//   // });

//   return (
//     <div className="w-1/5 m-auto my-2">
//       <div className="flex flex-col overflow-auto h-screen">
//         {messages.map((message: Message): ReactNode => {
//           return (
//             <ChatMessage
//               user={message.sender}
//               body={message.body}
//               sentByCurrentUser={user_name == message.sender}
//             />
//           );
//         })}
//       </div>
//       <input
//         className="w-full text-left mt-1"
//         type="text"
//         placeholder="Type a message..."
//       />
//     </div>
//   );
// }

// function useChannel(topic, params, onJoin) {
//   console.log("INSIDE THE HOOK");
//   const { socket } = useContext(SocketContext);
//   const [channel, setChannel] = useState(null);

//   const onJoinFun = useRef(onJoin);

//   useEffect(() => {
//     if (onJoinFun) {
//       onJoinFun.current = onJoin;
//     }
//   }, []);

//   useEffect(() => {
//     console.log("SOMETHING BIG HAPPENED");
//     if (socket === null) {
//       console.log("socket is null");
//       return;
//     }
//     const ch = socket.channel(topic, params);
//     ch.join().receive("ok", (message) => onJoinFun.current(ch, message));
//     setChannel(ch);

//     return () => {
//       console.log("unsubscribing from channel");
//       ch.leave();
//       setChannel(null);
//     };
//   }, [socket, topic, params]);

//   console.log("SOCKET", socket);
//   console.log("THIS IS THE CHANNEL");
//   console.log(channel);
//   return channel;
// }

// function pushPromise(push) {
//   return new Promise((resolve, reject) => {
//     if (!push) {
//       return reject("no push");
//     }
//     push.receive("ok", resolve).receive("error", reject);
//     // .receive('timeout', reject('timeout'));
//   });
// }

// function sendMessage(channel, event, payload) {
//   return pushPromise(channel.push(event, payload));
// }
