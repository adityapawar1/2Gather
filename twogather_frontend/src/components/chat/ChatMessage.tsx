type ChatMessageProps = {
  body: string;
  user: string;
  sentByCurrentUser: boolean;
};

export default function ChatMessage({
  body,
  user,
  sentByCurrentUser,
}: ChatMessageProps) {
  return (
    <div className={`m-0 ${sentByCurrentUser ? "float-right" : ""}`}>
      <p className="text-gray-500 m-0 mx-1 w-fit text-xs">{user}</p>
      <p
        className={`text-md font-sans w-fit py-1 px-2 font-medium rounded-xl text-left ${
          sentByCurrentUser ? "message-by-user" : "message-by-other"
        }`}
      >
        {body}
      </p>
    </div>
  );
}
