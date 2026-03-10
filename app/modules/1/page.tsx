'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle2, ChevronRight, PlayCircle, BookOpen, PenTool, Award, Zap, Ship, Lock, Globe, Target } from 'lucide-react'
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
        title: "The Reality of Building Products",
        duration: "15 min",
        objective: "Expose beginners to the true nature of building products, removing the myth that great startups begin as perfect ideas.",
        content: {
            sections: [
                {
                    title: "Ideas Are Cheap",
                    text: "Many beginners believe the idea is the most important part. Reality: Idea is 10%, Execution is 90%. Thousands of people may have the same idea, but very few execute.",
                    example: "Multiple people think of a speed camera alert app, but only few actually build and launch it."
                },
                {
                    title: "Products Are Built Through Iteration",
                    text: "No successful product starts perfect. It's a cycle of: V1 (Users complain) → V2 (Fix major problems) → V3 (Add improvements) → V4 (Find product-market fit).",
                    note: "Accept that your first version will likely be bad."
                },
                {
                    title: "Action Beats Planning",
                    text: "Beginners often spend months researching and planning features instead of building. A builder starts with: Idea → Build small version → Release → Learn."
                }
            ],
            exercise: {
                title: "Reality Check",
                instruction: "Write down 3 ideas you have thought about building and why you never started them.",
                placeholder: "1. App for... (Never started because...)\n2. Platform for...\n3. Tool for..."
            }
        }
    },
    {
        id: 2,
        title: "Builder vs Dreamer Mentality",
        duration: "10 min",
        objective: "Help students recognize the difference between talking about ideas and actually building products.",
        content: {
            sections: [
                {
                    title: "Dreamer Traits",
                    text: "Dreamers constantly discuss startup ideas, want the perfect cofounder first, and think about investors before the product. They fear releasing imperfect work.",
                    metric: "Talking about ideas > Building ideas"
                },
                {
                    title: "Builder Traits",
                    text: "Builders focus on shipping small projects, learning from mistakes, and improving every iteration. They solve real problems.",
                    quote: "\"What can I build this week?\""
                },
                {
                    title: "Builder Identity",
                    text: "Students must begin identifying themselves as builders. Builders create things regularly, publish work publicly, and iterate continuously."
                }
            ],
            exercise: {
                title: "Builder Commitment",
                instruction: "Commit to a shipping date. What small project will you ship in the next 14 days?",
                placeholder: "I will ship [Product Name] by [Date]..."
            }
        }
    },
    {
        id: 3,
        title: "Shipping Over Perfection",
        duration: "20 min",
        objective: "Teach students why speed matters more than perfection in early products.",
        content: {
            sections: [
                {
                    title: "The Perfection Trap",
                    text: "Common mistake: \"I'll launch when it's ready.\" But software is never fully ready. Perfectionism causes delayed launches and burnout."
                },
                {
                    title: "The Shipping Rule",
                    text: "A beginner MVP should take 1–4 weeks to build. If it takes longer, the scope is too large.",
                    rule: "1 — 4 Weeks"
                },
                {
                    title: "The 80% Rule",
                    text: "A product should launch when core functionality works. Not when UI is perfect or edge cases are fully solved."
                },
                {
                    title: "Example: Speed Camera App",
                    text: "Required: Map, camera locations, distance alert. NOT Required: Login, social features, profiles, analytics."
                }
            ],
            exercise: {
                title: "Aggressive Cutting",
                instruction: "List features you can remove from your current idea to get it down to a 2-week build.",
                placeholder: "I will remove..."
            }
        }
    },
    {
        id: 4,
        title: "Fear, Failure & Public Building",
        duration: "15 min",
        objective: "Remove fear associated with launching and receiving feedback.",
        content: {
            sections: [
                {
                    title: "The Fear of Launching",
                    text: "Common fears: People will judge the product, it will fail, or it's too simple. Reality: Most people won't even notice your first launch."
                },
                {
                    title: "Why Failure Is Useful",
                    text: "Failure provides user feedback, clarity on what matters, and experience. Each failed product teaches lessons."
                },
                {
                    title: "Public Building",
                    text: "Building in public offers accountability, feedback, early users, and community. Post progress, share screenshots, and document development."
                }
            ],
            exercise: {
                title: "Public Proclamation",
                instruction: "Post your project idea publicly (Twitter, Discord, etc.) and paste the link or a summary of the reaction here.",
                placeholder: "Link to post or summary of feedback..."
            }
        }
    },
    {
        id: 5,
        title: "Builder Discipline",
        duration: "15 min",
        objective: "Teach students how to build consistently.",
        content: {
            sections: [
                {
                    title: "Consistency Wins",
                    text: "Success rarely comes from short bursts of motivation. It comes from consistent building over time."
                },
                {
                    title: "Builder Routine",
                    text: "Morning: Deep product dev. Afternoon: Bug fixes/UI improvements. Evening: User feedback/Learning."
                },
                {
                    title: "The Weekly Builder System",
                    text: "Monday: Plan | Tue-Thu: Build | Friday: Ship improvements | Weekend: Learn & reflect."
                }
            ],
            exercise: {
                title: "Your Builder Schedule",
                instruction: "Define your daily builder window. When will you commit at least 1 hour of focused building?",
                placeholder: "My builder window is..."
            }
        }
    }
]

const ModuleOne = () => {
    const [activeLessonId, setActiveLessonId] = useState(1)
    const activeLesson = lessons.find(l => l.id === activeLessonId)!

    // Persistence Logic
    const progressId = `module_1_lesson_${activeLessonId}`
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
            moduleId: 1,
            lessonId: activeLessonId,
            moduleTitle: "The Builder Mindset",
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
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Module 1</span>
                            <span className="text-sm font-medium text-zinc-200 tracking-tight">The Builder Mindset</span>
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
                            Module Deliverables
                        </h4>
                        <ul className="text-[11px] text-zinc-500 space-y-2">
                            <li className="flex items-center gap-2 italic">• Builder mindset established</li>
                            <li className="flex items-center gap-2 italic">• One product idea selected</li>
                            <li className="flex items-center gap-2 italic">• Reduced feature list ready</li>
                            <li className="flex items-center gap-2 italic">• Commitment to ship</li>
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
                                    {activeLessonId === 1 && <Zap width={20} />}
                                    {activeLessonId === 2 && <Target width={20} />}
                                    {activeLessonId === 3 && <Ship width={20} />}
                                    {activeLessonId === 4 && <Globe width={20} />}
                                    {activeLessonId === 5 && <Award width={20} />}
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

                                    {'example' in section && section.example && (
                                        <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 border-l-2 border-l-zinc-500">
                                            <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest block mb-2">Example</span>
                                            <p className="text-sm text-zinc-500 italic">"{section.example}"</p>
                                        </div>
                                    )}

                                    {'note' in section && section.note && (
                                        <div className="p-4 rounded-xl bg-orange-500/5 border border-orange-500/10 text-orange-200/60">
                                            <p className="text-sm font-medium">💡 Pro Tip: {section.note}</p>
                                        </div>
                                    )}

                                    {'quote' in section && section.quote && (
                                        <div className="text-2xl font-medium tracking-tight text-zinc-100 py-4 border-l-2 border-white/10 pl-6 my-6">
                                            {section.quote}
                                        </div>
                                    )}

                                    {'metric' in section && section.metric && (
                                        <div className="inline-flex flex-col p-4 rounded-2xl bg-zinc-100 text-[#0A0A0A] font-bold text-xs uppercase tracking-tighter shadow-lg shadow-white/5">
                                            <span className="opacity-50 text-[10px]">Critical Metric:</span>
                                            {section.metric}
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
                            {/* Decorative blur */}
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
                                    href="/"
                                    className="cursor-pointer flex items-center gap-2 bg-zinc-100 text-[#0A0A0A] px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:bg-white shadow-xl shadow-white/5"
                                >
                                    Complete Module
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

export default ModuleOne
