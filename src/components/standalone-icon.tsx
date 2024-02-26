import * as React from 'react';
import { Icon } from './icon.js';
import { Styles } from '../styles.js';
import { joinClassNames } from '../utils/join-class-names.js';

export interface StandaloneIconProps {
  readonly type: React.FunctionComponent<any> | React.ComponentClass<any>;
  readonly title: string;
}

export function StandaloneIcon({ type, title }: StandaloneIconProps): JSX.Element {
  const styles = React.useContext(Styles.Context);

  return (
    <div
      className={joinClassNames(
        `select-none px-2`,
        styles.background(),
        styles.border({ transparent: true }),
        styles.text(),
      )}
      title={title}
    >
      <Icon type={type} standalone />
    </div>
  );
}
