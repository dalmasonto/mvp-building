'use client'

import React from 'react'
import { ArrowLeft, BookOpen, ChevronRight, Zap, Target, Ship, Clock, Award, Hammer, Users, ClipboardList } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/ui/navbar'
import { db, type Progress } from '@/lib/db'
import { useLiveQuery } from 'dexie-react-hooks'
import { seedDatabase } from '@/lib/seedData'
import { toast } from 'sonner'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const moduleItems = [
    {
        id: 1,
        title: "The Builder Mindset",
        desc: "Reprogram your thinking. Remove fear of perfection and adopt execution discipline.",
        icon: <Zap width={24} />,
        duration: "90 min",
        status: "Available"
    },
    {
        id: 2,
        title: "Ideation",
        desc: "Learn to identify real problems and evaluate them using simple frameworks.",
        icon: <Target width={24} />,
        duration: "60 min",
        status: "Available"
    },
    {
        id: 3,
        title: "MVP Thinking",
        desc: "Convert ideas into minimal products by aggressively cutting non-essential features.",
        icon: <Ship width={24} />,
        duration: "75 min",
        status: "Available"
    },
    {
        id: 4,
        title: "Work Ethic",
        desc: "Build consistent habits and structure your daily schedule for long-term output.",
        icon: <Clock width={24} />,
        duration: "45 min",
        status: "Available"
    },
    {
        id: 5,
        title: "Team Building",
        desc: "Know when to build alone and how to find co-founders for scaling.",
        icon: <Users width={24} />,
        duration: "45 min",
        status: "Available"
    }
]

const ModulesDashboard = () => {
    const progressData = useLiveQuery(() => db.progress.toArray())

    // Group progress by moduleId
    const groupedProgress = progressData?.reduce((acc, item) => {
        if (!acc[item.moduleId]) {
            acc[item.moduleId] = {
                title: item.moduleTitle,
                lessons: []
            }
        }
        acc[item.moduleId].lessons.push(item)
        return acc
    }, {} as Record<number, { title: string, lessons: Progress[] }>)

    return (
        <div className="min-h-screen bg-[#0A0A0A]">
            <Navbar />
            <div className="pt-40 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors mb-8 text-sm">
                            <ArrowLeft width={16} />
                            Back to Home
                        </Link>
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-100 shadow-2xl">
                                    <BookOpen width={24} />
                                </div>
                                <h1 className="text-4xl md:text-5xl font-medium tracking-tighter text-zinc-100">
                                    Learning Modules
                                </h1>
                            </div>

                            <div className="flex flex-col gap-3 items-end">
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={async () => {
                                            const success = await seedDatabase()
                                            if (success) toast.success("Example data seeded successfully!")
                                            else toast.error("Failed to seed data.")
                                        }}
                                        className="inline-flex items-center gap-2 cursor-pointer px-6 py-3 rounded-2xl bg-zinc-900 border border-white/5 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-all text-sm font-medium"
                                    >
                                        <Zap width={18} />
                                        Seed Example Data
                                    </button>

                                    <Sheet modal={false}>
                                        <SheetTrigger asChild>
                                            <button className="inline-flex items-center gap-2 cursor-pointer px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-zinc-100 hover:bg-white/10 transition-all text-sm font-medium">
                                                <ClipboardList width={18} />
                                                View Your Progress
                                            </button>
                                        </SheetTrigger>
                                        <SheetContent
                                            side="right"
                                            className="w-full sm:max-w-2xl bg-[#0A0A0A] p-0 overflow-hidden flex flex-col sm:top-6! sm:bottom-6! sm:right-6! sm:h-auto! sm:rounded-2xl sm:border border-white/10 shadow-2xl transition-all duration-500 ease-out focus:outline-none"
                                        >
                                            <SheetHeader className="p-8 border-b border-white/5 bg-zinc-900/50">
                                                <SheetTitle className="text-2xl font-medium tracking-tight text-white flex items-center gap-3">
                                                    <ClipboardList className="text-zinc-400" />
                                                    Progress Summary
                                                </SheetTitle>
                                            </SheetHeader>
                                            <div className="flex-1 overflow-y-auto p-8 space-y-12">
                                                {!groupedProgress || Object.keys(groupedProgress).length === 0 ? (
                                                    <div className="h-full flex flex-col items-center justify-center text-center p-12 opacity-40">
                                                        <div className="h-16 w-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                                                            <ClipboardList width={32} />
                                                        </div>
                                                        <p className="text-zinc-400 font-medium">No progress saved yet.</p>
                                                        <p className="text-xs text-zinc-600 mt-2">Start a module and save an exercise to see it here.</p>
                                                    </div>
                                                ) : (
                                                    Object.entries(groupedProgress).sort(([a], [b]) => Number(a) - Number(b)).map(([modId, mod]) => (
                                                        <div key={modId} className="space-y-6">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest px-2 py-1 rounded bg-white/5 border border-white/5">Module {modId}</span>
                                                                <h3 className="text-lg font-medium text-white tracking-tight">{mod.title}</h3>
                                                            </div>
                                                            <div className="space-y-4">
                                                                {mod.lessons.sort((a, b) => a.lessonId - b.lessonId).map((lesson) => (
                                                                    <div key={lesson.id} className="p-6 rounded-2xl bg-white/3 border border-white/5 space-y-3">
                                                                        <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                                                                            <div className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                                                                            Lesson {lesson.lessonId}: {lesson.lessonTitle}
                                                                        </h4>
                                                                        <div className="text-sm text-zinc-300 leading-relaxed whitespace-pre-wrap font-mono p-4 rounded-xl bg-black/40 border border-white/5">
                                                                            {lesson.content || <span className="text-zinc-700 italic">No content saved...</span>}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))
                                                )}
                                            </div>
                                        </SheetContent>
                                    </Sheet>
                                </div>
                                <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed md:text-right">
                                    Follow the sequence from foundation to shipping. Each module contains lessons, exercises, and deliverables.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 gap-4">
                        {moduleItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.status === "Available" ? `/modules/${item.id}` : "#"}
                                className="group"
                            >
                                <div className="p-6 md:p-8 rounded-3xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all flex flex-col md:flex-row items-start md:items-center gap-6 relative overflow-hidden cursor-pointer">
                                    <div className="h-14 w-14 rounded-2xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-300 group-hover:text-zinc-100 group-hover:scale-110 transition-all shrink-0">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="text-xl font-medium text-zinc-100 tracking-tight group-hover:translate-x-1 transition-transform truncate">{item.title}</h3>
                                            <span className={`shrink-0 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${item.status === "Available" ? "border-zinc-800 text-zinc-500" : "border-orange-500/20 text-orange-200/40"
                                                }`}>
                                                {item.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-zinc-500 leading-relaxed max-w-xl line-clamp-1 md:line-clamp-none">{item.desc}</p>
                                    </div>
                                    <div className="hidden md:flex flex-col items-end gap-2 text-right shrink-0">
                                        <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-600">
                                            <Clock width={12} />
                                            {item.duration}
                                        </div>
                                        <div className="h-8 w-8 rounded-full border border-white/5 flex items-center justify-center text-zinc-700 group-hover:text-zinc-100 group-hover:border-white/20 transition-all">
                                            <ChevronRight width={16} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Extra Resources Section */}
                    <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href="/resources" className="group">
                            <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/40 hover:border-white/10 transition-all flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
                                        <Hammer width={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-100 font-medium tracking-tight">Builder Resources</h4>
                                        <p className="text-xs text-zinc-600">Tech stack & toolkit recommendations</p>
                                    </div>
                                </div>
                                <ChevronRight width={16} className="text-zinc-800 group-hover:text-zinc-400" />
                            </div>
                        </Link>
                        <Link href="/community" className="group">
                            <div className="p-8 rounded-3xl border border-white/5 bg-zinc-900/40 hover:border-white/10 transition-all flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="h-10 w-10 rounded-xl bg-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-zinc-100 transition-colors">
                                        <Users width={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-100 font-medium tracking-tight">Builder Community</h4>
                                        <p className="text-xs text-zinc-600">Network with other founders</p>
                                    </div>
                                </div>
                                <ChevronRight width={16} className="text-zinc-800 group-hover:text-zinc-400" />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModulesDashboard
