import React from "react";
import { Logo } from "./Logo";
import { ChevronRightIcon, ChevronLeftIcon } from "./Icons";

const NAV_LINKS = [
  { href: "#courses", label: "Courses" },
  { href: "#learning", label: "My Learning" },
  { href: "#explore", label: "Explore" },
];

function NavGroup({
  label,
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLElement> & { label: string }) {
  return (
    <nav className={`flex flex-col gap-1 ${className}`} {...props}>
      <span className="ds-caption">{label}</span>
      {children}
    </nav>
  );
}

export function Breadcrumbs({
  items = [
    "All Courses",
    "Next.js for Production",
    "Data Fetching & Caching",
  ],
  className = "",
}: {
  items?: string[];
  className?: string;
}) {
  return (
    <NavGroup label="You are here" aria-label="Breadcrumbs" className={className}>
      <ol className="flex items-center gap-2 text-meta text-neutral-500">
        {items.map((item, index) => (
          <li key={item} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRightIcon size={12} className="text-neutral-400" />
            )}
            <span
              className={
                index === items.length - 1
                  ? "font-semibold text-neutral-900"
                  : "hover:text-neutral-900 transition-colors cursor-pointer"
              }
            >
              {item}
            </span>
          </li>
        ))}
      </ol>
    </NavGroup>
  );
}

const PAGE_BUTTON =
  "w-8 h-8 rounded-sm flex items-center justify-center transition-colors";
const PAGE_IDLE =
  "font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100";

function buildPageItems(currentPage: number, totalPages: number) {
  const head = [1, 2, 3].filter((page) => page <= totalPages);
  const items: (number | "gap")[] = [...head];

  if (totalPages > head.length) {
    if (totalPages > head.length + 1) items.push("gap");
    items.push(totalPages);
  }

  return items.map((item, index) => ({
    key: item === "gap" ? `gap-${index}` : `page-${item}`,
    item,
    isCurrent: item === currentPage,
  }));
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  className = "",
}: {
  currentPage?: number;
  totalPages?: number;
  className?: string;
}) {
  return (
    <NavGroup label="Pages" aria-label="Pagination" className={className}>
      <div className="flex items-center gap-1.5 text-meta">
        <button
          type="button"
          aria-label="Go to previous page"
          disabled={currentPage <= 1}
          className={`${PAGE_BUTTON} ${PAGE_IDLE} disabled:opacity-40`}
        >
          <ChevronLeftIcon size={14} />
        </button>

        {buildPageItems(currentPage, totalPages).map(({ key, item, isCurrent }) =>
          item === "gap" ? (
            <span
              key={key}
              aria-hidden="true"
              className="w-8 h-8 flex items-center justify-center text-neutral-400"
            >
              ...
            </span>
          ) : (
            <button
              key={key}
              type="button"
              aria-current={isCurrent ? "page" : undefined}
              className={`${PAGE_BUTTON} ${
                isCurrent
                  ? "border border-primary-600 bg-white text-primary-600 font-semibold shadow-sm"
                  : PAGE_IDLE
              }`}
            >
              {item}
            </button>
          ),
        )}

        <button
          type="button"
          aria-label="Go to next page"
          disabled={currentPage >= totalPages}
          className={`${PAGE_BUTTON} ${PAGE_IDLE} disabled:opacity-40`}
        >
          <ChevronRightIcon size={14} />
        </button>
      </div>
    </NavGroup>
  );
}

export function NavigationDemo({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${className}`}
    >
      <div className="flex items-center gap-8">
        <Logo size="compact" />
        <nav className="flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-small font-medium text-neutral-900 hover:text-primary-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex flex-wrap items-center gap-8 w-full lg:w-auto justify-between lg:justify-end">
        <Breadcrumbs />
        <Pagination />
      </div>
    </div>
  );
}
