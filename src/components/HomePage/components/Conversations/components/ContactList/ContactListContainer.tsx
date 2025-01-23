// Components
import { ContactList } from './ContactList';
import { ContactListPlaceHolder } from './ContactListPlaceHolder';

// Types
import type { Contact } from '../../../../../../types';
import type { OnContactAction } from '../../../../hooks/useContactList/types';

type ContactListContainerProps = {
  contacts: Contact[];
  onContactAction: OnContactAction;
};

export const ContactListContainer = ({ contacts, onContactAction }: ContactListContainerProps): JSX.Element => {
  return (
    <div>
      {contacts?.length ? (
        <ContactList className="flex-1" contacts={contacts} onContactAction={onContactAction} />
      ) : (
        <ContactListPlaceHolder />
      )}
    </div>
  );
};