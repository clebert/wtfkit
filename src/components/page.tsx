import {useDarkMode} from '../hooks/use-dark-mode.js';
import {joinClassNames} from '../index.js';
import {Styles} from '../styles.js';
import * as React from 'react';

export interface PageProps extends React.PropsWithChildren {
  className?: string;
  styles: Styles;
}

export function Page({children, className, styles}: PageProps): JSX.Element {
  React.useLayoutEffect(() => {
    const classNames = styles.background().split(` `);

    document.querySelector(`body`)?.classList.add(...classNames);

    return () => {
      document.querySelector(`body`)?.classList.remove(...classNames);
    };
  }, [styles]);

  const darkMode = useDarkMode();

  React.useLayoutEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(`dark`);
    }

    return () => {
      document.documentElement.classList.remove(`dark`);
    };
  }, [darkMode]);

  return (
    <Styles.Context.Provider value={styles}>
      <div className={joinClassNames(className, `2xl:container 2xl:mx-auto`)}>
        <div className="m-4 flex flex-col space-y-4">{children}</div>
      </div>
    </Styles.Context.Provider>
  );
}
