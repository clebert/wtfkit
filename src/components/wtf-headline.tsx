import * as React from 'react';

export interface WtfHeadlineProps {
  subdomainName: string;
}

export function WtfHeadline({subdomainName}: WtfHeadlineProps): JSX.Element {
  return (
    <h1 className="mr-2 cursor-default select-none whitespace-nowrap text-3xl font-bold">
      <span className="text-black dark:text-white">{subdomainName}.</span>
      <span className="text-red-800 dark:text-red-200">w</span>
      <span className="text-emerald-800 dark:text-emerald-200">t</span>
      <span className="text-blue-800 dark:text-blue-200">f</span>
    </h1>
  );
}
