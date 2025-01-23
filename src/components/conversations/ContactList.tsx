import { Contact } from './Contact';

import type { Contact as ContactType } from '../../constant/contacts';
import type { OnContactAction } from '../../hooks/useContactList/types';

interface ContactListProps {
  contacts: ContactType[];
  onContactAction: OnContactAction;
  className?: string;
}

export const ContactList = ({ contacts, onContactAction, className }: ContactListProps): JSX.Element => {
  if (!contacts || contacts.length === 0) {
    return (
      <div className={`flex justify-center items-center ${className}`}>
        <p>No conversation yet.</p>
      </div>
    );
  }

  return (
    <ul className={`overflow-y-scroll ${className}`}>
      {contacts.map((contact: ContactType): JSX.Element => {
        return (
          <li key={contact.id} data-index={contact.id}>
            <Contact contact={contact} onContactAction={onContactAction} />
          </li>
        );
      })}
    </ul>
  );
};
