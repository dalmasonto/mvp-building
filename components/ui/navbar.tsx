'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0A0A0A]/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 text-zinc-100">
                    <span className="text-lg font-medium tracking-tighter">MVP.</span>
                </Link>
                <div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
                    <Link href="/modules" className="hover:text-zinc-100 transition-colors">
                        Curriculum
                    </Link>
                    <Link href="/resources" className="hover:text-zinc-100 transition-colors">
                        Resources
                    </Link>
                    <Link href="/community" className="hover:text-zinc-100 transition-colors">
                        Community
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link
                        href="/modules"
                        className="text-sm font-medium bg-zinc-100 text-[#0A0A0A] px-4 py-2 rounded-full hover:bg-white transition-colors cursor-pointer"
                    >
                        Start Building
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
