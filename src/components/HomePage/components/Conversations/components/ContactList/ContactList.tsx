// Components
import { Contact } from './components/Contact';

// Types
import type { Contact as ContactType } from '../../../../../../types';
import type { OnContactAction } from '../../../../hooks/useContactList/types';

interface ContactListProps {
  contacts: ContactType[];
  onContactAction: OnContactAction;
  className?: string;
}

export const ContactList = ({ contacts, onContactAction, className = '' }: ContactListProps): JSX.Element => {
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
