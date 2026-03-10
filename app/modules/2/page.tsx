'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle2, ChevronRight, PenTool, Award, Search, Target, Zap, ShieldAlert, Rocket } from 'lucide-react'
import Link from 'next/link'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from '@/lib/db'
import { toast } from 'sonner'

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

const lessons = [
    {
        id: 1,
        title: "Where Good Ideas Come From",
        duration: "15 min",
        objective: "Understand that good product ideas rarely come from brainstorming alone, but from observation and pain.",
        content: {
            sections: [
                {
                    title: "Personal Pain Points",
                    text: "Problems you experience frequently are the best source. Budgeting struggles, workflow inefficiencies, or developer gaps.",
                    quote: "\"I wish this tool existed.\""
                },
                {
                    title: "Work Problems",
                    text: "Software built to solve workplace inefficiencies. Reporting dashboards, automation tools, or integrations."
                },
                {
                    title: "Observing Others & Communities",
                    text: "Watch how people struggle with manual processes like spreadsheets. Look for repeated complaints in Reddit, Discord, and forums."
                }
            ],
            exercise: {
                title: "Pain Point Hunt",
                instruction: "List 3 frustrations you or someone you know had this week. Could any be a product?",
                placeholder: "1. Frustrated with... \n2. My colleague struggled with...\n3. It took me too long to..."
            }
        }
    },
    {
        id: 2,
        title: "Identifying Real Problems",
        duration: "10 min",
        objective: "Differentiate between 'cool technology looking for a problem' and 'clear problems looking for a solution'.",
        content: {
            sections: [
                {
                    title: "The Idea Structure",
                    text: "A strong idea solves a frequent, painful problem for clear users. Avoid building something just because the tech is 'cool'.",
                    metric: "Problem First > Solution First"
                },
                {
                    title: "Problem Discovery Questions",
                    text: "Who experiences this? How often? How painful is it? How do people solve it today (manual workarounds)?"
                }
            ],
            exercise: {
                title: "Problem Definition",
                instruction: "Pick one of your ideas and define the core problem in one sentence.",
                placeholder: "The problem is that [User Group] struggles with [Action] resulting in [Negative Outcome]..."
            }
        }
    },
    {
        id: 3,
        title: "Idea Evaluation Framework",
        duration: "15 min",
        objective: "Learn to score and prioritize ideas based on severity, access, complexity, and monetization.",
        content: {
            sections: [
                {
                    title: "The Four Factors",
                    text: "Score each from 1-10: Problem Severity (Pain), Market Access (Ease of reaching users), Build Complexity (Speed to v1), and Monetization (Revenue potential).",
                },
                {
                    title: "Prioritization",
                    text: "Total scores help you choose objectively. Don't build what you love; build what solves the most pain with the least friction.",
                }
            ],
            exercise: {
                title: "Score Your Idea",
                instruction: "Evaluate your top idea (1-10): Pain, Access, Build Speed, Revenue.",
                placeholder: "Pain: /10\nAccess: /10\nBuild Speed: /10\nRevenue: /10"
            }
        }
    },
    {
        id: 4,
        title: "Avoiding Bad Startup Ideas",
        duration: "15 min",
        objective: "Avoid the traps that kill beginner Founders, such as complex marketplaces or capital-heavy hardware.",
        content: {
            sections: [
                {
                    title: "The Marketplace Trap",
                    text: "Uber clones or freelance platforms require a large user base to function. Avoid these for your first MVP.",
                    note: "Avoid two-sided marketplaces early on."
                },
                {
                    title: "Complex Platforms",
                    text: "Social networks or AI ecosystems take too long to build. Your first project must be manageable."
                },
                {
                    title: "The First Project Rule",
                    text: "Your first MVP should take 1–4 weeks. Anything longer is too complex for a beginner.",
                    rule: "1 — 4 Weeks"
                }
            ],
            exercise: {
                title: "Complexity Check",
                instruction: "Does your idea require a massive user base or 3+ months to build? If yes, simplify it or pivot.",
                placeholder: "My idea takes [Time] because..."
            }
        }
    },
    {
        id: 5,
        title: "Idea Validation",
        duration: "15 min",
        objective: "Validate demand before writing a single line of code.",
        content: {
            sections: [
                {
                    title: "Talking to Users",
                    text: "Ask how they solve it today and what frustrates them. Don't ask 'would you buy this'—ask how much they've already spent to fix it."
                },
                {
                    title: "Landing Pages & Communities",
                    text: "Create a simple page to measure email signups. Post the concept in forums to gauge reaction before building."
                },
                {
                    title: "Manual Solutions",
                    text: "Deliver the solution manually (Concierge MVP) first. If people pay for a manual version, they'll pay for the software."
                }
            ],
            exercise: {
                title: "Validation Plan",
                instruction: "How will you validate this next week? (e.g., Talk to 5 users, post on Reddit).",
                placeholder: "My plan is..."
            }
        }
    }
]

const ModuleTwo = () => {
    const [activeLessonId, setActiveLessonId] = useState(1)
    const activeLesson = lessons.find(l => l.id === activeLessonId)!

    // Persistence Logic
    const progressId = `module_2_lesson_${activeLessonId}`
    const savedProgress = useLiveQuery(
        () => db.progress.get(progressId),
        [activeLessonId]
    )

    const [exerciseValue, setExerciseValue] = useState("")

    // Update local state when DB changes or lesson switches
    useEffect(() => {
        if (savedProgress) {
            setExerciseValue(savedProgress.content)
        } else {
            setExerciseValue("")
        }
    }, [savedProgress, activeLessonId])

    const handleSave = async () => {
        await db.progress.put({
            id: progressId,
            moduleId: 2,
            lessonId: activeLessonId,
            moduleTitle: "Ideation",
            lessonTitle: activeLesson.title,
            content: exerciseValue,
            updatedAt: Date.now()
        })
        toast("Progress has been saved.")
    }

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-zinc-400 font-sans selection:bg-zinc-800 selection:text-zinc-200">
            {/* Top Navigation */}
            <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Link href="/modules" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                            <ArrowLeft width={20} />
                        </Link>
                        <div className="h-4 w-px bg-white/10" />
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Module 2</span>
                            <span className="text-sm font-medium text-zinc-200 tracking-tight">Ideation</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="hidden md:flex items-center gap-1 mr-4">
                            {lessons.map((l) => (
                                <div
                                    key={l.id}
                                    className={cn(
                                        "h-1 w-6 rounded-full transition-all",
                                        l.id <= activeLessonId ? "bg-zinc-100" : "bg-white/5"
                                    )}
                                />
                            ))}
                        </div>
                        <span className="text-xs font-medium text-zinc-500">{activeLessonId} / {lessons.length}</span>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto flex pt-16">
                {/* Sidebar Navigation */}
                <aside className="hidden lg:block w-80 h-[calc(100vh-64px)] overflow-y-auto border-r border-white/5 p-6 sticky top-16">
                    <div className="mb-8">
                        <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">Lessons</h3>
                        <div className="space-y-1">
                            {lessons.map((lesson) => (
                                <button
                                    key={lesson.id}
                                    onClick={() => setActiveLessonId(lesson.id)}
                                    className={cn(
                                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group",
                                        activeLessonId === lesson.id
                                            ? "bg-white/5 text-zinc-100 shadow-sm"
                                            : "hover:bg-white/2 text-zinc-500"
                                    )}
                                >
                                    <div className={cn(
                                        "h-6 w-6 rounded-lg flex items-center justify-center text-[10px] font-bold border transition-all",
                                        activeLessonId === lesson.id
                                            ? "bg-zinc-100 text-[#0A0A0A] border-zinc-100"
                                            : "bg-zinc-900 border-white/5 group-hover:border-white/10"
                                    )}>
                                        {lesson.id}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-medium tracking-tight truncate w-48">{lesson.title}</span>
                                        <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">{lesson.duration}</span>
                                    </div>
                                    {activeLessonId > lesson.id && (
                                        <CheckCircle2 className="ml-auto text-zinc-100" width={14} />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/2 border border-white/5">
                        <h4 className="text-[10px] font-bold text-zinc-200 uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Award width={12} />
                            Ideation Deliverables
                        </h4>
                        <ul className="text-[11px] text-zinc-500 space-y-2">
                            <li className="flex items-center gap-2 italic">• 3 product ideas listed</li>
                            <li className="flex items-center gap-2 italic">• Idea scores calculated</li>
                            <li className="flex items-center gap-2 italic">• Problem clearly defined</li>
                            <li className="flex items-center gap-2 italic">• Validation plan ready</li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-h-[calc(100vh-64px)]">
                    <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
                        {/* Lesson Header */}
                        <div className="mb-12">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="h-10 w-10 rounded-2xl bg-zinc-900 flex items-center justify-center border border-white/10 text-zinc-100">
                                    {activeLessonId === 1 && <Search width={20} />}
                                    {activeLessonId === 2 && <Target width={20} />}
                                    {activeLessonId === 3 && <Zap width={20} />}
                                    {activeLessonId === 4 && <ShieldAlert width={20} />}
                                    {activeLessonId === 5 && <Rocket width={20} />}
                                </span>
                                <div>
                                    <h4 className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.2em]">Lesson {activeLessonId}</h4>
                                    <h1 className="text-3xl md:text-4xl font-medium tracking-tighter text-zinc-100 leading-tight">
                                        {activeLesson.title}
                                    </h1>
                                </div>
                            </div>

                            <div className="bg-white/2 border border-white/5 p-5 rounded-2xl">
                                <h5 className="text-[10px] font-bold text-zinc-300 uppercase underline decoration-zinc-800 underline-offset-4 mb-2">Lesson Objective</h5>
                                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                                    {activeLesson.objective}
                                </p>
                            </div>
                        </div>

                        {/* Lesson Content Sections */}
                        <div className="space-y-12">
                            {activeLesson.content.sections.map((section, idx) => (
                                <section key={idx} className="group">
                                    <h3 className="text-lg font-medium text-zinc-200 mb-4 tracking-tight flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 rounded-full bg-zinc-700 group-hover:bg-zinc-100 transition-colors" />
                                        {section.title}
                                    </h3>
                                    <p className="text-base text-zinc-400 leading-relaxed mb-4">
                                        {section.text}
                                    </p>

                                    {'quote' in section && section.quote && (
                                        <div className="text-2xl font-medium tracking-tight text-zinc-100 py-4 border-l-2 border-white/10 pl-6 my-6 italic">
                                            {section.quote}
                                        </div>
                                    )}

                                    {'metric' in section && section.metric && (
                                        <div className="inline-flex flex-col p-4 rounded-2xl bg-zinc-100 text-[#0A0A0A] font-bold text-xs uppercase tracking-tighter shadow-lg shadow-white/5">
                                            <span className="opacity-50 text-[10px]">Framework:</span>
                                            {section.metric}
                                        </div>
                                    )}

                                    {'note' in section && section.note && (
                                        <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 text-red-200/60">
                                            <p className="text-sm font-medium">⚠️ Caution: {section.note}</p>
                                        </div>
                                    )}

                                    {'rule' in section && section.rule && (
                                        <div className="flex items-center gap-4 p-6 rounded-3xl bg-zinc-900 border border-white/5 my-8">
                                            <div className="h-12 w-12 rounded-full bg-zinc-100 text-[#0A0A0A] flex items-center justify-center text-xl font-bold italic shrink-0">!</div>
                                            <div>
                                                <h5 className="text-xs font-bold text-zinc-100 uppercase tracking-widest mb-1">Shipping Rule</h5>
                                                <p className="text-lg font-medium text-zinc-400">{section.rule}</p>
                                            </div>
                                        </div>
                                    )}
                                </section>
                            ))}
                        </div>

                        {/* Exercise Block */}
                        <div className="mt-20 p-8 md:p-10 rounded-3xl border border-white/10 bg-[#111111]/50 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-100/5 blur-3xl -z-10 bg-linear-to-br from-white/10 to-transparent" />

                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-8 w-8 rounded-xl bg-zinc-100 text-[#0A0A0A] flex items-center justify-center">
                                    <PenTool width={16} />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-zinc-100">Exercise: {activeLesson.content.exercise.title}</h3>
                            </div>

                            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                                {activeLesson.content.exercise.instruction}
                            </p>

                            <textarea
                                className="w-full h-32 bg-[#0A0A0A]/80 border border-white/5 rounded-2xl p-4 text-sm text-zinc-100 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-all font-mono"
                                placeholder={activeLesson.content.exercise.placeholder}
                                value={exerciseValue}
                                onChange={(e) => setExerciseValue(e.target.value)}
                            />

                            <button
                                onClick={handleSave}
                                className="mt-4 px-6 py-2.5 rounded-full bg-zinc-100 text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-white transition-all flex items-center gap-2 cursor-pointer"
                            >
                                Save Idea
                                <ChevronRight width={14} />
                            </button>
                        </div>

                        {/* Pagination Footer */}
                        <div className="mt-20 pt-12 border-t border-white/5 flex items-center justify-between">
                            <button
                                onClick={() => setActiveLessonId(prev => Math.max(1, prev - 1))}
                                disabled={activeLessonId === 1}
                                className={cn(
                                    "flex items-center gap-2 text-sm font-medium transition-colors",
                                    activeLessonId === 1 ? "opacity-20 cursor-not-allowed" : "text-zinc-500 hover:text-zinc-100"
                                )}
                            >
                                <ArrowLeft width={18} />
                                Previous
                            </button>

                            {activeLessonId < lessons.length ? (
                                <button
                                    onClick={() => setActiveLessonId(prev => Math.min(lessons.length, prev + 1))}
                                    className="cursor-pointer flex items-center gap-2 bg-zinc-100 text-[#0A0A0A] px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-white shadow-xl shadow-white/5"
                                >
                                    Next Lesson
                                    <ChevronRight width={18} />
                                </button>
                            ) : (
                                <Link
                                    href="/modules/3"
                                    className="cursor-pointer flex items-center gap-2 bg-zinc-100 text-[#0A0A0A] px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-white shadow-xl shadow-white/5"
                                >
                                    Continue to MVP Thinking
                                    <ChevronRight width={18} />
                                </Link>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ModuleTwo
