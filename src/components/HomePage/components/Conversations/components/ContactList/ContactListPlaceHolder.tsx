type ContactListProps = {
  className?: string;
};

export const ContactListPlaceHolder = ({ className = '' }: ContactListProps) => {
  return (
    <div className={`w-full h-full flex justify-center items-center ${className}`}>
      <p>No conversation yet.</p>
    </div>
  );
};
