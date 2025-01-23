import { ChatBoxContainer } from './components/ChatBox';
import { SendBox } from './components/SendBox/SendBox';

import { useChatActions } from '../../../../hooks/useChatActions';

interface MessageBodyProps {
  selectedContactId: string;
  className?: string;
}

export const MessageBody = ({ selectedContactId, className }: MessageBodyProps): JSX.Element => {
  const { contactChats, onChatAction } = useChatActions({ id: selectedContactId });

  return (
    <div className={`w-full h-full px-16 py-4 flex flex-col gap-4 ${className}`}>
      <div className="flex-1">
        <ChatBoxContainer chats={contactChats} onChatAction={onChatAction} />
      </div>
      <div className="h-16 flex justify-center items-center">
        <SendBox onChatAction={onChatAction} />
      </div>
    </div>
  );
};
