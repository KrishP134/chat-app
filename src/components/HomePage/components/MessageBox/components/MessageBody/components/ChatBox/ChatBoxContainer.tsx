// Components
import { ChatBox } from './ChatBox';
import { ChatBoxPlaceholder } from './ChatBoxPlaceholder';

// Types
import type { Chat as ChatType } from '../../../../../../../../types';
import { OnChatAction } from '../../../../../../hooks/useChatActions/types';

interface ChatBoxContainerProps {
  chats: ChatType[];
  onChatAction: OnChatAction;
  className?: string;
}

export const ChatBoxContainer = ({ chats, onChatAction, className = '' }: ChatBoxContainerProps): JSX.Element => {
  return (
    <div className={`w-full h-full ${className}`}>
      {chats?.length ? <ChatBox chats={chats} onChatAction={onChatAction} /> : <ChatBoxPlaceholder />}
    </div>
  );
};
