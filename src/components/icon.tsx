import {joinClassNames} from '../utils/join-class-names.js';
import {
  AdjustmentsHorizontalIcon,
  ArrowLeftOnRectangleIcon,
  ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowUturnLeftIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckIcon,
  ComputerDesktopIcon,
  CursorArrowRaysIcon,
  EyeIcon,
  EyeSlashIcon,
  LinkIcon,
  LockClosedIcon,
  MoonIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
  PlusIcon,
  Square2StackIcon,
  Squares2X2Icon,
  SquaresPlusIcon,
  SunIcon,
  TrashIcon,
  UserIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import * as React from 'react';

export interface IconProps {
  className?: string;
  type: keyof typeof pathByType;
  standalone?: boolean;
}

const iconHeightWidth = `h-4 w-4`;

const pathByType = {
  adjustmentsHorizontal: <AdjustmentsHorizontalIcon className={iconHeightWidth} />,
  arrowLeftOnRectangle: <ArrowLeftOnRectangleIcon className={iconHeightWidth} />,
  arrowRightOnRectangle: <ArrowRightOnRectangleIcon className={iconHeightWidth} />,
  arrowTopRightOnSquare: <ArrowTopRightOnSquareIcon className={iconHeightWidth} />,
  arrowUturnLeft: <ArrowUturnLeftIcon className={iconHeightWidth} />,
  barsArrowDown: <BarsArrowDownIcon className={iconHeightWidth} />,
  barsArrowUp: <BarsArrowUpIcon className={iconHeightWidth} />,
  chatBubbleLeftEllipsis: <ChatBubbleLeftEllipsisIcon className={iconHeightWidth} />,
  check: <CheckIcon className={iconHeightWidth} />,
  computerDesktop: <ComputerDesktopIcon className={iconHeightWidth} />,
  cursorArrowRays: <CursorArrowRaysIcon className={iconHeightWidth} />,
  eye: <EyeIcon className={iconHeightWidth} />,
  eyeSlash: <EyeSlashIcon className={iconHeightWidth} />,
  link: <LinkIcon className={iconHeightWidth} />,
  lockClosed: <LockClosedIcon className={iconHeightWidth} />,
  moon: <MoonIcon className={iconHeightWidth} />,
  paperAirplane: <PaperAirplaneIcon className={iconHeightWidth} />,
  pencilSquare: <PencilSquareIcon className={iconHeightWidth} />,
  plus: <PlusIcon className={iconHeightWidth} />,
  square2Stack: <Square2StackIcon className={iconHeightWidth} />,
  squares2X2: <Squares2X2Icon className={iconHeightWidth} />,
  squaresPlus: <SquaresPlusIcon className={iconHeightWidth} />,
  sun: <SunIcon className={iconHeightWidth} />,
  trash: <TrashIcon className={iconHeightWidth} />,
  user: <UserIcon className={iconHeightWidth} />,
  xMark: <XMarkIcon className={iconHeightWidth} />,
} as const;

export function Icon({className, type, standalone}: IconProps): JSX.Element {
  return (
    <div
      className={joinClassNames(className, `inline-flex h-5 align-middle`, !standalone && `mr-1`)}
    >
      {pathByType[type]}
    </div>
  );
}
