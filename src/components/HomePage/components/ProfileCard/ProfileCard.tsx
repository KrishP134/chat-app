interface ProfileCardProps {
  name: string;
  className?: string;
  profileImg?: string;
  onClick?: () => void;
}

const DEFAULT_PROFILE_IMAGE =
  'https://t4.ftcdn.net/jpg/05/49/98/39/360_F_549983970_bRCkYfk0P6PP5fKbMhZMIb07mCJ6esXL.jpg';

export const ProfileCard = ({
  className,
  name,
  profileImg = DEFAULT_PROFILE_IMAGE,
  onClick,
}: ProfileCardProps): JSX.Element => {
  return (
    <div className={`w-full h-14 px-4 flex gap-4 items-center cursor-pointer ${className}`} onClick={onClick}>
      <img className="h-10 w-10 rounded-full" src={profileImg} alt={`Profile Picture of ${name}`} />
      <p className="">{name}</p>
    </div>
  );
};
