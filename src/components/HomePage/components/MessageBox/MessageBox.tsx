import { MessageBody } from './components/MessageBody/MessageBody';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import { Contact } from '../../../../types';

interface MessageBoxProps {
  selectedContact: Contact;
  className?: string;
}

export const MessageBox = ({ selectedContact, className }: MessageBoxProps): JSX.Element => {
  const selectedUserId = selectedContact.id;

  return (
    <div className={`flex flex-col bg-slate-700 w-full h-full ${className}`}>
      <ProfileCard
        className="border-b-[1px] border-slate-500"
        name={selectedContact.name}
        profileImg={selectedContact.profileImg}
      />
      <MessageBody className="flex-1 overflow-y-auto" selectedContactId={selectedUserId} />
    </div>
  );
};
