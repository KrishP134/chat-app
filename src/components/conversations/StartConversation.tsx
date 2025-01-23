import { Modal, ModalHeader, ModalBody, ModalFooter, ModalButton, SIZE, ROLE } from 'baseui/modal';
import { useState } from 'react';
import { Input } from 'baseui/input';
import { Block } from 'baseui/block';
import { RiChatNewLine } from 'react-icons/ri';
import { StatefulTooltip } from 'baseui/tooltip';
import { KIND as ButtonKind } from 'baseui/button';
import type { OnContactAction } from '../../hooks/useContactList/types';
import { ContactActionType } from '../../hooks/useContactList/constants';

interface StartConversationProps {
  onUserAdd: (name: string) => void;
  onContactAction: OnContactAction;
  className?: string;
}

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
      <StatefulTooltip
        content={() => (
          <Block padding={'2px'}>
            <p>Create new Chat</p>
          </Block>
        )}
        returnFocus
        autoFocus
      >
        <div className="w-14 h-14 flex justify-center items-center cursor-pointer">
          <RiChatNewLine onClick={openModal} />
        </div>
      </StatefulTooltip>

      <Modal onClose={closeModal} closeable isOpen={isOpen} animate autoFocus size={SIZE.default} role={ROLE.dialog}>
        <ModalHeader>Start a New Conversation</ModalHeader>
        <ModalBody>
          <Input
            value={conactName}
            onChange={e => setContactName(e.target.value)}
            placeholder="Type the Name"
            clearOnEscape
          />
        </ModalBody>
        <ModalFooter>
          <ModalButton kind={ButtonKind.tertiary} onClick={closeModal}>
            Cancel
          </ModalButton>
          <ModalButton onClick={createContact}>Okay</ModalButton>
        </ModalFooter>
      </Modal>
    </div>
  );
};
