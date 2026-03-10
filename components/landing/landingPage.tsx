
import { ArrowRight, Bolt, CodeSquare } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const landingPage = () => {
    return (
        <div className="bg-[#0A0A0A]">
            {/* Hero Section */}
            <main className="pt-32 pb-24 md:pt-48 md:pb-32 px-6">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-300 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-300" />
                        </span>
                        Enrollment Open for Cohort 1
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tighter text-zinc-100 leading-[1.1] mb-6">
                        Execution over theory.
                        <br />
                        <span className="text-zinc-600">Ship your first MVP.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed mb-10 tracking-tight">
                        A beginner masterclass by Dalmas. Learn how to go from idea to MVP to
                        first users with the correct mentality, work ethic, and practical
                        execution skills.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link
                            href="/modules"
                            className="inline-flex items-center justify-center gap-2 bg-zinc-100 text-[#0A0A0A] px-6 py-3 rounded-full text-sm font-medium hover:bg-white transition-all"
                        >
                            Start Building
                            <ArrowRight width={18} />
                        </Link>
                        <a
                            href="#curriculum"
                            className="inline-flex items-center justify-center gap-2 bg-transparent border border-white/10 text-zinc-300 px-6 py-3 rounded-full text-sm font-medium hover:bg-white/5 transition-all"
                        >
                            View Curriculum
                        </a>
                    </div>
                </div>
            </main>
            {/* Core Philosophy */}
            <section
                id="philosophy"
                className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="mb-16 max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">
                            The Builder Philosophy
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                            Ideas are cheap; execution is the differentiator. This masterclass
                            prioritizes how real builders structure ideas, validate them quickly,
                            and learn from users.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors cursor-pointer">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-zinc-100 mb-6">
                                <Bolt width={20} />
                            </div>
                            <h3 className="text-base font-medium text-zinc-100 mb-2 tracking-tight">
                                Speed matters
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                The first version should be ugly but functional. Stop waiting for
                                perfection and start learning from real interactions immediately.
                            </p>
                        </div>
                        {/* Card 2 */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors cursor-pointer">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-zinc-100 mb-6">
                                <CodeSquare width={20} />
                            </div>
                            <h3 className="text-base font-medium text-zinc-100 mb-2 tracking-tight">
                                Execution over ideas
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Everyone has ideas. The differentiator is the daily discipline and
                                systems you build to allow consistent, high-quality output over
                                time.
                            </p>
                        </div>
                        {/* Card 3 */}
                        <div className="p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-colors cursor-pointer">
                            <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-zinc-100 mb-6">
                                <iconify-icon icon="solar:chat-round-check-linear" width={20} />
                            </div>
                            <h3 className="text-base font-medium text-zinc-100 mb-2 tracking-tight">
                                Learn from users
                            </h3>
                            <p className="text-sm text-zinc-500 leading-relaxed">
                                Your assumptions are likely wrong. Build the smallest functional
                                version of your product to solve the core problem and gather
                                feedback.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Curriculum */}
            <section id="curriculum" className="py-24 px-6 border-t border-white/5">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-100 mb-4">
                            Curriculum Architecture
                        </h2>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            A step-by-step process designed for beginner founders and developers.
                            From mindset to public launch.
                        </p>
                    </div>
                    <div className="flex flex-col border-t border-white/10">
                        {/* Section 1 */}
                        <div className="py-8 border-b border-white/5 flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer">
                            <div className="md:w-1/3 flex flex-col gap-2">
                                <span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                                    Section 1
                                </span>
                                <Link href="/modules/1">
                                    <h3 className="text-lg font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                                        The Builder Mindset
                                    </h3>
                                </Link>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                    Establish the mental model required to ship products consistently.
                                    Overcome fear and build a shipping culture.
                                </p>
                                <ul className="text-sm text-zinc-500 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        The Reality of Building Products
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Shipping Culture &amp; Iteration Cycles
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Execution Discipline &amp; Routines
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Overcoming Fear &amp; Resistance
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Section 2 */}
                        <div className="py-8 border-b border-white/5 flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer">
                            <div className="md:w-1/3 flex flex-col gap-2">
                                <span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                                    Section 2
                                </span>
                                <Link href="/modules/2">
                                    <h3 className="text-lg font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                                        Ideation
                                    </h3>
                                </Link>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                    Learn how to find viable product ideas, evaluate them using simple
                                    frameworks, and validate them before writing code.
                                </p>
                                <ul className="text-sm text-zinc-500 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Sources of Good Ideas
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Idea Evaluation Framework
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Bad Ideas to Avoid
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Validation Methods
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-white/2 border border-white/5 rounded-lg">
                                    <div className="text-xs font-medium text-zinc-300 mb-1">
                                        Exercise: Ideation
                                    </div>
                                    <div className="text-xs text-zinc-500">
                                        List 10 problems you experience weekly. Score them based on
                                        problem severity, market access, and build complexity.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Section 3 */}
                        <div className="py-8 border-b border-white/5 flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer">
                            <div className="md:w-1/3 flex flex-col gap-2">
                                <span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                                    Section 3
                                </span>
                                <Link href="/modules/3">
                                    <h3 className="text-lg font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                                        MVP Thinking
                                    </h3>
                                </Link>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                    Understand what an MVP actually is. Master the art of defining the
                                    core problem and aggressively cutting features.
                                </p>
                                <ul className="text-sm text-zinc-500 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        What an MVP is (and is NOT)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        MVP Design Framework (1 Problem, 1 User, 1 Action)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Feature Cutting Framework
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Section 4 */}
                        <div className="py-8 border-b border-white/5 flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer">
                            <div className="md:w-1/3 flex flex-col gap-2">
                                <span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                                    Section 4
                                </span>
                                <Link href="/modules/4">
                                    <h3 className="text-lg font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                                        Work Ethic
                                    </h3>
                                </Link>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                    Build consistent building habits. Learn how to structure your
                                    daily schedule to avoid burnout and maintain momentum.
                                </p>
                                <ul className="text-sm text-zinc-500 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Builder Work Cycles (1-4 weeks)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Daily Builder Schedule
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Consistency Over Intensity
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Section 5 */}
                        <div className="py-8 border-b border-white/5 flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer">
                            <div className="md:w-1/3 flex flex-col gap-2">
                                <span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                                    Section 5
                                </span>
                                <Link href="/modules/5">
                                    <h3 className="text-lg font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                                        Team Building
                                    </h3>
                                </Link>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                    Know when to build alone for speed, and when to bring in
                                    co-founders. Navigate early team dynamics effectively.
                                </p>
                                <ul className="text-sm text-zinc-500 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        When to Build Alone vs Add a Team
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Early Team Roles (Builder, Designer, Growth)
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Avoiding Early Team Mistakes
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Section 6 */}
                        <div className="py-8 border-b border-white/5 flex flex-col md:flex-row gap-6 md:gap-12 group cursor-pointer">
                            <div className="md:w-1/3 flex flex-col gap-2">
                                <span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                                    Section 6
                                </span>
                                <Link href="/resources">
                                    <h3 className="text-lg font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                                        Builder Resources
                                    </h3>
                                </Link>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                    A curated list of tools and platforms that accelerate MVP creation
                                    across development, UI, infrastructure, and analytics.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2.5 py-1 text-xs border border-white/10 rounded-md text-zinc-400">
                                        Next.js
                                    </span>
                                    <span className="px-2.5 py-1 text-xs border border-white/10 rounded-md text-zinc-400">
                                        Supabase
                                    </span>
                                    <span className="px-2.5 py-1 text-xs border border-white/10 rounded-md text-zinc-400">
                                        TailwindCSS
                                    </span>
                                    <span className="px-2.5 py-1 text-xs border border-white/10 rounded-md text-zinc-400">
                                        Vercel
                                    </span>
                                    <span className="px-2.5 py-1 text-xs border border-white/10 rounded-md text-zinc-400">
                                        Stripe
                                    </span>
                                    <span className="px-2.5 py-1 text-xs border border-white/10 rounded-md text-zinc-400">
                                        PostHog
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* Section 7 */}
                        <div className="py-8 flex flex-col md:flex-row gap-6 md:gap-12 group">
                            <div className="md:w-1/3 flex flex-col gap-2">
                                <span className="text-xs font-medium text-zinc-500 tracking-tight uppercase">
                                    Section 7
                                </span>
                                <h3 className="text-lg font-medium text-zinc-100 tracking-tight group-hover:text-white transition-colors">
                                    Shipping Your First MVP
                                </h3>
                            </div>
                            <div className="md:w-2/3">
                                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                                    The final step. Prepare for launch, utilize early distribution
                                    channels, get your first users, and collect meaningful feedback.
                                </p>
                                <ul className="text-sm text-zinc-500 space-y-2">
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Pre-launch Checklist
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Early Distribution Channels
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <iconify-icon
                                            icon="solar:check-circle-linear"
                                            className="text-zinc-700"
                                        />{" "}
                                        Getting First Users &amp; Collecting Feedback
                                    </li>
                                </ul>
                                <div className="mt-6 p-4 bg-white/2 border border-white/5 rounded-lg">
                                    <div className="text-xs font-medium text-zinc-300 mb-1">
                                        Exercise: The Launch
                                    </div>
                                    <div className="text-xs text-zinc-500">
                                        Publish your functional MVP to at least 3 communities and gather
                                        actionable feedback based on core questions.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Instructor Section */}
            <section
                id="instructor"
                className="py-24 px-6 border-t border-white/5 bg-[#0A0A0A]"
            >
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0 overflow-hidden">
                        <iconify-icon
                            icon="solar:user-linear"
                            width={48}
                            className="text-zinc-700"
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl font-medium tracking-tight text-zinc-100 mb-2">
                            Taught by Dalmas
                        </h2>
                        <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                            A masterclass built on practical experience, not untested theory.
                            Dalmas brings insights from building, shipping, and iterating real
                            products in the wild. Learn the exact frameworks used to transition
                            from a beginner builder to someone who ships consistently.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="text-zinc-500 hover:text-zinc-300 transition-colors"
                            >
                                <iconify-icon icon="solar:link-linear" width={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer */}
            <footer className="py-8 border-t border-white/5 px-6">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-zinc-100 font-medium tracking-tighter">MVP.</div>
                    <div className="text-xs text-zinc-600">
                        © 2024 Dalmas. MVP Building Masterclass.
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default landingPage