import { useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '../useLocalStorage';

import type { Chat } from '../../types/type';
import type { ChatHistory, OnChatAction } from './types';
import { CHAT_HISTORY } from './constants';

export const useChats = (): [OnChatAction] => {
  const [chatHistory, setChatHistory] = useLocalStorage<ChatHistory>(CHAT_HISTORY, {});

  const getUserChat = useCallback(
    (id: string) => {
      return chatHistory?.[id] ?? [];
    },
    [chatHistory]
  );

  const addChat = (id: string, chat: string): void => {
    const newChatId = uuidv4();
    const newChatHistory: {
      [index: string]: Chat[];
    } = {
      ...chatHistory,
      [id]: [
        ...(chatHistory?.[id] ?? []),
        {
          id: newChatId,
          text: chat,
          time: Date.now(),
          status: 'Sent',
        },
      ],
    };

    setChatHistory(CHAT_HISTORY, newChatHistory);
  };

  const deleteChat = (contactId: string, chatId: string): void => {
    const contactNewChats: Chat[] = chatHistory?.[contactId].filter((chat: Chat): boolean => chat.id !== chatId) ?? [];

    const newChatHistory: {
      [index: string]: Chat[];
    } = {
      ...chatHistory,
      [contactId]: contactNewChats,
    };

    setChatHistory(CHAT_HISTORY, newChatHistory);
  };

  const onAction: onChatAction;

  return [getUserChat, addChat, deleteChat];
};
