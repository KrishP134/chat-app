// Constants
import { ContactActionType } from './constants';

// Types
import type { Contact } from '../../../../types';

type RemoveContactAction = {
  type: ContactActionType.DELETE_CONTACT;
  payload: {
    id: string;
  };
};

type SetSelectedContactAction = {
  type: ContactActionType.SELECT_CONTACT;
  payload: {
    id: string;
  };
};

type CreateContactAction = {
  type: ContactActionType.CREATE_CONTACT;
  payload: {
    name: string;
  };
};

type CreateContactActionWithContactList = CreateContactAction & {
  payload: CreateContactAction['payload'] & { contactlist: Contact[] };
};

type SetSelectedContactActionWithContactList = SetSelectedContactAction & {
  payload: SetSelectedContactAction['payload'] & { contactlist: Contact[] };
};

type RemoveContactActionWithContactList = RemoveContactAction & {
  payload: RemoveContactAction['payload'] & { contactlist: Contact[] };
};

export type ContactAction = RemoveContactAction | SetSelectedContactAction | CreateContactAction;
export type ContactActionWithContactList =
  | CreateContactActionWithContactList
  | SetSelectedContactActionWithContactList
  | RemoveContactActionWithContactList;

export type State = {
  contactList: Contact[];
  selectedContactId: string;
};

export type OnContactAction = (action: ContactAction) => void;
