import React from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "md" | "lg";
export type ButtonState = "default" | "hover" | "disabled";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  forceState?: ButtonState;
  children: React.ReactNode;
}

const SIZES: Record<ButtonSize, string> = {
  lg: "h-11 px-4 text-small rounded-md",
  md: "h-[34px] px-3 text-caption rounded-sm",
};

const VARIANTS: Record<ButtonVariant, Record<ButtonState, string>> = {
  primary: {
    default:
      "bg-primary-600 text-white shadow-sm hover:bg-primary-900 active:bg-primary-900",
    hover: "bg-primary-900 text-white shadow-sm",
    disabled: "bg-primary-200 text-white",
  },
  secondary: {
    default:
      "border border-primary-600 text-primary-600 bg-white hover:bg-primary-100",
    hover: "border border-primary-600 text-primary-600 bg-primary-100 shadow-sm",
    disabled: "border border-neutral-300 text-neutral-400 bg-white",
  },
  tertiary: {
    default: "bg-neutral-100 text-neutral-900 hover:bg-neutral-200",
    hover: "bg-neutral-200 text-neutral-900",
    disabled: "bg-neutral-50 text-neutral-400",
  },
  text: {
    default: "text-primary-600 hover:text-primary-800",
    hover: "text-primary-800",
    disabled: "text-primary-300",
  },
};

export function Button({
  variant = "primary",
  size = "lg",
  forceState,
  className = "",
  disabled,
  children,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || forceState === "disabled";
  const state: ButtonState = isDisabled
    ? "disabled"
    : forceState === "hover"
      ? "hover"
      : "default";

  return (
    <button
      disabled={isDisabled}
      className={`inline-flex items-center justify-center whitespace-nowrap font-medium outline-none select-none transition-colors duration-150 ${SIZES[size]} ${VARIANTS[variant][state]} ${isDisabled ? "cursor-not-allowed" : ""} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
