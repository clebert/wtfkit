import {joinClassNames} from '../index.js';
import * as React from 'react';

export interface WtfLogoProps {
  className?: string;
  subdomainName: string;
}

export function WtfLogo({className, subdomainName}: WtfLogoProps): JSX.Element {
  return (
    <div className={joinClassNames(className, `flex h-48 w-48 items-center justify-center border`)}>
      <h1 className="text-8xl font-bold">
        <span className="text-black dark:text-white">{subdomainName}.</span>
        <span className="text-red-800 dark:text-red-200">w</span>
        <span className="text-emerald-800 dark:text-emerald-200">t</span>
        <span className="text-blue-800 dark:text-blue-200">f</span>
      </h1>
    </div>
  );
}
