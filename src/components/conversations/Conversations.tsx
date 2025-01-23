import { ContactList } from './ContactList';
import { ProfileCard } from '../ProfileCard';

import type { Contact } from '../../constant/contacts';
import { StartConversation } from './StartConversation';
import { OnContactAction } from '../../hooks/useContactList/types';

const loggedInUser = {
  name: 'Krish Prajapati',
};

interface ConversationsProps {
  contacts: Contact[];
  onContactAction: OnContactAction;
  className?: string;
}

export const Conversations = ({ contacts, onContactAction, className }: ConversationsProps): JSX.Element => {
  return (
    <div className={`w-full h-full bg-slate-950 flex flex-col ${className}`}>
      <div className="flex gap-2 justify-end border-b-2">
        <ProfileCard name={loggedInUser.name} />
        <StartConversation onContactAction={onContactAction} />
      </div>

      <ContactList className="flex-1" contacts={contacts} onContactAction={onContactAction} />
    </div>
  );
};
