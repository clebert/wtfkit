import * as React from 'react';
import { joinClassNames } from '../utils/join-class-names.js';

export interface TopbarProps extends React.PropsWithChildren {
  className?: string | undefined;
}

export function Topbar({ children, className }: TopbarProps): JSX.Element {
  return (
    <div
      className={joinClassNames(
        className,
        `flex flex-col space-y-4 md:flex-row md:items-center md:space-x-2 md:space-y-0`,
      )}
    >
      {children}
    </div>
  );
}
