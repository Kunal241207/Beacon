import Link from "next/link";
import {
  ArrowRightLongIcon,
  BarChartIcon,
  BellIcon,
  BookOpenIcon,
  BoltIcon,
  ChevronDownIcon,
  ClockIcon,
  ModulesIcon,
  PlayCircleIcon,
  SearchIcon,
  TargetPlayIcon,
  WaveformIcon,
  type IconProps,
} from "../ui/Icons";
import { Logo } from "../ui/Logo";
import { SearchInput } from "../ui/Input";
import { FEATURED_COURSES, type FeaturedCourse, type CourseThumbnail as ThumbnailKind } from "../../lib/courses";

const SUGGESTIONS = [
  "How does Next.js caching work?",
  "Explain Docker volumes",
  "What is a Kubernetes ingress?",
];

const FEATURES: {
  Icon: React.ComponentType<IconProps>;
  title: string;
  body: string;
}[] = [
  { Icon: SearchIcon, title: "Search in plain English", body: "Ask questions naturally. No keywords needed." },
  { Icon: TargetPlayIcon, title: "Jump to the exact moment", body: "Go straight to the part of the video that explains it." },
  { Icon: BookOpenIcon, title: "Learn across all courses", body: "Get results from everything in one place." },
  { Icon: BoltIcon, title: "Save time, learn faster", body: "Less searching, more learning." },
];

function Avatar() {
  return (
    <span className="flex h-10 w-10 items-end justify-center overflow-hidden rounded-full bg-neutral-200" aria-hidden="true">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="15.5" r="6.2" fill="#94A3B8" />
        <path d="M7.5 40c0-7.2 5.6-12.4 12.5-12.4S32.5 32.8 32.5 40H7.5z" fill="#94A3B8" />
        <path d="M12.4 12.2c0-4.6 3.4-8 7.6-8s7.6 3.4 7.6 8c0 1-1.6.4-3.2-.2-1.4-.5-3-.8-4.4-.8-2.6 0-5 1.6-6.2 1.6-.8 0-1.4-.2-1.4-.6z" fill="#334155" />
      </svg>
    </span>
  );
}

function Header() {
  return (
    <header className="px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center rounded-xl border border-neutral-200 bg-white px-4 shadow-sm sm:px-7 lg:h-20">
        <Link href="/" aria-label="Beacon home" className="shrink-0 rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">
          <Logo size="header" />
        </Link>
        <nav aria-label="Primary" className="ml-5 flex items-center gap-5 sm:ml-8 sm:gap-8 lg:ml-14">
          <Link href="/courses" className="text-small font-medium text-neutral-700 transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">Courses</Link>
          <Link href="/my-learning" className="whitespace-nowrap text-small font-medium text-neutral-700 transition-colors hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">My Learning</Link>
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-4" aria-label="Account" title="Account">
          <span className="relative inline-flex shrink-0 text-neutral-700">
            <BellIcon size={20} />
            <span className="absolute -right-0.5 -top-0.5 h-[7px] w-[7px] rounded-full bg-error ring-2 ring-white" />
          </span>
          <span className="hidden sm:inline-flex"><Avatar /></span>
          <ChevronDownIcon size={16} className="hidden text-neutral-500 sm:block" />
        </div>
      </div>
    </header>
  );
}

function FloatCard({ Icon, children, className, rotate, width }: { Icon: React.ComponentType<IconProps>; children: React.ReactNode; className: string; rotate: string; width: string }) {
  return (
    <div className={`absolute flex items-center gap-3 rounded-md border border-neutral-100 bg-white px-4 py-3.5 shadow-lg ${width} ${className}`} style={{ transform: `rotate(${rotate})` }}>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white"><Icon size={21} /></span>
      <span className="font-display text-[15px] font-medium leading-snug text-neutral-900">{children}</span>
    </div>
  );
}

function HeroArt() {
  return (
    <div className="relative aspect-square w-full" aria-hidden="true">
      <div className="absolute inset-[12%] rotate-[8deg] rounded-xl bg-primary-100" />
      <div className="absolute inset-[12%] translate-x-[8%] translate-y-[10%] rotate-[8deg] rounded-xl bg-primary-200/70" />
      <div className="absolute inset-[12%] translate-x-[16%] translate-y-[20%] rotate-[8deg] rounded-xl bg-primary-100" />
      <FloatCard Icon={PlayCircleIcon} className="left-[25%] top-[9%] z-30" rotate="-6deg" width="w-[56%]">Jump to the<br />exact moment</FloatCard>
      <FloatCard Icon={SearchIcon} className="left-[2%] top-[39%] z-20" rotate="-3deg" width="w-[55%]">Plain language<br />search</FloatCard>
      <FloatCard Icon={WaveformIcon} className="left-[52%] top-[63%] z-20" rotate="6deg" width="w-[43%]">Real learning,<br />faster</FloatCard>
    </div>
  );
}

function Hero() {
  return (
    <section className="px-4 pb-10 pt-12 sm:px-6 lg:px-8 lg:pb-14 lg:pt-16">
      <div className="mx-auto grid max-w-[1200px] items-center lg:grid-cols-2">
        <div className="relative z-10">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1.5 text-label font-bold uppercase tracking-[0.12em] text-primary-600">Intelligent Learning</span>
          <h1 className="mt-5 font-display text-[38px] font-bold leading-[1.08] tracking-[-0.03em] text-neutral-900 sm:text-[46px] lg:text-[52px] xl:text-[56px]">Search what you want.<br /><span className="text-primary-600">Learn right there.</span></h1>
          <p className="mt-5 max-w-[480px] text-body-lg leading-normal text-neutral-500">Beacon understands what you want to learn and finds the exact lessons across all your courses.</p>
          <form action="/search" method="get" className="mt-8 max-w-[730px]">
            <label htmlFor="home-search" className="sr-only">Search your courses</label>
            <SearchInput id="home-search" name="q" size="lg" placeholder="Ask anything about your learning..." className="border-primary-300 shadow-sm" />
          </form>
          <div className="mt-4 flex max-w-[730px] flex-wrap gap-3">
            {SUGGESTIONS.map((suggestion) => <Link key={suggestion} href={`/search?q=${encodeURIComponent(suggestion)}`} className="inline-flex rounded-md border border-neutral-200 bg-white px-4 py-2 text-small text-neutral-700 shadow-sm transition-colors hover:border-primary-300 hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">{suggestion}</Link>)}
          </div>
        </div>
        <div className="hidden lg:block"><HeroArt /></div>
      </div>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="border-y border-neutral-100 bg-white/80 px-4 py-12 sm:px-6 lg:px-8 lg:border-y-0 lg:py-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-y-0">
        {FEATURES.map(({ Icon, title, body }, index) => <div key={title} className={`flex flex-col items-center px-2 text-center sm:px-4 ${index > 0 ? "lg:border-l lg:border-neutral-200 lg:pl-8" : ""}`}><span className="flex h-12 w-12 items-center justify-center rounded-md bg-primary-100 text-primary-600"><Icon size={24} /></span><h3 className="mt-4 text-[17px] font-bold leading-snug text-neutral-900 lg:text-[18px]">{title}</h3><p className="mt-2 max-w-[220px] text-small leading-relaxed text-neutral-500">{body}</p></div>)}
      </div>
    </section>
  );
}

function NextjsMark() { return <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-black/70"><span className="font-display text-[28px] font-bold text-white">N</span></span>; }
function TypescriptMark() { return <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-[#0B4F91]/80"><span className="font-display text-[22px] font-bold text-white">TS</span></span>; }
function DockerMark() { return <span className="text-white"><svg width="84" height="84" viewBox="0 0 84 84" fill="none"><g fill="currentColor"><rect x="24" y="40" width="9" height="8" rx="1.2" /><rect x="35" y="40" width="9" height="8" rx="1.2" /><rect x="46" y="40" width="9" height="8" rx="1.2" /><rect x="35" y="30" width="9" height="8" rx="1.2" /><rect x="46" y="30" width="9" height="8" rx="1.2" /><rect x="46" y="20" width="9" height="8" rx="1.2" /></g><path d="M14 52h48c0 8-6.5 13-15 13H29c-8.5 0-15-5-15-13z" fill="currentColor" /><path d="M64 47c3.5-3 9-3 12 0-1.5 3.5-5 5-8.5 4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" fill="none" /></svg></span>; }

const THUMBNAILS: Record<ThumbnailKind, { background: string; Mark: () => React.JSX.Element }> = {
  nextjs: { background: "bg-gradient-to-br from-neutral-900 via-[#111827] to-black", Mark: NextjsMark },
  docker: { background: "bg-gradient-to-br from-[#1768D8] via-[#1254B8] to-[#093B8E]", Mark: DockerMark },
  typescript: { background: "bg-gradient-to-br from-[#1265C5] via-[#0B58B4] to-[#084391]", Mark: TypescriptMark },
};

function CourseThumbnail({ course }: { course: FeaturedCourse }) {
  const { background, Mark } = THUMBNAILS[course.thumbnail];
  return <div className={`relative aspect-video overflow-hidden rounded-md ${background}`}><div className="absolute inset-0 opacity-40" style={{ backgroundImage: "linear-gradient(115deg, rgba(255,255,255,0.16), transparent 55%)" }} /><svg className="absolute inset-x-0 bottom-0 w-full" viewBox="0 0 400 120" preserveAspectRatio="none" fill="none"><path d="M0 74c56-26 104-26 152 0s96 26 152 0 96-22 96-22v68H0z" fill="rgba(255,255,255,0.07)" /><path d="M0 96c60-24 108-22 156 4s100 20 148-6 96-14 96-14v40H0z" fill="rgba(255,255,255,0.05)" /></svg><div className="absolute inset-0 flex items-center justify-center"><Mark /></div><span className="absolute right-3 top-3 rounded-full bg-neutral-900/70 px-3 py-1 text-label font-medium text-white backdrop-blur-sm">{course.lessonCount} lessons</span></div>;
}

function CourseCard({ course }: { course: FeaturedCourse }) {
  return <article className="group flex flex-col rounded-md border border-neutral-200 bg-white p-2.5 shadow-sm transition-shadow hover:shadow-md"><CourseThumbnail course={course} /><div className="flex flex-1 flex-col px-2.5 pb-1 pt-4"><h3 className="text-[17px] font-bold leading-snug text-neutral-900"><Link href={`/courses/${course.slug}`} className="rounded-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 after:absolute after:inset-0">{course.title}</Link></h3><p className="mt-1.5 text-small leading-relaxed text-neutral-500">{course.summary}</p><div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-label font-medium text-neutral-500"><span className="inline-flex items-center gap-1.5"><BarChartIcon size={13} />{course.level}</span><span className="inline-flex items-center gap-1.5"><ClockIcon size={13} />{course.duration}</span><span className="inline-flex items-center gap-1.5"><ModulesIcon size={13} />{course.moduleCount} modules</span></div><div className="mt-4 flex justify-end border-t border-neutral-100 pt-3"><ArrowRightLongIcon size={18} className="text-neutral-900 transition-transform group-hover:translate-x-1" /></div></div></article>;
}

function FeaturedCourses() {
  return <section aria-labelledby="featured-courses-heading" className="px-4 pb-20 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-16"><div className="mx-auto max-w-[1200px]"><div className="flex flex-wrap items-end justify-between gap-4"><div><h2 id="featured-courses-heading" className="text-h1 font-bold tracking-tight text-neutral-900">Featured Courses</h2><p className="mt-1 text-small text-neutral-500">Start learning with our most popular courses.</p></div><Link href="/courses" className="inline-flex items-center gap-1.5 text-small font-semibold text-primary-600 transition-colors hover:text-primary-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2">View all courses<ArrowRightLongIcon size={16} /></Link></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{FEATURED_COURSES.map((course) => <CourseCard key={course.id} course={course} />)}</div></div></section>;
}

export function HomePage() {
  return <div className="relative isolate min-h-screen overflow-hidden bg-white"><div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true"><div className="absolute -right-32 -top-44 h-[520px] w-[520px] rounded-full bg-primary-100/70 blur-3xl" /><div className="absolute -bottom-72 -left-32 h-[500px] w-[760px] rounded-[50%] bg-primary-100/60 blur-2xl" /><div className="absolute -bottom-80 right-[-100px] h-[440px] w-[700px] rotate-[-12deg] rounded-[50%] bg-primary-200/40 blur-2xl" /></div><Header /><main><Hero /><FeatureStrip /><FeaturedCourses /></main></div>;
}