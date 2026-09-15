import React from "react";
import { SearchIcon, ChevronDownIcon } from "./Icons";

const FIELD =
  "group relative flex items-center rounded-md bg-white border border-neutral-200 transition-colors focus-within:border-primary-500";

export type SearchInputSize = "md" | "lg";

const SEARCH_SIZES: Record<
  SearchInputSize,
  { field: string; icon: number; input: string }
> = {
  md: { field: "h-11 px-4", icon: 17, input: "text-meta" },
  lg: { field: "h-12 lg:h-14 pl-5 pr-4", icon: 20, input: "text-small lg:text-body" },
};

export interface SearchInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  onShortcutClick?: () => void;
  size?: SearchInputSize;
  leading?: React.ReactNode;
}

export function SearchInput({
  className = "",
  placeholder = "Search anything...",
  onShortcutClick,
  size = "md",
  leading,
  ...props
}: SearchInputProps) {
  const sizing = SEARCH_SIZES[size];

  return (
    <div className={`${FIELD} ${sizing.field} ${className}`}>
      <span className="shrink-0 mr-3 text-neutral-500 group-focus-within:text-primary-500 transition-colors">
        {leading ?? <SearchIcon size={sizing.icon} />}
      </span>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-full bg-transparent font-medium text-neutral-900 placeholder-neutral-400 outline-none ${sizing.input}`}
        {...props}
      />
      <button
        type="button"
        tabIndex={-1}
        onClick={onShortcutClick}
        className="shrink-0 ml-2 px-1.5 py-0.5 rounded-xs bg-neutral-100 border border-neutral-200 text-micro font-semibold text-neutral-500 select-none"
      >
        ⌘ K
      </button>
    </div>
  );
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: { value: string; label: string }[];
}

export function Select({
  options = [
    { value: "most-relevant", label: "Most Relevant" },
    { value: "newest", label: "Newest" },
    { value: "popular", label: "Most Popular" },
  ],
  className = "",
  defaultValue = "most-relevant",
  ...props
}: SelectProps) {
  return (
    <div className={`${FIELD} h-11 px-4 ${className}`}>
      <select
        defaultValue={defaultValue}
        className="w-full h-full appearance-none bg-transparent pr-6 text-meta font-medium text-neutral-900 outline-none cursor-pointer"
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon
        size={15}
        className="absolute right-4 text-neutral-500 pointer-events-none"
      />
    </div>
  );
}
