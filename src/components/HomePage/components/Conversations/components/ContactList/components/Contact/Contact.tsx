// Libraries
import { useCallback } from 'react';

// Utils or Helper
import { deleteContactChatHistory } from './utils';

// Components
import { Tooltip } from '../../../../../Tooltip';
import { ProfileCard } from '../../../../../ProfileCard';
import { ContactTooltipContent } from './components/ContactTooltipContent';

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

  const onProfileDelete = useCallback(() => {
    onContactAction({
      type: ContactActionType.DELETE_CONTACT,
      payload: {
        id: contact.id,
      },
    });
    deleteContactChatHistory({ id: contact.id });
  }, [contact.id, onContactAction]);

  return (
    <Tooltip TooltipContent={() => <ContactTooltipContent handleDelete={onProfileDelete} />}>
      <div>
        <ProfileCard name={contact.name} profileImg={contact.profileImg} onClick={onProfileClick} />
      </div>
    </Tooltip>
  );
};
