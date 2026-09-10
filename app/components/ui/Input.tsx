import React from "react";
import { SearchIcon, ChevronDownIcon } from "./Icons";

const FIELD =
  "group relative flex items-center h-11 px-4 rounded-md bg-white border border-neutral-200 transition-colors focus-within:border-primary-500";

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onShortcutClick?: () => void;
}

export function SearchInput({
  className = "",
  placeholder = "Search anything...",
  onShortcutClick,
  ...props
}: SearchInputProps) {
  return (
    <div className={`${FIELD} ${className}`}>
      <SearchIcon
        size={17}
        className="shrink-0 mr-2.5 text-neutral-500 group-focus-within:text-primary-500 transition-colors"
      />
      <input
        type="text"
        placeholder={placeholder}
        className="w-full bg-transparent text-meta font-medium text-neutral-900 placeholder-neutral-400 outline-none"
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
    <div className={`${FIELD} ${className}`}>
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
