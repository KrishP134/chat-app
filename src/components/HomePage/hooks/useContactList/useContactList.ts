// Libraries
import { useCallback, useMemo, useState } from 'react';

// Utils
import { createNewContactList } from './utils';

// Hooks
import { useLocalStorage } from '../useLocalStorage';

// Constants
import { CONTACT_LIST_KEY, ContactActionType } from './constants';

// Types
import type { State } from './types';
import type { OnContactAction } from './types';
import type { Contact } from '../../../../types';

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

  const onAction: OnContactAction = useCallback(
    (action): void => {
      switch (action.type) {
        case ContactActionType.CREATE_CONTACT: {
          const newContactList: Contact[] = createNewContactList({
            type: ContactActionType.CREATE_CONTACT,
            payload: {
              name: action.payload.name,
              contactlist: contactList,
            },
          });
          setContactList(newContactList);

          break;
        }
        case ContactActionType.DELETE_CONTACT: {
          const newContactList: Contact[] = createNewContactList({
            type: ContactActionType.DELETE_CONTACT,
            payload: {
              id: action.payload.id,
              contactlist: contactList,
            },
          });
          setContactList(newContactList);
          break;
        }
        case ContactActionType.SELECT_CONTACT: {
          setSelectedContactId(action.payload.id);
          break;
        }
        default:
          break;
      }
    },
    [contactList, setContactList]
  );

  return [state, onAction];
};
