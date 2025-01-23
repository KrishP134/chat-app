// Hooks
import { useContactList } from './hooks/useContactList';

// Components
import { Conversations } from './components/Conversations';
import { MessageBoxContainer } from './components/MessageBox';

// Types
import type { Contact } from '../../types';

export const HomePage = (): JSX.Element => {
  const [{ contactList, selectedContactId }, onContactAction] = useContactList();

  const selectedContact: Contact | undefined = contactList.find(contact => contact.id === selectedContactId);

  return (
    <div className="flex text-white w-screen h-screen">
      <Conversations className="w-96 h-full" contacts={contactList} onContactAction={onContactAction} />
      <MessageBoxContainer className="flex-1" selectedContact={selectedContact} />
    </div>
  );
};
