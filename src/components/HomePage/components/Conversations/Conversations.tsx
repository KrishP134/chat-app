import { ProfileCard } from '../ProfileCard';

import type { Contact } from '../../../../types';
import { StartConversation } from './components/StartConversation';
import { OnContactAction } from '../../hooks/useContactList/types';
import { ContactListContainer } from './components/ContactList/ContactListContainer';

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
    <div className={`bg-slate-950 flex flex-col ${className}`}>
      <div className="flex gap-2 justify-end border-b-2">
        <ProfileCard name={loggedInUser.name} />
        <StartConversation onContactAction={onContactAction} />
      </div>

      <ContactListContainer contacts={contacts} onContactAction={onContactAction} />
    </div>
  );
};
