import {Styles} from '../styles.js';
import {joinClassNames} from '../utils/join-class-names.js';
import * as React from 'react';

export interface ButtonProps extends React.PropsWithChildren {
  className?: string;
  type?: 'button' | 'submit';
  title: string;
  disabled?: boolean;
  inverted?: boolean;

  onClick?(): void;
}

export function Button({
  children,
  className,
  type = `button`,
  title,
  disabled,
  inverted,
  onClick,
}: ButtonProps): JSX.Element {
  const enabled = disabled === undefined ? onClick !== undefined : !disabled;
  const styles = React.useContext(Styles.Context);

  return (
    <button
      className={joinClassNames(
        className,
        `select-none whitespace-nowrap px-2`,
        !enabled && `cursor-default opacity-25`,
        styles.background({inverted}),
        enabled && styles.activeBackground({inverted}),
        styles.border(),
        styles.focus(),
        styles.text({inverted}),
        enabled && styles.activeText({inverted}),
      )}
      type={type}
      title={title}
      aria-label={title}
      disabled={!enabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
