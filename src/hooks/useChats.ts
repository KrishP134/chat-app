import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorage } from "./useLocalStorage";

import type { Chat } from "../types/type";

export const useChats = (): [
  (id: string) => Chat[],
  (id: string, chat: string) => void
] => {
  const [chatHistory, setChatHistory] = useLocalStorage<{
    [index: string]: Chat[];
  }>("chatHistory");

  const getUserChat = useCallback(
    (id: string) => {
      return chatHistory?.[id] ?? [];
    },
    [chatHistory]
  );

  const addChat = (id: string, chat: string) => {
    const newChatId = uuidv4();
    const newChatHistory: {
      [index: string]: Chat[];
    } = {
      ...chatHistory,
      id: [
        ...(chatHistory?.[id] ?? []),
        {
          id: newChatId,
          text: chat,
          time: Date.now(),
          status: "Sent",
        },
      ],
    };

    setChatHistory("chatHistory", newChatHistory);
  };

  return [getUserChat, addChat];
};
