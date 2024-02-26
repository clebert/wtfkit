import * as React from 'react';
import { ComputerDesktopIcon, MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Button } from './button.js';
import { Icon } from './icon.js';
import { colorSchemeMachine } from '../machines/color-scheme-machine.js';
import { joinClassNames } from '../utils/join-class-names.js';
import { useColorScheme } from '../hooks/use-color-scheme.js';

export interface ColorSchemeButtonProps {
  className?: string | undefined;
}

const titles = { system: `System Theme`, light: `Day Theme`, dark: `Night Theme` };
const iconTypes = { system: ComputerDesktopIcon, light: SunIcon, dark: MoonIcon } as const;

export function ColorSchemeButton({ className }: ColorSchemeButtonProps): JSX.Element {
  const [colorScheme] = useColorScheme();

  const toggle = React.useCallback(() => {
    colorSchemeMachine.get().actions.toggle();
  }, []);

  return (
    <Button
      className={joinClassNames(className, `border-dashed`)}
      title={titles[colorScheme]}
      onClick={toggle}
    >
      <Icon type={iconTypes[colorScheme]} standalone />
    </Button>
  );
}
