import { Chat } from '../../types/type';
import { ChatActionType } from './constants';

export type ChatHistory = {
  [index: string]: Chat[];
};

export type GetContactChats = (id: string) => Chat[];

type AddChatAction = {
  type: ChatActionType.ADD_CHAT;
  payload: {
    id: string;
    chat: string;
  };
};

type DeleteChatAction = {
  type: ChatActionType.DELETE_CHAT;
  payload: {
    contactId: string;
    chatId: string;
  };
};

export type ChatAction = AddChatAction | DeleteChatAction;

export type OnChatAction = (action: ChatAction) => void;
