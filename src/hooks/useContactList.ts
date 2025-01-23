import { v4 as uuidv4 } from "uuid";
import { useCallback, useState } from "react";

import { useLocalStorage } from "./useLocalStorage";

import type { Contact } from "../constant/contacts";

export const useContactList = (): [
  Contact[],
  string | undefined,
  (name: string) => void,
  (id: string) => void,
  (id: string) => void
] => {
  const [contactList, setContactList] = useLocalStorage<Contact[]>("contacts");
  const [selectedContactId, setSelectedContactId] = useState<
    string | undefined
  >();

  const createNewContact = useCallback(
    (name: string): void => {
      const newUserId = uuidv4();

      const newData = [...(contactList ?? []), { id: newUserId, name }];

      setContactList("contacts", newData);
    },
    [contactList, setContactList]
  );

  const deleteContact = useCallback(
    (id: string): void => {
      const newData =
        contactList?.filter((contact: Contact): boolean => contact.id !== id) ??
        [];

      setContactList("contact", newData);
    },
    [contactList, setContactList]
  );

  const selectContact = useCallback(
    (newSelectedContactId: string): void => {
      const isUserValid = contactList?.some(
        (user: Contact): boolean => user.id === newSelectedContactId
      );
      if (isUserValid) {
        setSelectedContactId(newSelectedContactId);
      }
    },
    [contactList]
  );

  return [
    contactList ?? [],
    selectedContactId,
    createNewContact,
    selectContact,
    deleteContact,
  ];
};
