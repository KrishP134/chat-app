type ContactListProps = {
  className?: string;
};

export const ContactListPlaceHolder = ({ className = '' }: ContactListProps) => {
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <p>No conversation yet.</p>
    </div>
  );
};
