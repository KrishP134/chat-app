// Libraries
import { Input } from 'baseui/input';
import { KIND as ButtonKind } from 'baseui/button';
import { Dispatch, SetStateAction, useCallback, KeyboardEvent } from 'react';
import { Modal, ModalBody, ModalButton, ModalFooter, ModalHeader, ROLE, SIZE } from 'baseui/modal';

type CreateModalProps = {
  closeModal: () => void;
  isOpen: boolean;
  conactName: string;
  setContactName: Dispatch<SetStateAction<string>>;
  createContact: () => void;
};

export const CreateModal = ({
  closeModal,
  isOpen,
  conactName,
  setContactName,
  createContact,
}: CreateModalProps): JSX.Element => {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === 'Enter') {
        createContact();
      }
    },
    [createContact]
  );

  return (
    <Modal onClose={closeModal} closeable isOpen={isOpen} animate autoFocus size={SIZE.default} role={ROLE.dialog}>
      <ModalHeader>Start a New Conversation</ModalHeader>
      <ModalBody>
        <Input
          value={conactName}
          onChange={e => setContactName(e.target.value)}
          onKeyDown={handleKeyDown}
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
  );
};
