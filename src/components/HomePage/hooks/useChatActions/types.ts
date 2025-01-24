// Constant
import { ChatActionType } from './constants';

// Types
import type { Chat } from '../../../../types';

type CreateChatAction = {
  type: ChatActionType.ADD_CHAT;
  payload: {
    chat: string;
  };
};

type UpdateChatAction = {
  type: ChatActionType.EDIT_CHAT;
  payload: {
    chatId: string;
    chat: string;
  };
};

type RemoveChatAction = {
  type: ChatActionType.DELETE_CHAT;
  payload: {
    chatId: string;
  };
};

type CreateChatActionWithChats = CreateChatAction & {
  payload: CreateChatAction['payload'] & { chats: Chat[] };
};

type UpdateChatActionWithChats = UpdateChatAction & {
  payload: UpdateChatAction['payload'] & { chats: Chat[] };
};

type RemoveChatActionWithChats = RemoveChatAction & {
  payload: RemoveChatAction['payload'] & { chats: Chat[] };
};

export type ChatAction = CreateChatAction | UpdateChatAction | RemoveChatAction;
export type ChatActionWithChats = CreateChatActionWithChats | UpdateChatActionWithChats | RemoveChatActionWithChats;
export type OnChatAction = (action: ChatAction) => void;
export type UseChatActions = {
  contactChats: Chat[];
  onChatAction: OnChatAction;
};
