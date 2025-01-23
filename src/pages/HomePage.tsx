import { useMemo } from "react";

import { Conversations } from "../components/conversations/Conversations";
import { MessageBox } from "../components/chatScreen/MessageBox";
import { MessagePlaceholder } from "../components/chatScreen/MessagePlaceholder";
import type { Contact } from "../constant/contacts";
import { useContactList } from "../hooks/useContactList";
import { useChats } from "../hooks/useChats";

export const HomePage = (): JSX.Element => {
  const [
    contactList,
    selectedContactId,
    createNewContact,
    selectContact,
    deleteContact,
  ] = useContactList();

  const [getContactChat, addChat] = useChats();

  const selectedUser = useMemo(
    () =>
      contactList?.find(
        (user: Contact): boolean => user.id === selectedContactId
      ),
    [selectedContactId, contactList]
  );

  return (
    <div className="flex text-white w-screen h-screen">
      <div className="w-96 h-full">
        <Conversations
          contacts={contactList}
          onContactAdd={createNewContact}
          onContactSelect={selectContact}
          onContactDelete={deleteContact}
        />
      </div>
      {selectedUser ? (
        <MessageBox
          className="flex-1 h-full"
          selectedUser={selectedUser}
          getContactChat={getContactChat}
          addChat={addChat}
        />
      ) : (
        <MessagePlaceholder className="flex-1" />
      )}
    </div>
  );
};
