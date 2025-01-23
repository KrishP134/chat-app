import { ContactList } from "./ContactList";
import { ProfileCard } from "../ProfileCard";

import type { Contact } from "../../constant/contacts";
import { StartConversation } from "./StartConversation";

const loggedInUser = {
  name: "Krish Prajapati",
};

interface ConversationsProps {
  contacts: Contact[];
  onContactSelect: (userId: string) => void;
  onContactAdd: (name: string) => void;
  onContactDelete: (id: string) => void;
  className?: string;
}

export const Conversations = ({
  contacts,
  onContactSelect,
  onContactAdd,
  onContactDelete,
  className,
}: ConversationsProps): JSX.Element => {
  return (
    <div className={`w-full h-full bg-slate-950 flex flex-col ${className}`}>
      <div className="flex gap-2 justify-end border-b-2">
        <ProfileCard name={loggedInUser.name} />
        <StartConversation onUserAdd={onContactAdd} />
      </div>

      <ContactList
        className="flex-1"
        contacts={contacts}
        onContactSelect={onContactSelect}
        onContactDelete={onContactDelete}
      />
    </div>
  );
};
