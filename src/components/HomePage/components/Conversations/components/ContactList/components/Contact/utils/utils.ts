import { CHAT_HISTORY_KEY } from '../../../../../../../hooks/useChatActions/constants';
export const deleteContactChatHistory = ({ id }: { id: string }) => {
  const chatKey = `${CHAT_HISTORY_KEY}-${id}}`;
  console.log(CHAT_HISTORY_KEY);
  localStorage.setData(chatKey, '');
};
