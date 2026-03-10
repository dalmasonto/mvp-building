import { db } from './db'

export const seedDatabase = async () => {
    const seedData = [
        // Module 1: The Builder Mindset
        {
            id: 'module_1_lesson_1',
            moduleId: 1,
            lessonId: 1,
            moduleTitle: "The Builder Mindset",
            lessonTitle: "The Reality of Building Products",
            content: "1. AI Task Manager (Never started because I spent 3 weeks overthinking the tech stack instead of building).\n2. Local Delivery App (Fear of logistics and 'what if it fails').\n3. Niche Job Board (Waiting for 'perfect' UI ideas that never came).",
            updatedAt: Date.now()
        },
        {
            id: 'module_1_lesson_2',
            moduleId: 1,
            lessonId: 2,
            moduleTitle: "The Builder Mindset",
            lessonTitle: "Builder vs Dreamer Mentality",
            content: "I will ship 'TaskFlow MVP' by March 25th. No more talk, just code.",
            updatedAt: Date.now()
        },
        {
            id: 'module_1_lesson_3',
            moduleId: 1,
            lessonId: 3,
            moduleTitle: "The Builder Mindset",
            lessonTitle: "Shipping Over Perfection",
            content: "I will remove: user profiles, social login, custom themes, analytics, and team collaboration. V1 will be local-first storage.",
            updatedAt: Date.now()
        },
        {
            id: 'module_1_lesson_4',
            moduleId: 1,
            lessonId: 4,
            moduleTitle: "The Builder Mindset",
            lessonTitle: "Fear, Failure & Public Building",
            content: "Posted on X: 'Building a headless task manager in 14 days. Accountability post 1/14. [Link]' - Received 5 likes and 2 encouraging comments. The fear is gone.",
            updatedAt: Date.now()
        },
        {
            id: 'module_1_lesson_5',
            moduleId: 1,
            lessonId: 5,
            moduleTitle: "The Builder Mindset",
            lessonTitle: "Builder Discipline",
            content: "My builder window is 7:00 AM - 8:30 AM every morning before my main job starts. Focused work only.",
            updatedAt: Date.now()
        },

        // Module 2: Ideation
        {
            id: 'module_2_lesson_1',
            moduleId: 2,
            lessonId: 1,
            moduleTitle: "Ideation",
            lessonTitle: "Where Good Ideas Come From",
            content: "1. Frustrated with manually tracking freelance invoices.\n2. My colleague struggled with group trip planning in WhatsApp.\n3. It took me too long to find specific code snippets from my past projects.",
            updatedAt: Date.now()
        },
        {
            id: 'module_2_lesson_2',
            moduleId: 2,
            lessonId: 2,
            moduleTitle: "Ideation",
            lessonTitle: "Identifying Real Problems",
            content: "The problem is that freelancers struggle with manual invoice tracking resulting in late payments and lost revenue.",
            updatedAt: Date.now()
        },
        {
            id: 'module_2_lesson_3',
            moduleId: 2,
            lessonId: 3,
            moduleTitle: "Ideation",
            lessonTitle: "Idea Evaluation Framework",
            content: "Pain: 9/10\nAccess: 7/10\nBuild Speed: 8/10\nRevenue: 7/10",
            updatedAt: Date.now()
        },
        {
            id: 'module_2_lesson_4',
            moduleId: 2,
            lessonId: 4,
            moduleTitle: "Ideation",
            lessonTitle: "Avoiding Bad Startup Ideas",
            content: "My idea takes 2 weeks because it's a simple CRUD tool with PDF generation. No marketplace or complex social features needed.",
            updatedAt: Date.now()
        },
        {
            id: 'module_2_lesson_5',
            moduleId: 2,
            lessonId: 5,
            moduleTitle: "Ideation",
            lessonTitle: "Idea Validation",
            content: "My plan is to talk to 5 freelancer friends this week and post a 'coming soon' landing page on Indie Hackers.",
            updatedAt: Date.now()
        },

        // Module 3: MVP Thinking
        {
            id: 'module_3_lesson_1',
            moduleId: 3,
            lessonId: 1,
            moduleTitle: "MVP Thinking",
            lessonTitle: "What an MVP Actually Is",
            content: "My MVP helps freelancers to generate and track simple invoices without complex accounting software.",
            updatedAt: Date.now()
        },
        {
            id: 'module_3_lesson_2',
            moduleId: 3,
            lessonId: 2,
            moduleTitle: "MVP Thinking",
            lessonTitle: "The Core Feature Principle",
            content: "The core action is generating a tracking link for a sent invoice.",
            updatedAt: Date.now()
        },
        {
            id: 'module_3_lesson_3',
            moduleId: 3,
            lessonId: 3,
            moduleTitle: "MVP Thinking",
            lessonTitle: "MVP Feature Cutting",
            content: "1. Multi-currency support\n2. Recurring invoices\n3. Team invitations\n4. Detailed financial reporting\n5. Dark mode",
            updatedAt: Date.now()
        },
        {
            id: 'module_3_lesson_4',
            moduleId: 3,
            lessonId: 4,
            moduleTitle: "MVP Thinking",
            lessonTitle: "MVP Architecture",
            content: "Frontend: Next.js\nBackend: Supabase Auth/DB\nDatabase: Postgres (Supabase)\nHosting: Vercel",
            updatedAt: Date.now()
        },
        {
            id: 'module_3_lesson_5',
            moduleId: 3,
            lessonId: 5,
            moduleTitle: "MVP Thinking",
            lessonTitle: "Building the First Version",
            content: "Day 1: DB Schema & Auth\nDay 2: Invoice Creation form\nDay 3: Invoice List View\nDay 4: PDF Generator\nDay 5: Tracking Logic",
            updatedAt: Date.now()
        },

        // Module 4: Work Ethic
        {
            id: 'module_4_lesson_1',
            moduleId: 4,
            lessonId: 1,
            moduleTitle: "Work Ethic",
            lessonTitle: "Consistency Over Motivation",
            content: "I commit to 2 hours per day, every day.",
            updatedAt: Date.now()
        },
        {
            id: 'module_4_lesson_2',
            moduleId: 4,
            lessonId: 2,
            moduleTitle: "Work Ethic",
            lessonTitle: "The Builder Schedule",
            content: "Morning: Deep Work (Core Logic)\nAfternoon: UI & Bug fixes\nEvening: Planning & Review",
            updatedAt: Date.now()
        },
        {
            id: 'module_4_lesson_3',
            moduleId: 4,
            lessonId: 3,
            moduleTitle: "Work Ethic",
            lessonTitle: "Deep Work for Builders",
            content: "1. Phone in other room\n2. Use 'Focus' mode on OS\n3. No-notification window for 90 mins",
            updatedAt: Date.now()
        },
        {
            id: 'module_4_lesson_4',
            moduleId: 4,
            lessonId: 4,
            moduleTitle: "Work Ethic",
            lessonTitle: "Weekly Builder System",
            content: "My shipping day is Friday. Every Friday I deploy whatever is ready.",
            updatedAt: Date.now()
        },
        {
            id: 'module_4_lesson_5',
            moduleId: 4,
            lessonId: 5,
            moduleTitle: "Work Ethic",
            lessonTitle: "Avoiding Burnout",
            content: "Every Sunday, I will hike for 3 hours to recharge and unplug.",
            updatedAt: Date.now()
        },

        // Module 5: Team Building
        {
            id: 'module_5_lesson_1',
            moduleId: 5,
            lessonId: 1,
            moduleTitle: "Team Building",
            lessonTitle: "The Solo Builder Advantage",
            content: "My biggest solo advantage is zero coordination overhead and instant iteration speed.",
            updatedAt: Date.now()
        },
        {
            id: 'module_5_lesson_2',
            moduleId: 5,
            lessonId: 2,
            moduleTitle: "Team Building",
            lessonTitle: "When to Add Team Members",
            content: "The biggest bottleneck is currently marketing and findng my first 10 users.",
            updatedAt: Date.now()
        },
        {
            id: 'module_5_lesson_3',
            moduleId: 5,
            lessonId: 3,
            moduleTitle: "Team Building",
            lessonTitle: "Core Startup Roles",
            content: "I am a Builder. I will eventually need a Growth Partner to handle distribution.",
            updatedAt: Date.now()
        },
        {
            id: 'module_5_lesson_4',
            moduleId: 5,
            lessonId: 4,
            moduleTitle: "Team Building",
            lessonTitle: "Choosing a Co-Founder",
            content: "1. Marketing expertise\n2. High work ethic\n3. Trust and pre-existing bond",
            updatedAt: Date.now()
        },
        {
            id: 'module_5_lesson_5',
            moduleId: 5,
            lessonId: 5,
            moduleTitle: "Team Building",
            lessonTitle: "Early Team Mistakes",
            content: "Their primary job would be to handle all user acquisition tasks.",
            updatedAt: Date.now()
        }
    ]

    try {
        await db.progress.bulkPut(seedData)
        return true
    } catch (error) {
        console.error("Failed to seed database:", error)
        return false
    }
}
