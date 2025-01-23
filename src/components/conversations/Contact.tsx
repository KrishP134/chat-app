// Types
import { useCallback } from 'react';
import type { Contact as ContactType } from '../../constant/contacts';

// Components
import { ProfileCard } from '../ProfileCard';
import type { OnContactAction } from '../../hooks/useContactList/types';
import { ContactActionType } from '../../hooks/useContactList/constants';

interface ContactProps {
  contact: ContactType;
  onContactAction: OnContactAction;
}

export const Contact = ({ contact, onContactAction }: ContactProps): JSX.Element => {
  const onProfileClick = useCallback(() => {
    onContactAction({
      type: ContactActionType.SELECT_CONTACT,
      payload: { id: contact.id },
    });
  }, [contact.id, onContactAction]);

  return <ProfileCard name={contact.name} profileImg={contact.profileImg} onClick={onProfileClick} />;
};
