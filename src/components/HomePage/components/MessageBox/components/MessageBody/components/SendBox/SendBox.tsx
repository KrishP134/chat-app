// Libraries
import { ChangeEvent, KeyboardEvent, useCallback, useState } from 'react';

// Components
import { Button } from './Button';

// Constants
import { ChatActionType } from '../../../../../../hooks/useChatActions/constants';

// Types
import { OnChatAction } from '../../../../../../hooks/useChatActions/types';

interface SendBoxProps {
  onChatAction: OnChatAction;
  className?: string;
}

export const SendBox = ({ onChatAction, className }: SendBoxProps): JSX.Element => {
  const [message, setMessage] = useState('');

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  }, []);

  const handleSend = useCallback(() => {
    if (message.length === 0) return;
    onChatAction({
      type: ChatActionType.ADD_CHAT,
      payload: {
        chat: message,
      },
    });
    setMessage('');
  }, [message, onChatAction]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        handleSend();
      }
    },
    [handleSend]
  );

  return (
    <div className={`flex text-slate-500 gap-2 w-full ${className}`}>
      <input
        className="flex-1 bg-[#f9f9f9] rounded-lg border-[1px] px-4 focus:border-[1px]"
        placeholder="Start Typing ..."
        type="text"
        value={message}
        onChange={handleChange}
        onKeyDown={message.length ? handleKeyDown : undefined}
      />
      <Button
        className="font-medium bg-[#f9f9f9] rounded-lg hover:border-[#646cff]"
        disabled={!message.length}
        onClick={() => {
          handleSend();
        }}
      >
        Send
      </Button>
    </div>
  );
};
