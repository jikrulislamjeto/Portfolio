
import Link from "next/link";

import {
  ArrowRight,
  Braces,
  BrainCircuit,
} from "lucide-react";

import problemSolving from "@/data/problem-solving.json";

export default function ProblemSolvingPreview() {
  return (
    <section
      id="problem-solving"
      aria-labelledby="problem-solving-heading"
      className="scroll-mt-24 border-t border-border bg-surface/30 py-24 sm:py-32"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-3xl text-center">
          {/* SECTION INTRO */}
          <p className="mb-3 font-mono text-sm text-accent">
            Beyond Development
          </p>

          <h2
            id="problem-solving-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Think.
            <br />
            Solve.
            <br />
            <span className="text-accent">Improve.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted">
            {problemSolving.intro}
          </p>

          {/* LEARNING AREAS */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
              <Braces
                size={16}
                className="text-accent"
                aria-hidden="true"
              />
              C++
            </span>

            <span className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs font-medium text-muted">
              <BrainCircuit
                size={16}
                className="text-accent"
                aria-hidden="true"
              />
              Data Structures &amp; Algorithms
            </span>
          </div>

          {/* EXPLORE BUTTON */}
          <Link
            href="/problem-solving"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Explore My Journey
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
