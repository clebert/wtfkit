import type { InferStateUnion } from 'state-guard';
import { createJsonStorageItem } from '../utils/create-json-storage-item.js';
import { createMachine } from 'state-guard';
import { z } from 'zod';

export type ColorScheme = InferStateUnion<typeof colorSchemeMachine>;

const storageItem = createJsonStorageItem(
  `colorScheme`,
  z.literal(`system`).or(z.literal(`light`)).or(z.literal(`dark`)),
);

export const colorSchemeMachine = createMachine({
  initialState: storageItem.value ?? `system`,
  initialValue: undefined,

  transformerMap: {
    system: () => undefined,
    light: () => undefined,
    dark: () => undefined,
  },

  transitionsMap: {
    system: { toggle: `light` },
    light: { toggle: `dark` },
    dark: { toggle: `system` },
  },
});

colorSchemeMachine.subscribe(() => {
  storageItem.value = colorSchemeMachine.get().state;
});
