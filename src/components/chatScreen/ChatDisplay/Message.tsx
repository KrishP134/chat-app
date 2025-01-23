interface MessageProps {
  chat: Chat;
  className?: string;
  onContextMenu?: () => void;
}

export const Message = ({ chat, className, onContextMenu }: MessageProps): JSX.Element => {
  const { text } = chat;
  // const onCon;
  return (
    <div
      onContextMenu={onContextMenu}
      className={`max-w-[40%] break-all text-pretty h-auto px-4 py-2 bg-slate-800 text-white border-2 rounded-md ${className}`}
    >
      <p>{text}</p>
    </div>
  );
};
