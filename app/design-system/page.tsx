import React from "react";
import { Logo } from "../components/ui/Logo";
import {
  HomeIcon,
  HomeFilledIcon,
  SearchIcon,
  SearchFilledIcon,
  PlayCircleIcon,
  PlayCircleFilledIcon,
  FileTextIcon,
  FileTextFilledIcon,
  BookmarkIcon,
  BookmarkFilledIcon,
  BarChartIcon,
  BarChartFilledIcon,
  ClockIcon,
  ClockFilledIcon,
  UserIcon,
  UserFilledIcon,
  SettingsIcon,
  SettingsFilledIcon,
  ClarityIcon,
  ConsistencyIcon,
  FocusCalmIcon,
  AccessibleIcon,
  IconProps,
} from "../components/ui/Icons";
import { Button, ButtonState, ButtonVariant } from "../components/ui/Button";
import { SearchInput, Select } from "../components/ui/Input";
import { Badge, StatusIndicator } from "../components/ui/Badge";
import { ProgressBar } from "../components/ui/ProgressBar";
import {
  CourseCard,
  LessonVideoCard,
  LessonTextCard,
  ResourceCard,
} from "../components/ui/Cards";
import { NavigationDemo } from "../components/ui/Navigation";

type Swatch = { name: string; hex: string; bg: string; outlined?: boolean };

const PRIMARY: Swatch[] = [
  { name: "Primary 600", hex: "#4F46E5", bg: "bg-primary-600" },
  { name: "Primary 500", hex: "#6366F1", bg: "bg-primary-500" },
  { name: "Primary 400", hex: "#818CF8", bg: "bg-primary-400" },
  { name: "Primary 300", hex: "#A5B4FC", bg: "bg-primary-300" },
  { name: "Primary 200", hex: "#C7D2FE", bg: "bg-primary-200" },
  { name: "Primary 100", hex: "#EEF2FF", bg: "bg-primary-100" },
];

const NEUTRAL: Swatch[] = [
  { name: "Neutral 900", hex: "#0F172A", bg: "bg-neutral-900" },
  { name: "Neutral 800", hex: "#1E293B", bg: "bg-neutral-800" },
  { name: "Neutral 700", hex: "#334155", bg: "bg-neutral-700" },
  { name: "Neutral 500", hex: "#64748B", bg: "bg-neutral-500" },
  { name: "Neutral 300", hex: "#CBD5E1", bg: "bg-neutral-300" },
  { name: "Neutral 200", hex: "#E2E8F0", bg: "bg-neutral-200" },
  { name: "Neutral 100", hex: "#F1F5F9", bg: "bg-neutral-100" },
  { name: "Neutral 50", hex: "#F8FAFC", bg: "bg-neutral-50" },
  { name: "White", hex: "#FFFFFF", bg: "bg-white", outlined: true },
];

const SEMANTIC: Swatch[] = [
  { name: "Success", hex: "#10B981", bg: "bg-success" },
  { name: "Error", hex: "#EF4444", bg: "bg-error" },
  { name: "Warning", hex: "#F59E0B", bg: "bg-warning" },
  { name: "Info", hex: "#3B82F6", bg: "bg-info" },
  { name: "Accent", hex: "#8B5CF6", bg: "bg-accent" },
];

const TYPEFACES = [
  {
    name: "Satoshi",
    className: "font-display",
    traits: ["Modern", "Clean", "Highly legible"],
  },
  {
    name: "Plus Jakarta Sans",
    className: "font-sans",
    traits: ["Friendly", "Versatile", "UI & Product"],
  },
];

const TYPE_SCALE = [
  { style: "Display 1", font: "Satoshi", size: "60 / 72", weight: "700", use: "Hero titles" },
  { style: "Display 2", font: "Satoshi", size: "48 / 56", weight: "700", use: "Section titles" },
  { style: "Heading 1", font: "Plus Jakarta Sans", size: "32 / 40", weight: "700", use: "Page titles" },
  { style: "Heading 2", font: "Plus Jakarta Sans", size: "24 / 32", weight: "600", use: "Card titles" },
  { style: "Heading 3", font: "Plus Jakarta Sans", size: "20 / 28", weight: "600", use: "Section titles" },
  { style: "Body Large", font: "Plus Jakarta Sans", size: "18 / 26", weight: "500", use: "Body copy" },
  { style: "Body", font: "Plus Jakarta Sans", size: "16 / 24", weight: "400", use: "Supporting text" },
  { style: "Small", font: "Plus Jakarta Sans", size: "14 / 20", weight: "400", use: "Captions, meta" },
];

const SPACING = [4, 8, 12, 16, 24, 32, 40, 48, 64];

const RADII = [
  { size: "4px", name: "(xs)", className: "rounded-xs" },
  { size: "8px", name: "(sm)", className: "rounded-sm" },
  { size: "12px", name: "(md)", className: "rounded-md" },
  { size: "16px", name: "(lg)", className: "rounded-lg" },
  { size: "24px", name: "(xl)", className: "rounded-xl" },
  { size: "Full", name: "(circle)", className: "rounded-full" },
];

const SHADOWS = [
  { name: "Sm", css: "0 1px 2px 0\nrgba(15, 23, 42, 0.05)", className: "shadow-sm" },
  { name: "Md", css: "0 4px 12px -2px\nrgba(15, 23, 42, 0.08)", className: "shadow-md" },
  { name: "Lg", css: "0 12px 24px -4px\nrgba(15, 23, 42, 0.10)", className: "shadow-lg" },
  { name: "Xl", css: "0 20px 40px -8px\nrgba(15, 23, 42, 0.12)", className: "shadow-xl" },
];

const ICON_SETS: { label: string; icons: React.ComponentType<IconProps>[] }[] = [
  {
    label: "Outline Style",
    icons: [HomeIcon, SearchIcon, PlayCircleIcon, FileTextIcon, BookmarkIcon, BarChartIcon, ClockIcon, UserIcon, SettingsIcon],
  },
  {
    label: "Filled Style",
    icons: [HomeFilledIcon, SearchFilledIcon, PlayCircleFilledIcon, FileTextFilledIcon, BookmarkFilledIcon, BarChartFilledIcon, ClockFilledIcon, UserFilledIcon, SettingsFilledIcon],
  },
];

const ICON_SPECS = [
  "24×24px grid",
  "2px stroke width (outline)",
  "Rounded line caps and joins",
  "Consistent optical balance",
];

const BUTTON_SPECS = [
  "Height: 44px (default)",
  "Padding: 0 16px (lg), 0 12px (md)",
  "Radius: 12px",
  "Font: Plus Jakarta Sans Medium (14–16px)",
];

const FIELD_SPECS = [
  "Height: 44px",
  "Radius: 12px",
  "Border: 1px solid #E2E8F0",
  "Padding: 0 16px",
  "Focus: Border color #6366F1",
];

const BUTTON_VARIANTS: { variant: ButtonVariant; label: string; cta: string }[] = [
  { variant: "primary", label: "Primary", cta: "Get Started" },
  { variant: "secondary", label: "Secondary", cta: "Explore Courses" },
  { variant: "tertiary", label: "Tertiary", cta: "View Lesson" },
  { variant: "text", label: "Text", cta: "Watch Video →" },
];

const BUTTON_STATES: { state: ButtonState; label: string }[] = [
  { state: "default", label: "Default" },
  { state: "hover", label: "Hover" },
  { state: "disabled", label: "Disabled" },
];

const CARDS = [
  { label: "Course Card", node: <CourseCard /> },
  { label: "Lesson Card (Video)", node: <LessonVideoCard /> },
  { label: "Lesson Card (Text)", node: <LessonTextCard /> },
  { label: "Resource Card", node: <ResourceCard /> },
];

const PRINCIPLES = [
  { Icon: ClarityIcon, title: "Clarity First", body: "Every element should communicate clearly." },
  { Icon: ConsistencyIcon, title: "Consistency", body: "Use components and patterns consistently across the platform." },
  { Icon: FocusCalmIcon, title: "Focus & Calm", body: "Remove noise and help learners focus on what matters." },
  { Icon: AccessibleIcon, title: "Accessible", body: "Design with accessibility and inclusivity in mind." },
];

function Panel({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <section className={`ds-panel ${className}`}>{children}</section>;
}

function SectionHeader({
  number,
  title,
  className = "mb-4",
}: {
  number: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <span className="ds-eyebrow text-primary-600">{number}</span>
      <h2 className="ds-eyebrow text-neutral-900">{title}</h2>
    </div>
  );
}

function Label({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`ds-label ${className}`}>{children}</p>;
}

function Caption({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`ds-caption ${className}`}>{children}</p>;
}

function SpecList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="pt-3">
      <Label className="mb-1.5">{title}</Label>
      <ul className="list-disc pl-4 space-y-1 text-caption text-neutral-500 leading-relaxed">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function Swatches({ title, colors, className }: { title: string; colors: Swatch[]; className: string }) {
  return (
    <div>
      <Label className="mb-1.5">{title}</Label>
      <div className={`grid gap-2.5 ${className}`}>
        {colors.map((color) => (
          <div key={color.name} className="space-y-1">
            <div
              className={`h-8.5 w-full rounded-md ${color.bg} ${color.outlined ? "border border-neutral-200" : "shadow-sm"}`}
            />
            <div className="text-caption font-medium text-neutral-700 leading-tight truncate">
              {color.name}
            </div>
            <div className="text-caption text-neutral-500 leading-tight">
              {color.hex}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Dot({ className = "bg-primary-600" }: { className?: string }) {
  return <span className={`w-1 h-1 rounded-full shrink-0 ${className}`} />;
}

export default function DesignSystemPage() {
  return (
    <main className="min-h-screen bg-neutral-50 py-6 px-3 sm:px-5 lg:px-6">
      <div className="max-w-340 mx-auto space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <Panel className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Logo className="mb-5" />
              <p className="ds-eyebrow text-neutral-500 mb-1.5">Design System</p>
              <h1 className="font-display text-[32px] sm:text-[36px] font-bold text-neutral-900 leading-[1.08] tracking-[-0.03em] mb-3">
                Search
                <br />
                what you want.
                <br />
                Learn right there.
              </h1>
              <p className="max-w-sm text-meta text-neutral-500 leading-normal">
                A unified design language for Beacon — a learning platform where
                you can search in plain language and jump directly to the moment
                that matters.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-6 text-micro font-bold tracking-wider text-neutral-500">
              <span>VERSION 1.0</span>
              <Dot className="bg-primary-600 w-1.5 h-1.5" />
              <span>AUG 2025</span>
            </div>
          </Panel>

          <Panel className="lg:col-span-8 flex flex-col">
            <SectionHeader number="01" title="COLORS" />
            <div className="space-y-3.5 my-auto">
              <Swatches title="Primary" colors={PRIMARY} className="grid-cols-3 sm:grid-cols-6" />
              <Swatches title="Neutral" colors={NEUTRAL} className="grid-cols-3 sm:grid-cols-5 lg:grid-cols-9" />
              <Swatches title="Semantic" colors={SEMANTIC} className="grid-cols-3 sm:grid-cols-5 max-w-lg" />
            </div>
          </Panel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <Panel className="lg:col-span-5 flex flex-col">
            <SectionHeader number="02" title="TYPOGRAPHY" />
            <div className="my-auto py-1 space-y-10">
              {TYPEFACES.map((face) => (
                <div key={face.name} className="flex items-center gap-5">
                  <span
                    className={`w-16 text-center text-[52px] font-bold text-neutral-900 leading-none select-none ${face.className}`}
                  >
                    Aa
                  </span>
                  <div>
                    <h3
                      className={`text-h3 font-bold text-neutral-900 leading-tight ${face.className}`}
                    >
                      {face.name}
                    </h3>
                    <p className="flex items-center gap-2 mt-0.5 text-caption text-neutral-500">
                      {face.traits.map((trait, i) => (
                        <React.Fragment key={trait}>
                          {i > 0 && <Dot />}
                          <span>{trait}</span>
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="lg:col-span-7">
            <SectionHeader number="03" title="TYPE SCALE" />
            <div className="overflow-x-auto">
              <table className="w-full text-left text-caption">
                <thead>
                  <tr className="text-caption text-neutral-500">
                    {["Style", "Font", "Size / Line Height", "Weight", "Use"].map((head) => (
                      <th key={head} className="pb-2 font-normal">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-neutral-500">
                  {TYPE_SCALE.map((row) => (
                    <tr key={row.style}>
                      <td className="py-1.5 pr-3 font-bold text-neutral-900">{row.style}</td>
                      <td className="py-1.5 pr-3">{row.font}</td>
                      <td className="py-1.5 pr-3">{row.size}</td>
                      <td className="py-1.5 pr-3">{row.weight}</td>
                      <td className="py-1.5">{row.use}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Panel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <Panel className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <SectionHeader number="04" title="SPACING SYSTEM" />
              <Label className="-mt-2.5 mb-4">Base unit: 4px</Label>
            </div>
            <div className="flex items-end justify-between gap-1.5 overflow-x-auto pb-1 pt-2">
              {SPACING.map((px) => (
                <div key={px} className="flex flex-col items-center gap-1.5 shrink-0 text-center">
                  <div
                    style={{ width: px, height: px }}
                    className="rounded-[6px] bg-primary-200"
                  />
                  <div className="mt-0.5">
                    <span className="block text-caption font-bold text-neutral-900">{px}</span>
                    <span className="block text-caption text-neutral-500">({px / 16}rem)</span>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="lg:col-span-6 space-y-4">
            <SectionHeader number="05" title="RADIUS & SHADOWS" />

            <div>
              <Label className="mb-2">Radius</Label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5 text-center">
                {RADII.map((radius) => (
                  <div key={radius.size} className="space-y-1">
                    <div
                      className={`w-8 h-8 mx-auto bg-white border border-neutral-300 ${radius.className}`}
                    />
                    <span className="block text-caption text-neutral-700 leading-tight">
                      {radius.size}
                    </span>
                    <span className="block text-caption text-neutral-500 leading-tight">
                      {radius.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="mb-2">Shadows</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {SHADOWS.map((shadow) => (
                  <div
                    key={shadow.name}
                    className={`p-2.5 rounded-md bg-white border border-neutral-200/80 ${shadow.className}`}
                  >
                    <div className="mb-0.5 text-caption font-bold text-neutral-900">
                      {shadow.name}
                    </div>
                    <div className="text-caption text-neutral-500 leading-tight whitespace-pre-line">
                      {shadow.css}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Panel>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          <Panel className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <SectionHeader number="06" title="ICONS" />
              {ICON_SETS.map((set) => (
                <div key={set.label} className="mb-3.5 last:mb-4">
                  <Label className="mb-2.5">{set.label}</Label>
                  <div className="flex items-center justify-between px-1 text-neutral-900">
                    {set.icons.map((Icon, index) => (
                      <Icon key={index} size={19} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <SpecList title="Icon Specs" items={ICON_SPECS} />
          </Panel>

          <Panel className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <SectionHeader number="07" title="BUTTONS" />
              <div className="overflow-x-auto pb-1">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-caption text-neutral-500">
                      <th className="pb-1.5 w-14 font-normal" />
                      {BUTTON_VARIANTS.map((column) => (
                        <th key={column.variant} className="pb-1.5 px-1.5 font-normal">
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {BUTTON_STATES.map((row) => (
                      <tr key={row.state}>
                        <td className="py-2.5 pr-2 text-caption font-semibold text-neutral-900">
                          {row.label}
                        </td>
                        {BUTTON_VARIANTS.map((column) => (
                          <td key={column.variant} className="py-2.5 px-1.5">
                            <Button
                              variant={column.variant}
                              size="md"
                              forceState={row.state}
                            >
                              {column.cta}
                            </Button>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <SpecList title="Button Specs" items={BUTTON_SPECS} />
          </Panel>

          <Panel className="lg:col-span-3 flex flex-col justify-between">
            <div className="space-y-3">
              <SectionHeader number="08" title="INPUTS" />
              <div>
                <Label className="mb-1.5">Search Input</Label>
                <SearchInput />
              </div>
              <div>
                <Label className="mb-1.5">Select</Label>
                <Select />
              </div>
            </div>
            <SpecList title="Field Specs" items={FIELD_SPECS} />
          </Panel>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <Panel>
            <SectionHeader number="09" title="BADGES / TAGS" />
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <Badge variant="video" />
              <Badge variant="lesson" />
              <Badge variant="popular" />
              <Badge variant="new" />
            </div>
          </Panel>

          <Panel>
            <SectionHeader number="10" title="STATUS / INDICATORS" />
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <StatusIndicator status="in-progress" />
              <StatusIndicator status="completed" />
              <StatusIndicator status="not-started" />
              <StatusIndicator status="error" />
            </div>
          </Panel>

          <Panel>
            <SectionHeader number="11" title="PROGRESS BAR" />
            <div className="pt-2">
              <ProgressBar value={35} />
            </div>
          </Panel>
        </div>

        <Panel>
          <SectionHeader number="12" title="CARDS" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARDS.map((card) => (
              <div key={card.label} className="space-y-1.5">
                <Caption>{card.label}</Caption>
                {card.node}
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <SectionHeader number="13" title="NAVIGATION" />
          <NavigationDemo />
        </Panel>

        <Panel>
          <div className="flex flex-col lg:flex-row lg:items-center gap-5">
            <SectionHeader number="14" title="PRINCIPLES" className="lg:w-44 shrink-0" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 flex-1">
              {PRINCIPLES.map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <Icon className="shrink-0 mt-0.5 text-neutral-900" />
                  <div>
                    <h4 className="text-small font-bold text-neutral-900 leading-snug">
                      {title}
                    </h4>
                    <p className="mt-0.5 text-label text-neutral-500 leading-relaxed">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </main>
  );
}
