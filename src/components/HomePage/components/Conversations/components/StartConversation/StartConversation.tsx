// Libraries
import { useState } from 'react';
import { RiChatNewLine } from 'react-icons/ri';
import { Block } from 'baseui/block';

// Components
import { Tooltip } from '../../../Tooltip';
import { CreateModal } from './components/CreateModal/CreateModal';

// Constant
import { ContactActionType } from '../../../../hooks/useContactList/constants';

// Types
import type { OnContactAction } from '../../../../hooks/useContactList/types';

interface StartConversationProps {
  onContactAction: OnContactAction;
  className?: string;
}

const TooltipContent = (): JSX.Element => {
  return (
    <Block padding={'2px'}>
      <p>Create new Chat</p>
    </Block>
  );
};

export const StartConversation = ({ className, onContactAction }: StartConversationProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [conactName, setContactName] = useState<string>('');

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const createContact = () => {
    onContactAction({
      type: ContactActionType.CREATE_CONTACT,
      payload: { name: conactName },
    });
    setIsOpen(false);
    setContactName('');
  };

  return (
    <div className={`h-14 flex flex-col  justify-center items-center ${className} relative z-50`}>
      <Tooltip TooltipContent={TooltipContent}>
        <div className="w-14 h-14 flex justify-center items-center cursor-pointer">
          <RiChatNewLine onClick={openModal} />
        </div>
      </Tooltip>
      <CreateModal
        conactName={conactName}
        isOpen={isOpen}
        closeModal={closeModal}
        createContact={createContact}
        setContactName={setContactName}
      />
    </div>
  );
};
