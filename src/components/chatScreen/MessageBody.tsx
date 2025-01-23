import { useState } from 'react';

import { ChatBox } from './ChatDisplay/ChatBox';
import { SendBox } from './SendBox/SendBox';

import type { Chat } from '../../types/type';

interface MessageBodyProps {
  selectedUserId: string;
  getContactChat: (id: string) => Chat[];
  addChat: (id: string, text: string) => void;
  className?: string;
}

export const MessageBody = ({ selectedUserId, getContactChat, addChat, className }: MessageBodyProps): JSX.Element => {
  const currentUserChatHistory = getContactChat(selectedUserId);

  return (
    <div className={`w-full h-full px-16  flex flex-col gap-4 ${className}`}>
      <div className="flex-1">
        <ChatBox chats={currentUserChatHistory} />
      </div>
      <div className="h-16 flex justify-center items-center">
        <SendBox selectedUserId={selectedUserId} onSend={addChat} />
      </div>
    </div>
  );
};
