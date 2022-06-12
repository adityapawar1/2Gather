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
    <div className="m-0">
      <p className="text-gray-500 m-0 mx-1 w-fit text-xs">{user}</p>
      <p className="text-md bg-blue-600 text-white w-fit py-1 px-2 rounded-xl text-left rounded-bl-none">
        {body}
      </p>
    </div>
  );
}
