'use client'

import React from 'react'
import { ArrowLeft, ExternalLink, Code2, Layout, Server, CreditCard, BarChart3, GraduationCap, Github, Database, Globe, Rocket } from 'lucide-react'
import Link from 'next/link'
import Navbar from '@/components/ui/navbar'

const resourceCategories = [
    {
        title: "Development Tools",
        icon: <Code2 width={20} />,
        resources: [
            { name: "GitHub", desc: "Code hosting, version control, and collaboration.", type: "VCS", url: "https://github.com" },
            { name: "Supabase", desc: "Hosted Postgres, Auth, and Storage.", type: "Backend", url: "https://supabase.com" },
            { name: "Firebase", desc: "Real-time database and quick hosting.", type: "Backend", url: "https://firebase.google.com" },
            { name: "Django", desc: "Fast backend development and admin panels.", type: "Framework", url: "https://www.djangoproject.com" },
            { name: "Next.js", desc: "The full-stack React framework.", type: "Framework", url: "https://nextjs.org" }
        ]
    },
    {
        title: "Design & UX",
        icon: <Layout width={20} />,
        resources: [
            { name: "Figma", desc: "Industry standard for UI design and prototyping.", type: "Design", url: "https://figma.com" },
            { name: "TailwindCSS", desc: "Utility-first CSS for rapid styling.", type: "CSS", url: "https://tailwindcss.com" },
            { name: "Lucide Icons", desc: "Beautiful, consistent icon set.", type: "Assets", url: "https://lucide.dev" }
        ]
    },
    {
        title: "Deployment & Infrastructure",
        icon: <Server width={20} />,
        resources: [
            { name: "Vercel", desc: "Best-in-class hosting for Next.js.", type: "Hosting", url: "https://vercel.com" },
            { name: "Cloudflare", desc: "Edge hosting, security, and DNS.", type: "Infrastructure", url: "https://cloudflare.com" },
            { name: "DigitalOcean", desc: "Cloud servers for backend apps.", type: "VPS", url: "https://digitalocean.com" }
        ]
    },
    {
        title: "Payments & Growth",
        icon: <CreditCard width={20} />,
        resources: [
            { name: "Stripe", desc: "The gold standard for online payments.", type: "Payments", url: "https://stripe.com" },
            { name: "Lemon Squeezy", desc: "Simple Merchant of Record for SaaS.", type: "Payments", url: "https://lemonsqueezy.com" },
            { name: "PostHog", desc: "Product analytics and feature flags.", type: "Analytics", url: "https://posthog.com" },
            { name: "Plausible", desc: "Privacy-focused web analytics.", type: "Analytics", url: "https://plausible.io" }
        ]
    }
]

const ResourcesPage = () => {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="mb-16">
                        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-zinc-100 transition-colors mb-8 text-sm">
                            <ArrowLeft width={16} />
                            Back to Home
                        </Link>
                        <h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-100 mb-6">
                            Builder Resources
                        </h1>
                        <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                            Curated tools and platforms to help you move from idea to product with minimal friction.
                        </p>
                    </div>

                    {/* Resource Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {resourceCategories.map((category, idx) => (
                            <div key={idx} className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-100">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-medium text-zinc-100 tracking-tight">{category.title}</h3>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    {category.resources.map((resource, rIdx) => (
                                        <a
                                            key={rIdx}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-5 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/4 transition-all group flex items-start justify-between cursor-pointer"
                                        >
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="text-zinc-100 font-medium tracking-tight">{resource.name}</h4>
                                                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 bg-zinc-900 px-1.5 py-0.5 rounded border border-white/5">{resource.type}</span>
                                                </div>
                                                <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">{resource.desc}</p>
                                            </div>
                                            <div className="text-zinc-700 group-hover:text-zinc-100 transition-colors">
                                                <ExternalLink width={16} />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* External Links Section */}
                    <div className="mt-24 pt-16 border-t border-white/5">
                        <h3 className="text-2xl font-medium text-zinc-100 mb-8 tracking-tight">Communities & Learning</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {[
                                { name: "Indie Hackers", desc: "Best for SaaS Founders", icon: <Globe width={18} />, url: "https://www.indiehackers.com" },
                                { name: "Product Hunt", desc: "Best for Launching", icon: <Rocket width={18} />, url: "https://www.producthunt.com" },
                                { name: "Hacker News", desc: "Best for Tech Trends", icon: <Database width={18} />, url: "https://news.ycombinator.com" }
                            ].map((item, i) => (
                                <a
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-white/10 transition-all cursor-pointer block"
                                >
                                    <div className="text-zinc-400 mb-4">{item.icon}</div>
                                    <h4 className="text-zinc-100 font-medium mb-1">{item.name}</h4>
                                    <p className="text-xs text-zinc-600">{item.desc}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResourcesPage
