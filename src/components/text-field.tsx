import * as React from 'react';
import { Styles } from '../styles.js';
import { joinClassNames } from '../utils/join-class-names.js';

export interface TextFieldProps {
  className?: string | undefined;
  type?: 'password' | 'text' | 'url' | undefined;
  value: string;
  placeholder?: string | undefined;
  disabled?: boolean | undefined;
  required?: boolean | undefined;

  onBlur?: (() => void) | undefined;
  onFocus?: (() => void) | undefined;
  onInput: (value: string) => void;
}

export const TextField = React.forwardRef(
  (props: TextFieldProps, ref: React.ForwardedRef<HTMLInputElement>): JSX.Element => {
    const { className, type, value, placeholder, disabled, required, onBlur, onFocus, onInput } =
      props;

    const handleInput = React.useCallback<React.FormEventHandler<HTMLInputElement>>(
      (event) => {
        event.preventDefault();
        onInput(event.currentTarget.value);
      },
      [onInput],
    );

    const styles = React.useContext(Styles.Context);

    return (
      <input
        ref={ref}
        className={joinClassNames(
          className,
          `w-full appearance-none rounded-none px-2`,
          disabled && `opacity-25`,
          styles.background(),
          styles.border(),
          !disabled && styles.focus(),
          styles.text({ placeholder: true }),
        )}
        type={type ?? `text`}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        disabled={disabled}
        required={required}
        spellCheck={false}
        onBlur={onBlur}
        onFocus={onFocus}
        onInput={handleInput}
      />
    );
  },
);
