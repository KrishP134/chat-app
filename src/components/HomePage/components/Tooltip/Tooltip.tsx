// Libraries
import { ElementType, ReactNode } from 'react';
import { StatefulTooltip } from 'baseui/tooltip';

type TooltipProps = {
  children: ReactNode;
  TooltipContent: ElementType;
};

export const Tooltip = ({ children, TooltipContent }: TooltipProps): JSX.Element => {
  return (
    <StatefulTooltip content={() => <TooltipContent />} returnFocus autoFocus>
      {children}
    </StatefulTooltip>
  );
};
