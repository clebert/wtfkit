import * as React from 'react';
import type { ColorScheme } from '../machines/color-scheme-machine.js';
import { colorSchemeMachine } from '../machines/color-scheme-machine.js';

export function useColorScheme(): readonly [ColorScheme, () => void] {
  return [
    React.useSyncExternalStore(colorSchemeMachine.subscribe, () => colorSchemeMachine.get()).state,
    React.useCallback(() => colorSchemeMachine.get().actions.toggle(), []),
  ];
}
