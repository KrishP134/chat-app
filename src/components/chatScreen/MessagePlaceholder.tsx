interface MessagePlaceholderProps {
  className?: string;
}

export const MessagePlaceholder = ({ className }: MessagePlaceholderProps): JSX.Element => {
  return (
    <div className={`bg-slate-700 w-full h-full flex items-center justify-center ${className}`}>
      <p>Select a conversation to get started!</p>
    </div>
  );
};
