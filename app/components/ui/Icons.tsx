import React from "react";

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

function Outline({
  size = 24,
  className = "",
  strokeWidth = 2,
  children,
  ...props
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

function Solid({ size = 24, className = "", children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </Outline>
  );
}

export function HomeFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </Solid>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Outline>
  );
}

export function SearchFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </Solid>
  );
}

export function PlayCircleIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" />
    </Outline>
  );
}

export function PlayCircleFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
    </Solid>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </Outline>
  );
}

export function FileTextFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
    </Solid>
  );
}

export function BookmarkIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
    </Outline>
  );
}

export function BookmarkFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
    </Solid>
  );
}

export function BarChartIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </Outline>
  );
}

export function BarChartFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M5 9.2h3V19H5zM10.5 5h3v14h-3zM16 13h3v6h-3z" />
    </Solid>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </Outline>
  );
}

export function ClockFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm.5 13H11V7h1.5v5.2l3.4 2-.8 1.3-2.6-1.5z" />
    </Solid>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </Outline>
  );
}

export function UserFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
    </Solid>
  );
}

export function SettingsIcon(props: IconProps) {
  return (
    <Outline {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </Outline>
  );
}

export function SettingsFilledIcon(props: IconProps) {
  return (
    <Solid {...props}>
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </Solid>
  );
}

export function ChevronDownIcon({ size = 18, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <polyline points="6 9 12 15 18 9" />
    </Outline>
  );
}

export function ChevronLeftIcon({ size = 16, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <polyline points="15 18 9 12 15 6" />
    </Outline>
  );
}

export function ChevronRightIcon({ size = 16, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <polyline points="9 18 15 12 9 6" />
    </Outline>
  );
}

export function TrendingUpIcon({ size = 16, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </Outline>
  );
}

export function ExternalLinkIcon({ size = 14, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </Outline>
  );
}

export function ModulesIcon({ size = 16, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </Outline>
  );
}

export function VideoIcon({ size = 14, ...props }: IconProps) {
  return (
    <Solid size={size} {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 4v8l6-4-6-4z" />
    </Solid>
  );
}

export function ClarityIcon({ size = 28, ...props }: IconProps) {
  return (
    <Outline size={size} strokeWidth={1.75} {...props}>
      <polygon points="12 2 22 12 12 22 2 12 12 2" />
      <line x1="12" y1="6" x2="12" y2="18" />
      <line x1="6" y1="12" x2="18" y2="12" />
    </Outline>
  );
}

export function ConsistencyIcon({ size = 28, ...props }: IconProps) {
  return (
    <Outline size={size} strokeWidth={1.75} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
    </Outline>
  );
}

export function FocusCalmIcon({ size = 28, ...props }: IconProps) {
  return (
    <Outline size={size} strokeWidth={1.75} {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </Outline>
  );
}

export function AccessibleIcon({ size = 28, ...props }: IconProps) {
  return (
    <Outline size={size} strokeWidth={1.75} {...props}>
      <circle cx="12" cy="4" r="2" />
      <path d="M5 9h14M12 9v6M8 21l4-6 4 6" />
    </Outline>
  );
}

export function BellIcon({ size = 20, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </Outline>
  );
}

export function BookOpenIcon({ size = 24, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
      <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
    </Outline>
  );
}

export function BoltIcon({ size = 24, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <polygon points="13 2 4 14 11 14 11 22 20 10 13 10 13 2" />
    </Outline>
  );
}

export function TargetPlayIcon({ size = 24, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <path d="M12 22a10 10 0 1 1 10-10" />
      <path d="M12 17a5 5 0 1 1 5-5" />
      <polygon points="10.5 9.5 15 12 10.5 14.5 10.5 9.5" fill="currentColor" stroke="none" />
    </Outline>
  );
}

export function ArrowRightLongIcon({ size = 18, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <line x1="3" y1="12" x2="20" y2="12" />
      <polyline points="14 6 20 12 14 18" />
    </Outline>
  );
}

export function WaveformIcon({ size = 24, ...props }: IconProps) {
  return (
    <Outline size={size} {...props}>
      <line x1="3" y1="9.5" x2="3" y2="14.5" />
      <line x1="7.5" y1="6" x2="7.5" y2="18" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="16.5" y1="7" x2="16.5" y2="17" />
      <line x1="21" y1="10" x2="21" y2="14" />
    </Outline>
  );
}
