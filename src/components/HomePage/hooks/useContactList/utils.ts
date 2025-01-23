// Libraries
import { v4 as uuidv4 } from 'uuid';

// Constants
import { ContactActionType } from './constants';

// Types
import type { Contact } from '../../../../types';
import type { ContactActionWithContactList } from './types';

export const createNewContactList = ({ type, payload }: ContactActionWithContactList): Contact[] => {
  const contactList = payload.contactlist;
  switch (type) {
    case ContactActionType.CREATE_CONTACT: {
      const newUserId = uuidv4();
      return [...contactList, { id: newUserId, name: payload.name }];
    }
    case ContactActionType.DELETE_CONTACT: {
      return contactList.filter((contact: Contact): boolean => contact.id !== payload.id);
    }
    default: {
      return [];
    }
  }
};
