// Components
import { Button } from '../../../../../SendBox/Button';

type ChatTooltipContentProps = {
  handleDelete: () => void;
  handleEdit: () => void;
  toggleIsEditMode: () => void;
  isEditMode: boolean;
};

export const ChatTooltipContent = ({
  handleDelete,
  isEditMode,
  toggleIsEditMode,
  handleEdit,
}: ChatTooltipContentProps) => {
  return (
    <div className="flex gap-2">
      <Button onClick={handleDelete} className="font-medium rounded-md hover:border-[#646cff]">
        Delete
      </Button>
      <Button
        onClick={isEditMode ? handleEdit : toggleIsEditMode}
        className="font-medium rounded-md hover:border-[#646cff]"
      >
        {isEditMode ? 'Save' : 'Edit'}
      </Button>
    </div>
  );
};
