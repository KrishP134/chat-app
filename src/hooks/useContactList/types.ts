import { ContactActionType } from './constants';
import type { Contact } from '../../constant/contacts';

type DeleteContactAction = {
  type: ContactActionType.DELETE_CONTACT;
  payload: {
    id: string;
  };
};

type SelectContactAction = {
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

type ContactAction = DeleteContactAction | SelectContactAction | CreateContactAction;

export type State = {
  contactList: Contact[];
  selectedContactId: string;
};

export type OnContactAction = (action: ContactAction) => void;
