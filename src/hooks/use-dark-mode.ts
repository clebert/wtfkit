import * as React from 'react';
import { useColorScheme } from './use-color-scheme.js';

const mediaQuery = window.matchMedia(`(prefers-color-scheme: dark)`);

export function useDarkMode(): boolean {
  const [prefersDark, setPrefersDark] = React.useState(mediaQuery.matches);

  React.useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    mediaQuery.addEventListener(`change`, () => setPrefersDark(mediaQuery.matches), { signal });

    return () => abortController.abort();
  }, []);

  const [colorScheme] = useColorScheme();

  return colorScheme === `dark` || (colorScheme === `system` && prefersDark);
}
