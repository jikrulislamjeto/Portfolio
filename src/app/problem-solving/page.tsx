
import type { Metadata } from "next";

import {
  BrainCircuit,
  Code2,
  Target,
} from "lucide-react";

import problemSolving from "@/data/problem-solving.json";

export const metadata: Metadata = {
  title: "Problem Solving Journey",
  description:
    "Explore my problem-solving journey, programming fundamentals, and learning interests in data structures and algorithms.",
};

export default function ProblemSolvingPage() {
  return (
    <main>
      {/* PAGE HEADER */}
      <section className="border-b border-border bg-surface/40">
        <div className="container-custom py-16 sm:py-20 lg:py-24">
          <p className="mb-4 font-mono text-sm text-accent">
            My Learning Journey
          </p>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Problem Solving
            <span className="text-accent">.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-muted sm:text-lg">
            {problemSolving.intro}
          </p>
        </div>
      </section>

      {/* PROGRAMMING JOURNEY */}
      <section className="py-20 sm:py-24">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="mb-3 font-mono text-sm text-accent">
                The Mindset
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Learning to think
                <br />
                more clearly
              </h2>

              <div className="mt-7 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <BrainCircuit size={25} aria-hidden="true" />
              </div>
            </div>

            <div className="space-y-6 text-base leading-8 text-muted sm:text-lg sm:leading-9">
              <p>{problemSolving.journey}</p>

              <p>{problemSolving.approach}</p>

              <p>
                I am working on strengthening my programming fundamentals,
                improving my logical thinking, and understanding how to
                approach problems step by step. My goal is to develop a
                stronger foundation in algorithms and write clear,
                efficient solutions as I continue learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="border-y border-border bg-surface/30 py-20 sm:py-24">
        <div className="container-custom">
          <div className="mb-10">
            <p className="mb-3 font-mono text-sm text-accent">
              Building Foundations
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What I Focus On
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              The core concepts I am learning to improve my
              problem-solving skills and programming knowledge.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {problemSolving.focusAreas.map((area, index) => (
              <article
                key={area.title}
                className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  {index === 0 ? (
                    <Code2 size={21} aria-hidden="true" />
                  ) : index === 1 ? (
                    <BrainCircuit size={21} aria-hidden="true" />
                  ) : (
                    <Target size={21} aria-hidden="true" />
                  )}
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted">
                  {area.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
