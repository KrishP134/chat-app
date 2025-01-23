// Libraries
import { useCallback } from 'react';

// Components
import { ProfileCard } from '../../../../../ProfileCard';

// Constants
import { ContactActionType } from '../../../../../../hooks/useContactList/constants';

// Types
import type { Contact as ContactType } from '../../../../../../../../types';
import type { OnContactAction } from '../../../../../../hooks/useContactList/types';

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
