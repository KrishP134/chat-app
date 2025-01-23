import { MessageBody } from './MessageBody';
import { ProfileCard } from '../ProfileCard';

import type { Contact } from '../../constant/contacts';
import { Chat } from '../../types/type';

interface MessageBoxProps {
  selectedUser: Contact;
  getContactChat: (id: string) => Chat[];
  addChat: (id: string, text: string) => void;
  className?: string;
}

export const MessageBox = ({ selectedUser, getContactChat, addChat, className }: MessageBoxProps): JSX.Element => {
  const selectedUserId = selectedUser.id;

  return (
    <div className={`flex flex-col bg-slate-700 ${className}`}>
      <ProfileCard
        className="border-b-[1px] border-slate-500"
        name={selectedUser.name}
        profileImg={selectedUser.profileImg}
      />
      <MessageBody
        selectedUserId={selectedUserId}
        getContactChat={getContactChat}
        addChat={addChat}
        className="flex-1 overflow-y-auto"
      />
    </div>
  );
};
