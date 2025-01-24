import { Button } from '../../../../../../../MessageBox/components/MessageBody/components/SendBox/Button';

interface ContactTooltipContentProps {
  handleDelete: () => void;
}

export const ContactTooltipContent = ({ handleDelete }: ContactTooltipContentProps): JSX.Element => {
  return (
    <div className="flex gap-2 z-20">
      <Button onClick={handleDelete} className="font-medium rounded-md hover:border-[#646cff]">
        Delete
      </Button>
    </div>
  );
};
