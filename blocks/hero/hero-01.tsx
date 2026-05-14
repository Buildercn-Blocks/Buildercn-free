import { ArrowRight } from "lucide-react";

export default function Hero01() {
  return (
    <section className="relative overflow-hidden bg-background py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-gradient-to-br from-primary/15 via-primary/5 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
          New Release — v2.0
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Build beautiful interfaces in minutes
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          A premium collection of copy-paste components built with React and
          Tailwind CSS. Ship polished products faster than ever before.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center rounded-full border border-border px-8 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            View Components
          </a>
        </div>
      </div>
    </section>
  );
}
