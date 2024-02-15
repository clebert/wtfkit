import * as React from 'react';
import { Button } from './button.js';
import { Icon } from './icon.js';
import { colorSchemeMachine } from '../machines/color-scheme-machine.js';
import { joinClassNames } from '../mod.js';

export interface ColorSchemeButtonProps {
  className?: string | undefined;
}

const titles = { isSystem: `System Theme`, isLight: `Day Theme`, isDark: `Night Theme` };
const iconTypes = { isSystem: `computerDesktop`, isLight: `sun`, isDark: `moon` } as const;

export function ColorSchemeButton({ className }: ColorSchemeButtonProps): JSX.Element {
  const { state: colorScheme } = React.useSyncExternalStore(colorSchemeMachine.subscribe, () =>
    colorSchemeMachine.get(),
  );

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
