import { useMemo } from 'react';

import { useChats } from '../hooks/useChat/useChats';
import { useContactList } from '../hooks/useContactList';
import { MessageBox } from '../components/chatScreen/MessageBox';
import { Conversations } from '../components/conversations/Conversations';
import { MessagePlaceholder } from '../components/chatScreen/MessagePlaceholder';

import type { Contact } from '../constant/contacts';

export const HomePage = (): JSX.Element => {
  const [{ contactList, selectedContactId }, onContactAction] = useContactList();

  const [getContactChat, addChat] = useChats();

  const selectedUser = useMemo(
    () => contactList?.find((user: Contact): boolean => user.id === selectedContactId),
    [selectedContactId, contactList]
  );

  return (
    <div className="flex text-white w-screen h-screen">
      <div className="w-96 h-full">
        <Conversations contacts={contactList} onContactAction={onContactAction} />
      </div>
      {selectedUser ? (
        <MessageBox
          className="flex-1 h-full"
          onContactAction={onContactAction}
          getContactChat={getContactChat}
          addChat={addChat}
        />
      ) : (
        <MessagePlaceholder className="flex-1" />
      )}
    </div>
  );
};
