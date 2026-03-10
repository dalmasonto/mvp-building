'use client'

import React, { useState, useEffect } from 'react'
import { ArrowLeft, CheckCircle2, ChevronRight, PenTool, Award, Box, Zap, Scissors, Layers, Rocket, Ship } from 'lucide-react'
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
        title: "What an MVP Actually Is",
        duration: "10 min",
        objective: "Understand that an MVP is the smallest product that solves the core problem, not just a 'cheap' version.",
        content: {
            sections: [
                {
                    title: "Definition",
                    text: "MVP stands for Minimum Viable Product. It is the smallest useful version of a product that allows you to collect the maximum amount of validated learning about customers with the least effort.",
                    quote: "The smallest product that solves the core problem."
                },
                {
                    title: "The MVP Must:",
                    text: "Solve one specific problem, serve one user group, and contain only minimal features required to achieve the core action."
                }
            ],
            exercise: {
                title: "Define Your MVP",
                instruction: "Describe your MVP in one sentence focus on the core problem it solves.",
                placeholder: "My MVP helps [Target User] to [Core Action] without [Pain Point]..."
            }
        }
    },
    {
        id: 2,
        title: "The Core Feature Principle",
        duration: "15 min",
        objective: "Identify the 'Core Action' of your product and prioritize it above all else.",
        content: {
            sections: [
                {
                    title: "The Core Action",
                    text: "Every major product has one core action. Uber: Request a ride. Twitter: Post a short message. Your product must excel at its core action before anything else exists.",
                },
                {
                    title: "MVP Examples",
                    text: "For a Speed Camera App, the core action is 'Alert driver of speed cameras'. Focus on this 100% before adding login, social features, or profiles."
                }
            ],
            exercise: {
                title: "Identify Core Action",
                instruction: "What is the single most important thing a user does in your app?",
                placeholder: "The core action is..."
            }
        }
    },
    {
        id: 3,
        title: "MVP Feature Cutting",
        duration: "20 min",
        objective: "Aggressively eliminate non-essential features to reduce build time and complexity.",
        content: {
            sections: [
                {
                    title: "The Cutting Rule",
                    text: "If the product works without it → remove it. Beginners often overbuild by adding accounts, profiles, dashboards, and advanced analytics too early.",
                    rule: "If it works without it, remove it."
                },
                {
                    title: "What to Eliminate",
                    text: "Common distractions include: Password reset flows, complex onboarding, social sharing, user profiles, and detailed settings pages."
                }
            ],
            exercise: {
                title: "The Axe List",
                instruction: "List 5 features you are cutting from your V1.",
                placeholder: "1. \n2. \n3. \n4. \n5."
            }
        }
    },
    {
        id: 4,
        title: "MVP Architecture",
        duration: "15 min",
        objective: "Choose a simple, scalable, but easy-to-manage tech stack.",
        content: {
            sections: [
                {
                    title: "Keep it Simple",
                    text: "Avoid overengineering. Use tools that allow you to move fast. Recommended: Next.js + Supabase + TailwindCSS + Vercel.",
                },
                {
                    title: "The MVP Stack",
                    text: "Backend (Next.js/Node), Database (Supabase/Postgres), Styling (TailwindCSS), Hosting (Vercel). Stick to what you know best to maintain speed."
                }
            ],
            exercise: {
                title: "Your Tech Stack",
                instruction: "What tools will you use to build your MVP in 4 weeks?",
                placeholder: "Frontend: \nBackend: \nDatabase: \nHosting:"
            }
        }
    },
    {
        id: 5,
        title: "Building the First Version",
        duration: "15 min",
        objective: "Plan your 4-week build cycle from architecture to launch.",
        content: {
            sections: [
                {
                    title: "The 4-Week Timeline",
                    text: "Week 1: Product structure & core logic. Week 2: Basic UI & feature completion. Week 3: Testing & bug fixes. Week 4: Launch.",
                },
                {
                    title: "The MVP Checklist",
                    text: "Before launching: Core feature works, product is usable, no critical bugs, and a basic landing page exists."
                }
            ],
            exercise: {
                title: "Week 1 Goals",
                instruction: "What are your specific technical goals for the first 7 days of building?",
                placeholder: "Day 1: ... \nDay 2: ..."
            }
        }
    }
]

const ModuleThree = () => {
    const [activeLessonId, setActiveLessonId] = useState(1)
    const activeLesson = lessons.find(l => l.id === activeLessonId)!

    // Persistence Logic
    const progressId = `module_3_lesson_${activeLessonId}`
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
            moduleId: 3,
            lessonId: activeLessonId,
            moduleTitle: "MVP Thinking",
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
                            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">Module 3</span>
                            <span className="text-sm font-medium text-zinc-200 tracking-tight">MVP Thinking</span>
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
                            MVP Deliverables
                        </h4>
                        <ul className="text-[11px] text-zinc-500 space-y-2">
                            <li className="flex items-center gap-2 italic">• Core action identified</li>
                            <li className="flex items-center gap-2 italic">• Features aggressively cut</li>
                            <li className="flex items-center gap-2 italic">• Tech stack selected</li>
                            <li className="flex items-center gap-2 italic">• 4-week build plan ready</li>
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
                                    {activeLessonId === 1 && <Box width={20} />}
                                    {activeLessonId === 2 && <Zap width={20} />}
                                    {activeLessonId === 3 && <Ship width={20} />}
                                    {activeLessonId === 4 && <Layers width={20} />}
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

export default ModuleThree
