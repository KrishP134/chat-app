import type { Chat } from "../MessageBody";

interface MessageProps {
  chat: Chat;
  className?: string;
}

export const Message = ({ chat, className }: MessageProps): JSX.Element => {
  const { text } = chat;
  return (
    <div
      className={`max-w-[40%] break-all text-pretty h-auto px-4 py-2 bg-slate-800 text-white border-2 rounded-md ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};
