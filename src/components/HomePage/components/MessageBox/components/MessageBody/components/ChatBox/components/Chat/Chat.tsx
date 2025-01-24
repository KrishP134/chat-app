// Library
import { useState, KeyboardEvent, useCallback } from 'react';

//Hooks
import { useToggle } from './hooks/useToggle';

// Components
import { Tooltip } from '../../../../../../../Tooltip';
import { ChatTooltipContent } from './componenets/ChatTooltipContent';

// Constants
import { ChatActionType } from '../../../../../../../../hooks/useChatActions/constants';

// Types
import type { Chat as ChatType } from '../../../../../../../../../../types';
import type { OnChatAction } from '../../../../../../../../hooks/useChatActions/types';

interface ChatProps {
  chat: ChatType;
  onChatAction: OnChatAction;
  className?: string;
}

export const Chat = ({ chat, onChatAction, className }: ChatProps): JSX.Element => {
  const [text, setText] = useState(chat.text);
  const [isEditMode, toggleIsEditMode] = useToggle(false);

  const handleDelete = useCallback(() => {
    onChatAction({
      type: ChatActionType.DELETE_CHAT,
      payload: {
        chatId: chat.id,
      },
    });
  }, [chat.id, onChatAction]);

  const handleEdit = useCallback(() => {
    onChatAction({
      type: ChatActionType.EDIT_CHAT,
      payload: {
        chatId: chat.id,
        chat: text,
      },
    });
    toggleIsEditMode();
  }, [chat.id, onChatAction, text, toggleIsEditMode]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        handleEdit();
      }
    },
    [handleEdit]
  );

  return (
    <Tooltip
      TooltipContent={() => (
        <ChatTooltipContent
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          isEditMode={isEditMode}
          toggleIsEditMode={toggleIsEditMode}
        />
      )}
    >
      <div
        className={`max-w-[40%] break-all text-pretty h-auto px-4 py-2 bg-slate-800 text-white border-2 rounded-md ${className}`}
      >
        {isEditMode ? (
          <input
            className="border-0 outline-none bg-transparent p-0"
            type="text"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <p>{text}</p>
        )}
      </div>
    </Tooltip>
  );
};
