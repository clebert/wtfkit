import * as React from 'react';
import { joinClassNames } from '../utils/join-class-names.js';

export interface ContainerProps extends React.PropsWithChildren {
  className?: string | undefined;
  center?: boolean | undefined;
  col?: boolean | undefined;
  grow?: boolean | undefined;
}

export const Container = React.forwardRef(
  (
    { children, className, center, col, grow }: ContainerProps,
    ref: React.ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    return (
      <div
        ref={ref}
        className={joinClassNames(
          className,
          `flex max-h-min`,
          center && `items-center`,
          col ? `flex-col space-y-4` : `flex-row space-x-2`,
          grow ? `grow overflow-hidden` : `shrink-0`,
        )}
      >
        {children}
      </div>
    );
  },
);
