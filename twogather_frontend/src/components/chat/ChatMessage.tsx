type ChatMessageProps = {
  message: string;
  user: string;
  sentByCurrentUser: boolean;
};

export default function ChatMessage({
  message,
  user,
  sentByCurrentUser,
}: ChatMessageProps) {
  return (
    <div>
      <p className="text-sm text-gray-500">{user}</p>
      <p className="text-xl bg-blue-700">{message}</p>
    </div>
  );
}
