// Components
import { Chat } from './components/Chat/Chat';

// Types
import type { Chat as ChatType } from '../../../../../../../../types';
import type { OnChatAction } from '../../../../../../hooks/useChatActions/types';

interface ChatBoxProps {
  chats: ChatType[];
  className?: string;
  onChatAction: OnChatAction;
}

export const ChatBox = ({ chats, onChatAction }: ChatBoxProps): JSX.Element => {
  return (
    <ul className="w-full h-full flex flex-col justify-end gap-4 ">
      {chats.map(chat => {
        return (
          <li key={chat.id} className="flex justify-end">
            <Chat chat={chat} onChatAction={onChatAction}></Chat>
          </li>
        );
      })}
    </ul>
  );
};
