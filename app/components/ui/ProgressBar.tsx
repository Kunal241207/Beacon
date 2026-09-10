import React from "react";

export interface ProgressBarProps {
  value?: number;
  label?: string;
  showLabel?: boolean;
  className?: string;
}

export function ProgressBar({
  value = 35,
  label,
  showLabel = true,
  className = "",
}: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full flex items-center gap-4 ${className}`}>
      <div
        role="progressbar"
        aria-valuenow={clamped}
        aria-valuemin={0}
        aria-valuemax={100}
        className="relative flex-1 h-2 rounded-full bg-neutral-200 overflow-hidden"
      >
        <div
          className="h-full rounded-full bg-primary-600 transition-all duration-300"
          style={{ width: `${clamped}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-small font-medium text-neutral-700 whitespace-nowrap">
          {label || `${clamped}% complete`}
        </span>
      )}
    </div>
  );
}
