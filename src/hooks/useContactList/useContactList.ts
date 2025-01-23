import { v4 as uuidv4 } from 'uuid';
import { useCallback, useMemo, useState } from 'react';

import { useLocalStorage } from '../useLocalStorage';
import { CONTACT_LIST_KEY, ContactActionType } from './constants';

import type { State } from './types';
import type { OnContactAction } from './types';
import type { Contact } from '../../constant/contacts';

export const useContactList = (): [State, OnContactAction] => {
  const [contactList, setContactList] = useLocalStorage<Contact[]>(CONTACT_LIST_KEY, []);
  const [selectedContactId, setSelectedContactId] = useState<string>('');

  const state = useMemo(
    () => ({
      contactList,
      selectedContactId,
    }),
    [contactList, selectedContactId]
  );

  const createNewContact = useCallback(
    (name: string): void => {
      const newUserId = uuidv4();

      const newData = [...(contactList ?? []), { id: newUserId, name }];

      setContactList('contacts', newData);
    },
    [contactList, setContactList]
  );

  const deleteContact = useCallback(
    (id: string): void => {
      const newData = contactList?.filter((contact: Contact): boolean => contact.id !== id) ?? [];

      setContactList('contact', newData);
    },
    [contactList, setContactList]
  );

  const selectContact = useCallback(
    (newSelectedContactId: string): void => {
      const isUserValid = contactList?.some((user: Contact): boolean => user.id === newSelectedContactId);
      if (isUserValid) {
        setSelectedContactId(newSelectedContactId);
      }
    },
    [contactList]
  );

  const onAction: OnContactAction = useCallback(
    (action): void => {
      switch (action.type) {
        case ContactActionType.CREATE_CONTACT: {
          createNewContact(action.payload.name);
          break;
        }
        case ContactActionType.DELETE_CONTACT: {
          deleteContact(action.payload.id);
          break;
        }
        case ContactActionType.SELECT_CONTACT: {
          selectContact(action.payload.id);
          break;
        }
        default:
          break;
      }
    },
    [createNewContact, deleteContact, selectContact]
  );

  return [state, onAction];
};
