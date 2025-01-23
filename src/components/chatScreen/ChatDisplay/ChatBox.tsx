import { Message } from "./Message";
import type { Chat } from "../../../types/type";

interface ChatBoxProps {
  chats: Chat[];
  className?: string;
}

export const ChatBox = ({ chats }: ChatBoxProps): JSX.Element => {
  if (chats === undefined || chats.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <p>No message yet.</p>
      </div>
    );
  }

  return (
    <ul className="w-full h-full flex flex-col justify-end gap-4 ">
      {chats.map((chat) => {
        return (
          <li key={chat.id} className="flex justify-end">
            <Message chat={chat}></Message>
          </li>
        );
      })}
    </ul>
  );
};
