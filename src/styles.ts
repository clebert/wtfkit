import {joinClassNames} from './utils/join-class-names.js';
import * as React from 'react';

export interface StylesOptions {
  readonly neutralGray?: boolean;
}

export interface BackgroundOptions {
  readonly inverted?: boolean;
  readonly shaded?: boolean;
}

export interface BorderOptions {
  readonly transparent?: boolean;
}

export interface FocusOptions {
  readonly within?: boolean;
}

export interface TextOptions {
  readonly inverted?: boolean;
  readonly placeholder?: boolean;
}

export class Styles {
  static readonly Context = React.createContext(new Styles());

  constructor(readonly options: StylesOptions = {}) {}

  background(options: BackgroundOptions = {}): string {
    const {neutralGray} = this.options;
    const {inverted, shaded} = options;

    return joinClassNames(
      inverted
        ? neutralGray
          ? shaded
            ? `bg-neutral-800 dark:bg-neutral-100`
            : `bg-neutral-900 dark:bg-white`
          : shaded
          ? `bg-gray-800 dark:bg-gray-100`
          : `bg-gray-900 dark:bg-white`
        : neutralGray
        ? shaded
          ? `bg-neutral-100 dark:bg-neutral-800`
          : `bg-white dark:bg-neutral-900`
        : shaded
        ? `bg-gray-100 dark:bg-gray-800`
        : `bg-white dark:bg-gray-900`,
    );
  }

  activeBackground(options: BackgroundOptions = {}): string {
    const {neutralGray} = this.options;
    const {inverted, shaded} = options;

    return joinClassNames(
      inverted
        ? neutralGray
          ? shaded
            ? `active:bg-neutral-100 dark:active:bg-neutral-800`
            : `active:bg-white dark:active:bg-neutral-900`
          : shaded
          ? `active:bg-gray-100 dark:active:bg-gray-800`
          : `active:bg-white dark:active:bg-gray-900`
        : neutralGray
        ? shaded
          ? `active:bg-neutral-800 dark:active:bg-neutral-100`
          : `active:bg-neutral-900 dark:active:bg-white`
        : shaded
        ? `active:bg-gray-800 dark:active:bg-gray-100`
        : `active:bg-gray-900 dark:active:bg-white`,
    );
  }

  border(options: BorderOptions = {}): string {
    const {neutralGray} = this.options;
    const {transparent} = options;

    return transparent
      ? `border border-transparent`
      : neutralGray
      ? `border border-neutral-300 dark:border-neutral-700`
      : `border border-gray-300 dark:border-gray-700`;
  }

  focus(options: FocusOptions = {}): string {
    const {within} = options;

    return within
      ? `focus-within:outline focus-within:outline-1 focus-within:outline-offset-[-1px] focus-within:outline-blue-400`
      : `focus:outline focus:outline-1 focus:outline-offset-[-1px] focus:outline-blue-400`;
  }

  link(): string {
    return `text-blue-800 dark:text-blue-200 active:text-blue-200 dark:active:text-blue-800`;
  }

  text(options: TextOptions = {}): string {
    const {neutralGray} = this.options;
    const {inverted, placeholder} = options;

    return joinClassNames(
      inverted ? `text-white dark:text-black` : `text-black dark:text-white`,
      placeholder && (neutralGray ? `placeholder-neutral-400` : `placeholder-gray-400`),
    );
  }

  activeText(options: Omit<TextOptions, 'placeholder'> = {}): string {
    const {inverted} = options;

    return joinClassNames(
      inverted
        ? `active:text-black dark:active:text-white`
        : `active:text-white dark:active:text-black`,
    );
  }
}
