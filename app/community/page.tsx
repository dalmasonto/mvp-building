'use client'

import React from 'react'
import { ArrowLeft, Users, MessageSquare, Share2, Handshake, Calendar, Trophy, Lock, Zap } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/ui/navbar'

const principles = [
    {
        title: "Build in Public",
        desc: "Share progress frequently through screenshots, MVP updates, and product launches.",
        icon: <Share2 width={20} />
    },
    {
        title: "Give Feedback",
        desc: "Help others by providing constructive insights on usability and product clarity.",
        icon: <MessageSquare width={20} />
    },
    {
        title: "Support Others",
        desc: "Answer questions, share resources, and help troubleshoot problems.",
        icon: <Handshake width={20} />
    }
]

const CommunityPage = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors mb-8 text-sm">
                            <ArrowLeft width={16} />
                            Back to Home
                        </Link>
                        <div className="flex justify-center mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400">
                                <Users width={14} />
                                Join 200+ Builders
                            </div>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-medium tracking-tighter text-zinc-100 mb-6">
                            The Builder Community
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            A network of individuals dedicated to shipping real products consistently. Share progress, receive feedback, and stay accountable.
                        </p>
                    </div>

                    {/* Principles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                        {principles.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-3xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all cursor-pointer">
                                <div className="h-10 w-10 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-100 mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-medium text-zinc-100 mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Activities Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                        <div>
                            <h2 className="text-3xl font-medium text-zinc-100 mb-6 tracking-tight">Community Activities</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 mt-1">
                                        <Calendar width={12} />
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-100 font-medium mb-1">Weekly Build Updates</h4>
                                        <p className="text-sm text-zinc-500">Post what you built, what you struggled with, and what you plan next.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 mt-1">
                                        <Trophy width={12} />
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-100 font-medium mb-1">MVP Showcases</h4>
                                        <p className="text-sm text-zinc-500">Demo your project to the community to get visibility and early users.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 transition-opacity group italic">
                                    <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 mt-1">
                                        <Zap width={12} />
                                    </div>
                                    <div>
                                        <h4 className="text-zinc-100 font-medium mb-1">Builder Challenges</h4>
                                        <p className="text-sm text-zinc-500">Intense 30-day sprints to take your product from idea to launch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 rounded-3xl border border-white/10 bg-zinc-900/50 shadow-2xl relative">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="h-8 w-8 rounded-lg bg-zinc-100 text-[#0A0A0A] flex items-center justify-center">
                                    <Lock width={16} />
                                </div>
                                <h3 className="text-xl font-bold text-zinc-100 tracking-tight">Join the Circle</h3>
                            </div>
                            <p className="text-sm text-zinc-400 mb-8 leading-relaxed">
                                Access to the private Discord and structured discussion forums is included in the Masterclass.
                            </p>
                            <button className="w-full bg-zinc-100 text-[#0A0A0A] py-3 rounded-xl text-sm font-bold uppercase tracking-wider hover:bg-white transition-all shadow-xl shadow-white/5 cursor-pointer">
                                Access Community
                            </button>
                            <div className="mt-6 flex justify-center gap-4 grayscale opacity-30">
                                <span className="text-xs font-bold text-zinc-100">Discord</span>
                                <span className="text-xs font-bold text-zinc-100">Circle</span>
                                <span className="text-xs font-bold text-zinc-100">Slack</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommunityPage
