// Libraries
import { useCallback } from 'react';

// Hooks
import { useLocalStorage } from '../useLocalStorage';

// Utils
import { createNewChatObject } from './utils';

// Constants
import { CHAT_HISTORY_KEY, ChatActionType } from './constants';

// Types
import type { Chat } from '../../../../types';
import type { OnChatAction, UseChatActions } from './types';

export const useChatActions = ({ id }: { id: string }): UseChatActions => {
  const [contactChats, setContactChats] = useLocalStorage<Chat[]>(`${CHAT_HISTORY_KEY}-${id}`, []);

  const onAction: OnChatAction = useCallback(
    ({ type, payload }) => {
      switch (type) {
        case ChatActionType.ADD_CHAT: {
          const newContactChats: Chat[] = createNewChatObject({
            type: ChatActionType.ADD_CHAT,
            payload: {
              chats: contactChats,
              chat: payload.chat,
            },
          });
          setContactChats(newContactChats);
          break;
        }
        case ChatActionType.DELETE_CHAT: {
          const contactUpdatedChats: Chat[] = createNewChatObject({
            type: ChatActionType.DELETE_CHAT,
            payload: {
              chats: contactChats,
              chatId: payload.chatId,
            },
          });
          setContactChats(contactUpdatedChats);
          break;
        }
        case ChatActionType.EDIT_CHAT: {
          const contactNewChats: Chat[] = createNewChatObject({
            type: ChatActionType.EDIT_CHAT,
            payload: {
              chats: contactChats,
              chatId: payload.chatId,
              chat: payload.chat,
            },
          });
          setContactChats(contactNewChats);
          break;
        }
        default: {
          break;
        }
      }
    },
    [contactChats, setContactChats]
  );

  return { contactChats, onChatAction: onAction };
};
