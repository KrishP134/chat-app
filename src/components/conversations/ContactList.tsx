import { StatefulTooltip } from "baseui/tooltip";

import { Contact } from "./Contact";

import type { Contact as ContactType } from "../../constant/contacts";
import { Button } from "../chatScreen/SendBox/Button";

interface ContactListProps {
  contacts: ContactType[];
  onContactSelect: (id: string) => void;
  onContactDelete: (id: string) => void;
  className?: string;
}

export const ContactList = ({
  contacts,
  onContactSelect,
  onContactDelete,
  className,
}: ContactListProps): JSX.Element => {
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
            <Contact contact={contact} onUserChange={onContactSelect} />
          </li>
        );
      })}
    </ul>
  );
};
