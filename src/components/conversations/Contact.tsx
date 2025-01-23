// Types
import { useCallback } from "react";
import type { Contact as ContactType } from "../../constant/contacts";

// Components
import { ProfileCard } from "../ProfileCard";

interface ContactProps {
  contact: ContactType;
  onUserChange: (userId: string) => void;
}

export const Contact = ({
  contact,
  onUserChange,
}: ContactProps): JSX.Element => {
  const onProfileClick = useCallback(() => {
    onUserChange(contact.id);
  }, [onUserChange, contact]);

  return (
    <ProfileCard
      name={contact.name}
      profileImg={contact.profileImg}
      onClick={onProfileClick}
    />
  );
};
