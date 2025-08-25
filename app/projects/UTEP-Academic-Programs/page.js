import Image from "next/image";
import { ArrowRight, Users, Target, Lightbulb, BarChart3, CheckCircle, ExternalLink } from 'lucide-react';

export default function UTEPAcademicPrograms() {
  return (
    <div className="">
      <section className="w-full py-30">
        <div className="max-w-4xl mx-auto px-6 space-y-6 relative">
          <h1 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-5xl lg:text-6xl xl:text-7xl">UTEP Academic Programs: Transforming University Program Discovery</h1>
          <p className="text-lg">
            Built UTEP's academic program discovery experience to help prospective students make informed career decisions. Through user research and no-code development, created flexible templates that achieved a 4% conversion rate while empowering content managers with no-code publishing workflows.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lvw pt-20 px-6">
<div className="grid grid-cols-12 grid-rows-8 gap-4 h-[800px]">
            
    <div className="col-span-6 row-span-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 flex flex-col justify-center items-center text-white shadow-lg hover:scale-[1.02] transition-transform duration-300">
        <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Featured Project</h2>
            <p className="text-lg opacity-90">Discover our latest creative endeavor</p>
            <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Explore
            </button>
        </div>
    </div>
    
    <div className="col-span-3 row-span-2 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-blue-500 rounded"></div>
            </div>
            <span className="text-sm text-gray-500">+12%</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">2.4K</h3>
        <p className="text-gray-600 text-sm">Active Users</p>
    </div>
    
    <div className="col-span-3 row-span-2 bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="flex items-center justify-between mb-2">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
            </div>
            <span className="text-sm text-gray-500">+8%</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800">156</h3>
        <p className="text-gray-600 text-sm">Projects</p>
    </div>
    
    <div className="col-span-3 row-span-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-4 text-white shadow-lg">
        <h3 className="text-lg font-semibold mb-3">Gallery</h3>
        <div className="grid grid-cols-2 gap-2 h-32">
            <div className="bg-white/20 rounded-lg"></div>
            <div className="bg-white/20 rounded-lg"></div>
            <div className="bg-white/20 rounded-lg"></div>
            <div className="bg-white/20 rounded-lg"></div>
        </div>
        <p className="text-sm opacity-90 mt-3">Latest creative works</p>
    </div>
    
    <div className="col-span-3 row-span-3 bg-white rounded-xl p-4 shadow-md border border-gray-100">
        <div className="flex flex-col items-center text-center h-full justify-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-3 flex items-center justify-center text-white text-xl font-bold">
                JD
            </div>
            <h3 className="font-semibold text-gray-800">John Doe</h3>
            <p className="text-gray-600 text-sm mb-3">Creative Director</p>
            <button className="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors">
                Connect
            </button>
        </div>
    </div>
    
    <div className="col-span-6 row-span-3 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
        <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold">Analytics Overview</h3>
            <button className="text-white/80 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
            </button>
        </div>
        <div className="flex items-center space-x-6">
            <div className="flex-1">
                <div className="h-2 bg-white/20 rounded-full mb-1">
                    <div className="h-2 bg-white/60 rounded-full w-3/4"></div>
                </div>
                <p className="text-sm opacity-90">Performance: 74%</p>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold">94.2%</p>
                <p className="text-sm opacity-90">Uptime</p>
            </div>
        </div>
    </div>
    
    <div className="col-span-2 row-span-2 bg-white rounded-xl p-3 shadow-md border border-gray-100">
        <h4 className="font-medium text-gray-800 mb-3 text-sm">Quick Actions</h4>
        <div className="space-y-2">
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm transition-colors">
                New Task
            </button>
            <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 rounded-lg text-sm transition-colors">
                Upload
            </button>
        </div>
    </div>
    
    <div className="col-span-2 row-span-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 text-white shadow-lg">
        <div className="text-center h-full flex flex-col justify-center">
            <div className="text-2xl mb-1">☀️</div>
            <p className="text-xl font-bold">24°C</p>
            <p className="text-sm opacity-90">Sunny</p>
        </div>
    </div>
    
    <div className="col-span-2 row-span-2 bg-white rounded-xl p-3 shadow-md border border-gray-100">
        <div className="flex items-center justify-between mb-2">
            <h4 className="font-medium text-gray-800 text-sm">Notifications</h4>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
        </div>
        <div className="space-y-2">
            <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                New message received
            </div>
            <div className="text-xs text-gray-600 p-2 bg-gray-50 rounded">
                Task completed
            </div>
        </div>
    </div>
    
</div>

          <Image
            src="/projects/ap/preview.png"
            alt="UTEP Logo"
            layout="responsive"
            width={400}  // Aspect ratio reference (not actual size)
            height={300} // Aspect ratio reference (not actual size)
            objectFit="contain"
            className="rounded-lg mb-6"
          />
        </div>
      </section>

      <section className="w-full py-10">
        <div className="max-w-4xl mx-auto px-6 space-y-6 relative">




<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-gray-800 absolute -left-16">
  <h2 className="text-sm font-bold leading-4">WHAT?</h2>
</div>          
<h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl font-sans">UTEP Academic Programs Website</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">I redesigned and built a new digital platform to showcase UTEP's academic programs. The university needed a way for prospective students to easily explore and learn about degree options, but their existing academic catalog was too technical and focused on course details rather than helping students make career decisions.</p>



<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-gray-800 absolute -left-16">
  <h2 className="text-sm font-bold leading-4">WHY?</h2>
</div>
<h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl font-sans">The Problem</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">The old academic catalog was packed with technical information that worked fine for current students planning their schedules, but it didn't help prospective students understand:</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">What each program was actually about</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">What career opportunities they could pursue</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Success stories from graduates</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">How programs matched their interests and goals</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">The design was also outdated and not engaging - no personalized content, compelling images, or videos that would excite potential students about their future.</p>



<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-gray-800 absolute -left-16">
  <h2 className="text-sm font-bold leading-4">WHO?</h2>
</div>


<h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl font-sans">Target Audience</h3>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Primary: Prospective undergraduate and graduate students trying to choose a career path</p>

<h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl font-sans">Stakeholder</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">UTEP admissions team and content managers who needed to update program information easily</p>



<div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold z-10 border-4 border-gray-800 absolute -left-16">
  <h2 className="text-sm font-bold leading-4">HOW?</h2>
</div>
<h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl font-sans">My Process & Contributions</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Research & UX Design</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Conducted user interviews to understand what prospective students actually needed</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Created user flow charts and wireframes to map out the experience</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Built interactive prototypes for testing</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Visual Design & Project Management</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Collaborated with designers to bring wireframes to life</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Coordinated with photographers, videographers, and copywriters to create compelling content</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Created simple spec sheets to help media producers understand web requirements</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Managed multiple project streams and timelines</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Development</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Used no-code tools (Webflow) for faster implementation</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Built flexible templates so content managers could easily update programs without technical help</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Designed an intuitive admin interface</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Made sure the site was accessible (proper headings, color contrast, keyboard navigation)</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Optimized for search engines and social media sharing</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">RESULTS</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">What We Achieved</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">The new Academic Programs section launched alongside a redesigned homepage and delivered impressive results:</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">4% conversion rate - exceeding our initial goals</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Increased website traffic from prospective students</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Streamlined content management - staff can now update programs quickly without waiting for the web team</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Better user experience with distinct sections for Undergraduate, Graduate, and Online Programs</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Improved tracking through integrated analytics and CRM forms</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">The project successfully transformed how UTEP presents its academic programs, making it easier for prospective students to find their path and for the university to showcase what makes their programs special.</p>
<div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden">
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
        <div className="p-12 flex flex-col justify-center">
            <span className="text-blue-400 font-semibold mb-4">Hello, I'm</span>
            <h1 className="text-4xl font-bold mb-6 text-white">Sarah Designer</h1>
            <p className="text-neutral-300 mb-8 leading-relaxed">
                Creative designer specializing in user experience and visual storytelling. 
                I transform ideas into beautiful, intuitive digital experiences.
            </p>
            <div className="flex space-x-4">
                <span className="bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm border border-blue-800">UI/UX Design</span>
                <span className="bg-green-900/50 text-green-300 px-4 py-2 rounded-full text-sm border border-green-800">Branding</span>
                <span className="bg-purple-900/50 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-800">Web Design</span>
            </div>
        </div>
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 flex items-center justify-center p-12">
            <div className="w-64 h-64 bg-neutral-700 rounded-2xl shadow-2xl flex items-center justify-center border border-neutral-600">

            </div>
        </div>
    </div>
</div>


        </div>
      </section>
      
    </div>
  );
}





