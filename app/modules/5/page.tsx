'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle2, ChevronRight, PenTool, Award, Users, UserPlus, Briefcase, Heart, AlertTriangle } from 'lucide-react'
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
        title: "The Solo Builder Advantage",
        duration: "6 min",
        objective: "Understand why building alone in the early stages can lead to faster decisions and rapid iteration.",
        content: {
            sections: [
                {
                    title: "Speed of Independence",
                    text: "In the early stages, building alone can be extremely powerful. You benefit from faster decisions, zero coordination overhead, full control of the product, and the ability to iterate rapidly.",
                    quote: "Many successful MVPs are built by one or two builders before expanding into teams."
                },
                {
                    title: "First Version Strategy",
                    text: "Builders are encouraged to build the first version of their product independently whenever possible to validate the core concept without team-related friction.",
                }
            ],
            exercise: {
                title: "Solo Readiness",
                instruction: "What is one specific advantage you currently have as a solo (or near-solo) builder?",
                placeholder: "My biggest solo advantage is..."
            }
        }
    },
    {
        id: 2,
        title: "When to Add Team Members",
        duration: "6 min",
        objective: "Identify the real indicators that your project needs more hands to grow.",
        content: {
            sections: [
                {
                    title: "Growth-Driven Expansion",
                    text: "A team becomes necessary when the product begins growing beyond one person's capacity. This should be a response to real needs, not speculation.",
                },
                {
                    title: "The Indicators",
                    text: "User base increasing, technical workload expanding, marketing or support demands growing, and product complexity reaching a point where specialized skills are required.",
                }
            ],
            exercise: {
                title: "Capacity Assessment",
                instruction: "Which area of your project currently feels most bottlenecked by your limited time?",
                placeholder: "The biggest bottleneck is currently..."
            }
        }
    },
    {
        id: 3,
        title: "Core Startup Roles",
        duration: "6 min",
        objective: "Learn the critical roles required to scale an early-stage startup effectively.",
        content: {
            sections: [
                {
                    title: "The Trinity",
                    text: "Early-stage startups usually revolve around three critical roles: The Builder (Engineering), The Designer (UX/UI), and The Growth Partner (Distribution/Marketing).",
                },
                {
                    title: "Role Evolution",
                    text: "Not every project needs all roles immediately, but understanding them helps founders scale effectively as traction increases.",
                }
            ],
            exercise: {
                title: "Identify Your Role",
                instruction: "Which of the three core roles do you currently fulfill best, and which one will you need to hire for first?",
                placeholder: "I am a [Role]. I will eventually need a [Role]..."
            }
        }
    },
    {
        id: 4,
        title: "Choosing a Co-Founder",
        duration: "6 min",
        objective: "Learn the three key factors that define a strong co-founder relationship.",
        content: {
            sections: [
                {
                    title: "Co-Founder Compatibility",
                    text: "A strong co-founder relationship depends on Skill Complementarity (different strengths), Aligned Vision (same long-term goals), and Shared Work Ethic (similar commitment levels).",
                    rule: "Shared Work Ethic > Similar Skills"
                },
                {
                    title: "The Friction Point",
                    text: "Misalignment in any of these areas—vision, ethic, or skill—is the primary cause of early-stage project failure.",
                }
            ],
            exercise: {
                title: "Ideal Partner Profile",
                instruction: "List 3 skills or traits your ideal co-founder must have to complement your own.",
                placeholder: "1. \n2. \n3."
            }
        }
    },
    {
        id: 5,
        title: "Early Team Mistakes",
        duration: "6 min",
        objective: "Avoid common pitfalls that slow down or destroy early-stage building teams.",
        content: {
            sections: [
                {
                    title: "Common Pitfalls",
                    text: "Building large teams too early (slowing down decisions), unclear responsibilities (everyone doing everything), and unresolved equity or ownership discussions.",
                },
                {
                    title: "The Lean Path",
                    text: "Many successful founders wait until the product shows real traction before forming larger teams. Coordination overhead can kill a pre-product-market-fit project.",
                }
            ],
            exercise: {
                title: "Team Risk Check",
                instruction: "If you were to add a team member today, what would be their single, clearly defined responsibility?",
                placeholder: "Their primary job would be to..."
            }
        }
    }
]

const TeamBuildingModule = () => {
    const [activeLessonId, setActiveLessonId] = useState(1)
    const activeLesson = lessons.find(l => l.id === activeLessonId)!

    // Persistence Logic
    const progressId = `module_5_lesson_${activeLessonId}`
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
            moduleId: 5,
            lessonId: activeLessonId,
            moduleTitle: "Team Building",
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
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Module 5</span>
                            <span className="text-sm font-medium text-zinc-200 tracking-tight">Team Building</span>
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
                            Team Deliverables
                        </h4>
                        <ul className="text-[11px] text-zinc-500 space-y-2">
                            <li className="flex items-center gap-2 italic">• Core role identified</li>
                            <li className="flex items-center gap-2 italic">• Partner profile defined</li>
                            <li className="flex items-center gap-2 italic">• Growth roadmap set</li>
                            <li className="flex items-center gap-2 italic">• Equity framework (optional)</li>
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
                                    {activeLessonId === 1 && <Users width={20} />}
                                    {activeLessonId === 2 && <UserPlus width={20} />}
                                    {activeLessonId === 3 && <Briefcase width={20} />}
                                    {activeLessonId === 4 && <Heart width={20} />}
                                    {activeLessonId === 5 && <AlertTriangle width={20} />}
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

                                    {'rule' in section && section.rule && (
                                        <div className="flex items-center gap-4 p-6 rounded-3xl bg-zinc-900 border border-white/5 my-8">
                                            <div className="h-12 w-12 rounded-full bg-zinc-100 text-[#0A0A0A] flex items-center justify-center text-xl font-bold italic shrink-0">!</div>
                                            <div>
                                                <h5 className="text-xs font-bold text-zinc-100 uppercase tracking-widest mb-1">The Rule</h5>
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
                                Save Progress
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
                                    href="/modules"
                                    className="cursor-pointer flex items-center gap-2 bg-zinc-100 text-[#0A0A0A] px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-white shadow-xl shadow-white/5"
                                >
                                    Finish Module
                                    <Award width={18} />
                                </Link>
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default TeamBuildingModule
