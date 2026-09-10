import React from "react";
import {
  BarChartIcon,
  ClockIcon,
  ModulesIcon,
  FileTextIcon,
  ExternalLinkIcon,
} from "./Icons";

function CardShell({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`flex flex-col justify-between h-full p-4 sm:p-4.5 rounded-md bg-white border border-neutral-200 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      {children}
    </article>
  );
}

function CardFooter({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex items-center pt-2.5 text-label font-medium text-neutral-500 ${className}`}
    >
      {children}
    </div>
  );
}

function CardTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block mb-2 px-2 py-0.5 rounded-xs bg-primary-100 text-primary-600 text-micro font-bold uppercase tracking-wider">
      {children}
    </span>
  );
}

function CardTitle({
  className = "mb-1.5",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h4 className={`text-[15px] font-bold text-neutral-900 leading-snug ${className}`}>
      {children}
    </h4>
  );
}

function CardText({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`text-caption text-neutral-500 leading-relaxed mb-4 ${className}`}>
      {children}
    </p>
  );
}

function CardLink({
  href,
  className = "",
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-1.5 font-semibold text-primary-600 hover:text-primary-800 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

const META_ICONS = {
  level: BarChartIcon,
  duration: ClockIcon,
  modules: ModulesIcon,
} as const;

export function CourseCard({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modules = "12 modules",
  className = "",
}: {
  title?: string;
  description?: string;
  level?: string;
  duration?: string;
  modules?: string;
  className?: string;
}) {
  const meta = { level, duration, modules };

  return (
    <CardShell className={className}>
      <div>
        <div className="w-8 h-8 mb-2.5 rounded-[6px] bg-black text-white flex items-center justify-center text-sm font-bold select-none">
          N
        </div>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </div>

      <CardFooter className="gap-3">
        {(Object.keys(META_ICONS) as (keyof typeof META_ICONS)[]).map((key) => {
          const Icon = META_ICONS[key];
          return (
            <span key={key} className="inline-flex items-center gap-1">
              <Icon size={13} />
              {meta[key]}
            </span>
          );
        })}
      </CardFooter>
    </CardShell>
  );
}

export function LessonVideoCard({
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonLabel = "Lesson 5.1",
  duration = "12:45",
  seekTimestamp = "12:45",
  className = "",
}: {
  title?: string;
  description?: string;
  lessonLabel?: string;
  duration?: string;
  seekTimestamp?: string;
  className?: string;
}) {
  return (
    <CardShell className={className}>
      <div>
        <CardTag>Video</CardTag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </div>

      <CardFooter className="justify-between">
        <span>
          {lessonLabel} · {duration}
        </span>
        <CardLink href={`#watch-${seekTimestamp}`}>
          <span className="w-3.5 h-3.5 rounded-full bg-primary-600 text-white flex items-center justify-center">
            <svg
              width="7"
              height="7"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="ml-0.5"
            >
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          </span>
          Watch from {seekTimestamp}
        </CardLink>
      </CardFooter>
    </CardShell>
  );
}

export function LessonTextCard({
  title = "Data Fetching & Caching",
  description = "Explore different fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleLabel = "Module 5",
  className = "",
}: {
  title?: string;
  description?: string;
  moduleLabel?: string;
  className?: string;
}) {
  return (
    <CardShell className={className}>
      <div>
        <CardTag>Lesson</CardTag>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </div>

      <CardFooter className="justify-between">
        <span>{moduleLabel}</span>
        <CardLink href="#lesson">View lesson →</CardLink>
      </CardFooter>
    </CardShell>
  );
}

export function ResourceCard({
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  format = "PDF",
  size = "1.2 MB",
  className = "",
}: {
  title?: string;
  description?: string;
  format?: string;
  size?: string;
  className?: string;
}) {
  return (
    <CardShell className={className}>
      <div>
        <div className="flex items-start gap-2 mb-1.5">
          <FileTextIcon size={18} className="shrink-0 mt-0.5 text-neutral-900" />
          <CardTitle className="">{title}</CardTitle>
        </div>
        <CardText className="pl-6">{description}</CardText>
      </div>

      <CardFooter className="justify-between pl-6">
        <span>
          {format} · {size}
        </span>
        <CardLink href="#download" aria-label={`Open ${title}`}>
          <ExternalLinkIcon size={14} />
        </CardLink>
      </CardFooter>
    </CardShell>
  );
}
