import React from "react";
import { TrendingUpIcon, FileTextIcon, VideoIcon } from "./Icons";

export type BadgeVariant = "video" | "lesson" | "popular" | "new" | "custom";

export interface BadgeProps {
  variant?: BadgeVariant;
  children?: React.ReactNode;
  className?: string;
}

const VARIANTS: Record<
  BadgeVariant,
  { tone: string; label: string; icon: React.ReactNode }
> = {
  video: {
    tone: "bg-primary-100 text-primary-600",
    label: "Video",
    icon: <VideoIcon size={14} />,
  },
  lesson: {
    tone: "bg-primary-100 text-primary-600",
    label: "Lesson",
    icon: <FileTextIcon size={14} strokeWidth={2.5} />,
  },
  popular: {
    tone: "bg-success-soft text-success",
    label: "Popular",
    icon: <TrendingUpIcon size={14} strokeWidth={2.5} />,
  },
  new: {
    tone: "bg-neutral-100 text-neutral-900",
    label: "New",
    icon: <span className="w-2 h-2 rounded-full bg-neutral-900" />,
  },
  custom: {
    tone: "bg-primary-100 text-primary-600",
    label: "",
    icon: null,
  },
};

export function Badge({
  variant = "video",
  children,
  className = "",
}: BadgeProps) {
  const { tone, label, icon } = VARIANTS[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-sm text-meta font-semibold select-none ${tone} ${className}`}
    >
      {icon}
      <span>{children || label}</span>
    </span>
  );
}

export type StatusType = "in-progress" | "completed" | "not-started" | "error";

const STATUSES: Record<StatusType, { dot: string; label: string }> = {
  "in-progress": { dot: "bg-primary-600", label: "In Progress" },
  completed: { dot: "bg-success", label: "Completed" },
  "not-started": { dot: "bg-neutral-500", label: "Not Started" },
  error: { dot: "bg-error", label: "Error" },
};

export function StatusIndicator({
  status,
  label,
  className = "",
}: {
  status: StatusType;
  label?: string;
  className?: string;
}) {
  const config = STATUSES[status];

  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <span
        className={`w-2.5 h-2.5 rounded-full shrink-0 ${config.dot}`}
      />
      <span className="text-meta font-medium text-neutral-700">
        {label || config.label}
      </span>
    </div>
  );
}
