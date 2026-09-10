import React from "react";

const VIEW_W = 72;
const VIEW_H = 115;

const SILHOUETTE =
  "M0 12.04A11.8 11.8 0 0 1 16.62 1.27L69.34 24.83A4.5 4.5 0 0 1 72 28.94L72 45.54A2 2 0 0 1 70.95 47.31L59.24 53.6A2.6 2.6 0 0 0 59.16 58.14L71.01 65.02A2 2 0 0 1 72 66.75L72 83.96A4.5 4.5 0 0 1 69.41 88.03L13.7 114.09A9.62 9.62 0 0 1 0 105.38L0 52.83A1.8 1.8 0 0 1 0.84 51.31L8.77 46.33A2.4 2.4 0 0 0 8.65 42.19L0.93 37.93A1.8 1.8 0 0 1 0 36.36L0 12.04Z";
const UPPER_PLANE =
  "M-10 -30L90 -30L90 6.36L13.34 43.62A2.4 2.4 0 0 1 11.13 43.56L-10 31.9L-10 -30Z";
const LOWER_PLANE =
  "M-10 85.33L53.92 56.35A2.6 2.6 0 0 1 56.3 56.47L90 76.06L90 150L-10 150L-10 85.33Z";

const SIZES = {
  default: { mark: 56, text: 36, gap: 22 },
  compact: { mark: 36, text: 23, gap: 14 },
} as const;

export type LogoSize = keyof typeof SIZES;

export function LogoMark({
  height = SIZES.default.mark,
  id = "beacon",
  className = "",
  title,
}: {
  height?: number;
  id?: string;
  className?: string;
  title?: string;
}) {
  return (
    <svg
      width={Math.round((height * VIEW_W) / VIEW_H)}
      height={height}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : undefined}
      aria-hidden={title ? undefined : true}
      className={`shrink-0 ${className}`}
    >
      {title ? <title>{title}</title> : null}
      <defs>
        <clipPath id={`${id}-clip`}>
          <path d={SILHOUETTE} />
        </clipPath>
        <linearGradient
          id={`${id}-band`}
          gradientUnits="userSpaceOnUse"
          x1="73.58"
          y1="19.28"
          x2="17.13"
          y2="4.49"
        >
          <stop stopColor="#364EFD" />
          <stop offset="0.45" stopColor="#3767FB" />
          <stop offset="1" stopColor="#40A3FD" />
        </linearGradient>
        <linearGradient
          id={`${id}-upper`}
          gradientUnits="userSpaceOnUse"
          x1="-10.15"
          y1="32.41"
          x2="-0.27"
          y2="0.85"
        >
          <stop stopColor="#4742FA" />
          <stop offset="0.35" stopColor="#5D44FB" />
          <stop offset="1" stopColor="#694BFB" />
        </linearGradient>
        <linearGradient
          id={`${id}-lower`}
          gradientUnits="userSpaceOnUse"
          x1="27.24"
          y1="69.85"
          x2="38.98"
          y2="99.98"
        >
          <stop stopColor="#1F25BB" />
          <stop offset="0.35" stopColor="#3244F4" />
          <stop offset="1" stopColor="#4149FE" />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${id}-clip)`}>
        <path d={SILHOUETTE} fill={`url(#${id}-band)`} />
        <path d={UPPER_PLANE} fill={`url(#${id}-upper)`} />
        <path d={LOWER_PLANE} fill={`url(#${id}-lower)`} />
      </g>
    </svg>
  );
}

export function Logo({
  size = "default",
  className = "",
}: {
  size?: LogoSize;
  className?: string;
}) {
  const { mark, text, gap } = SIZES[size];

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      style={{ gap }}
    >
      <LogoMark height={mark} id={`beacon-${size}`} />
      <span
        className="font-display font-bold tracking-tight text-neutral-900 leading-none"
        style={{ fontSize: text }}
      >
        Beacon
      </span>
    </div>
  );
}
