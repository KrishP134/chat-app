import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";

import { Button } from "./Button";

interface SendBoxProps {
  selectedUserId: string;
  onSend: (id: string, text: string) => void;
  className?: string;
}

export const SendBox = ({
  selectedUserId,
  onSend,
  className,
}: SendBoxProps): JSX.Element => {
  const [message, setMessage] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    setMessage(e.target.value);
  }, []);

  const handleSend = useCallback(() => {
    if (message.length === 0) return;

    onSend(selectedUserId, message);
    setMessage("");
  }, [message, onSend, selectedUserId]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Enter") {
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
        text="Send"
        disabled={!message.length}
        onClick={() => {
          handleSend();
        }}
      />
    </div>
  );
};
