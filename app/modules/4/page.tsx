'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle2, ChevronRight, PenTool, Award, Clock, Zap, Calendar, ShieldAlert, Coffee, Timer } from 'lucide-react'
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
        title: "Consistency Over Motivation",
        duration: "9 min",
        objective: "Understand why systems and routines are superior to temporary bursts of motivation.",
        content: {
            sections: [
                {
                    title: "The Motivation Trap",
                    text: "Many beginners rely on bursts of motivation to start projects. Motivation fades quickly, and progress stops when the initial excitement disappears. Builders instead rely on systems and routines.",
                    quote: "Consistency over long periods produces significantly more output than short periods of intense work."
                },
                {
                    title: "The Builder Principle",
                    text: "Treat building like a professional discipline, not a hobby. Small progress daily is infinitely better than massive progress occasionally.",
                    rule: "Small progress daily > massive progress occasionally"
                }
            ],
            exercise: {
                title: "Daily Building Commitment",
                instruction: "How many hours can you realistically commit to building every single day for the next 6 months?",
                placeholder: "I commit to [X] hours per day..."
            }
        }
    },
    {
        id: 2,
        title: "The Builder Schedule",
        duration: "10 min",
        objective: "Learn how to structure your day to maximize output and minimize context switching.",
        content: {
            sections: [
                {
                    title: "Deep vs Shallow Work",
                    text: "Product development benefits from a structured daily schedule. This allows builders to separate high-concentration 'Deep Work' from administrative 'Shallow Work'.",
                },
                {
                    title: "Example Schedule",
                    text: "Morning: Deep Work (Core logic, complex features). Afternoon: Iteration (UI, debugging, testing). Evening: Reflection (Feedback, planning next day).",
                }
            ],
            exercise: {
                title: "Your Daily Blocks",
                instruction: "Define your morning, afternoon, and evening focus areas based on your availability.",
                placeholder: "Morning: \nAfternoon: \nEvening:"
            }
        }
    },
    {
        id: 3,
        title: "Deep Work for Builders",
        duration: "10 min",
        objective: "Master the art of uninterrupted, high-concentration work sessions.",
        content: {
            sections: [
                {
                    title: "Deep Work Practices",
                    text: "Turn off all notifications, work in fixed time blocks, focus on exactly one feature at a time, and avoid any form of multitasking.",
                    rule: "Focus on one feature at a time."
                },
                {
                    title: "The 90-Minute Block",
                    text: "The recommended deep work block for builders is 90–120 minutes. After this period, take a mandatory break before starting the next session.",
                }
            ],
            exercise: {
                title: "Deep Work Setup",
                instruction: "List 3 things you will do to ensure your next building session is uninterrupted.",
                placeholder: "1. Phone in other room \n2. ... \n3. ..."
            }
        }
    },
    {
        id: 4,
        title: "Weekly Builder System",
        duration: "10 min",
        objective: "Establish a weekly rhythm to maintain momentum and ensure consistent shipping.",
        content: {
            sections: [
                {
                    title: "The Weekly Rhythm",
                    text: "Monday: Planning (Tasks for the week). Tuesday-Thursday: Building (Implementation). Friday: Shipping (Deploying updates). Weekend: Learning (New tools, reflection).",
                },
                {
                    title: "Shipping Culture",
                    text: "A weekly shipping day creates accountability and ensures you are never too far from user feedback.",
                }
            ],
            exercise: {
                title: "Your Shipping Day",
                instruction: "Which day of the week will be your mandatory 'Shipping Day'?",
                placeholder: "My shipping day is [Day]..."
            }
        }
    },
    {
        id: 5,
        title: "Avoiding Burnout",
        duration: "6 min",
        objective: "Understand how to maintain building momentum over the long term without crashing.",
        content: {
            sections: [
                {
                    title: "Sustainability",
                    text: "Burnout is common among new builders who attempt to work excessively without sustainable habits. Building products is a long-term process, not a short sprint.",
                },
                {
                    title: "Strategies for Longevity",
                    text: "Keep MVP scope small, take regular breaks, celebrate small milestones, and avoid comparing your 'behind-the-scenes' with someone else's 'highlight reel'.",
                }
            ],
            exercise: {
                title: "Burnout Protection",
                instruction: "Define one non-negotiable activity you will do weekly to unplug from building.",
                placeholder: "Every [Day], I will [Activity] to recharge..."
            }
        }
    }
]

const WorkEthicModule = () => {
    const [activeLessonId, setActiveLessonId] = useState(1)
    const activeLesson = lessons.find(l => l.id === activeLessonId)!

    // Persistence Logic
    const progressId = `module_4_lesson_${activeLessonId}`
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
            moduleId: 4,
            lessonId: activeLessonId,
            moduleTitle: "Work Ethic",
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
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Module 4</span>
                            <span className="text-sm font-medium text-zinc-200 tracking-tight">Work Ethic</span>
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
                            Ethic Deliverables
                        </h4>
                        <ul className="text-[11px] text-zinc-500 space-y-2">
                            <li className="flex items-center gap-2 italic">• Daily schedule designed</li>
                            <li className="flex items-center gap-2 italic">• Deep work blocks set</li>
                            <li className="flex items-center gap-2 italic">• Weekly shipping day fixed</li>
                            <li className="flex items-center gap-2 italic">• Burnout plan established</li>
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
                                    {activeLessonId === 1 && <Clock width={20} />}
                                    {activeLessonId === 2 && <Zap width={20} />}
                                    {activeLessonId === 3 && <Timer width={20} />}
                                    {activeLessonId === 4 && <Calendar width={20} />}
                                    {activeLessonId === 5 && <Coffee width={20} />}
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

export default WorkEthicModule
