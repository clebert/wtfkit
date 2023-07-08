import * as React from 'react';

export function useToggle(initialValue: boolean, timeout?: number): [boolean, () => void] {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    if (!value || timeout === undefined) {
      return;
    }

    const timeoutId = setTimeout(() => setValue(false), timeout);

    return () => clearTimeout(timeoutId);
  }, [timeout, value]);

  return [value, React.useCallback(() => setValue((previousValue) => !previousValue), [])];
}
