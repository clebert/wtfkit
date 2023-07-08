import {joinClassNames} from '../index.js';
import * as React from 'react';

export interface TopbarProps extends React.PropsWithChildren {
  className?: string;
}

export function Topbar({children, className}: TopbarProps): JSX.Element {
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
