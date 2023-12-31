import {Styles} from '../styles.js';
import {joinClassNames} from '../utils/join-class-names.js';
import * as React from 'react';

export interface TextFieldProps {
  className?: string;
  type?: 'password' | 'text' | 'url';
  value: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;

  onInput(value: string): void;
}

export const TextField = React.forwardRef(
  (
    {className, type = `text`, value, placeholder, disabled, required, onInput}: TextFieldProps,
    ref: React.ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
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
          styles.text({placeholder: true}),
        )}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        autoCorrect="off"
        disabled={disabled}
        required={required}
        spellCheck={false}
        onInput={handleInput}
      />
    );
  },
);
