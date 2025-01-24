// Libraries
import { v4 as uuidv4 } from 'uuid';

// Constant
import { ChatActionType } from './constants';

// Types
import type { Chat } from '../../../../types';
import type { ChatActionWithChats } from './types';

export const createNewChatObject = ({ type, payload }: ChatActionWithChats): Chat[] => {
  const contactChats = payload.chats;
  switch (type) {
    case ChatActionType.ADD_CHAT: {
      const newChatId = uuidv4();
      return [
        ...contactChats,
        {
          id: newChatId,
          text: payload.chat,
          time: Date.now(),
          status: 'Sent',
        },
      ];
    }
    case ChatActionType.DELETE_CHAT: {
      return contactChats.filter((chat: Chat): boolean => chat.id !== payload.chatId);
    }
    case ChatActionType.EDIT_CHAT: {
      return contactChats.map(chat => {
        if (chat.id !== payload.chatId) return chat;
        return { ...chat, text: payload.chat };
      });
    }
    default: {
      return contactChats;
    }
  }
};
