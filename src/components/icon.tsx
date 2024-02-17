import * as React from 'react';
import { joinClassNames } from '../utils/join-class-names.js';

export function Icon({ className, svgClassName, type, standalone }: IconProps): JSX.Element {
  return (
    <div
      className={joinClassNames(className, `inline-flex h-5 align-middle`, !standalone && `mr-1`)}
    >
      {React.createElement(type, { className: joinClassNames(svgClassName, `h-4 w-4`) })}
    </div>
  );
}

export interface IconProps {
  className?: string | undefined;
  svgClassName?: string | undefined;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: React.FunctionComponent<any> | React.ComponentClass<any>;
  standalone?: boolean | undefined;
}
