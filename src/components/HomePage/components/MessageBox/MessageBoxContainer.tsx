// Components
import { MessageBox } from './MessageBox';
import { MessageBoxPlaceholder } from './MessageBoxPlaceholder';

// Types
import type { Contact } from '../../../../types';

type MessageBoxContainerProps = {
  selectedContact: Contact | undefined;
  className?: string;
};

export const MessageBoxContainer = ({ selectedContact, className = '' }: MessageBoxContainerProps): JSX.Element => {
  return (
    <div className={className}>
      {selectedContact ? <MessageBox selectedContact={selectedContact} /> : <MessageBoxPlaceholder />}
    </div>
  );
};
