import { Contact } from '../../../../types';
import { MessageBox } from './MessageBox';
import { MessageBoxPlaceholder } from './MessageBoxPlaceholder';

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
