import Image from "next/image";
import { ArrowRight, Users, Target, Lightbulb, BarChart3, CheckCircle, ExternalLink } from 'lucide-react';
import ExpandableImage from "../../components/ExpandableImage";
import ExpandableGallery from "../../components/ExpandableGallery";
import ExpandableContent from "../../components/ExpandableContent";
import BrowserWindow from "@/app/components/BrowserWindow";
import TemplateFeatures from "@/app/components/TemplateFeatures";

export default function UTEPAcademicPrograms() {
  return (
<div className="">
    <section className="w-full pt-30 pb-10">
        <div className="max-w-5xl mx-auto px-6 space-y-6 relative">
          <h1 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-5xl lg:text-6xl xl:text-7xl">UTEP Academic Programs: Transforming University Program Discovery</h1>
          <p className="text-lg">
            Built UTEP&apos;s academic program discovery experience to help prospective students make informed career decisions. Through user research and no-code development, created flexible templates that achieved a 4% conversion rate while empowering content managers with no-code publishing workflows.
          </p>
        </div>
        <div className="mx-auto w-full max-w-lvw py-10 px-6">
            <div className="grid grid-cols-12 grid-rows-8 gap-4 h-[800px]">
                        
                <div className="col-span-6 row-span-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 flex flex-col justify-center items-center text-white shadow-lg transition-transform duration-300">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-3">Featured Project</h2>
                        <p className="text-lg opacity-90">Discover our latest creative endeavor</p>
                        <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full font-semibold transition-colors">
                            Explore
                        </button>
                    </div>
                </div>
                
                <div className="col-span-3 row-span-2 rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-green-500 rounded"></div>
                        </div>
                        <span className="text-sm text-gray-500">incease icon</span>
                    </div>
                    <h3 className="text-2xl font-bold">+4%</h3>
                    <p className="text-gray-500 text-sm">Conversions Rate</p>
                </div>
                
                <div className="col-span-3 row-span-2 bg-white rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        </div>
                        <span className="text-sm text-gray-500">0-1</span>
                    </div>
                    <h3 className="text-2xl font-bold">20+</h3>
                    <p className="text-gray-500 text-sm">Content Managers Trained</p>
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
                
                <div className="col-span-3 row-span-3 bg-white rounded-xl p-4 shadow-md border border-gray-100 relative">
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
                
                <div className="col-span-6 row-span-4 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-xl p-4 text-white shadow-lg">
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
                
                <div className="col-span-2 row-span-3 rounded-xl p-3 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800 relative">
                    <Image
                        src="/projects/ap/banner-m-1.jpg"
                        alt="UTEP Academic Programs Website Mockup"
                        fill
                        className="object-cover object-top rounded-xl"
                    />
                </div>
                
                <div className="col-span-2 row-span-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-3 text-white shadow-lg">
                    <div className="text-center h-full flex flex-col justify-center">
                        <div className="text-2xl mb-1">☀️</div>
                        <p className="text-xl font-bold">24°C</p>
                        <p className="text-sm opacity-90">Sunny</p>
                    </div>
                </div>

                <div className="col-span-2 row-span-3 rounded-xl p-3 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800 relative">
                    <Image
                        src="/projects/ap/banner-m.jpg"
                        alt="UTEP Academic Programs Website Mockup"
                        fill
                        className="object-cover object-top rounded-xl"
                    />
                </div>
            </div>
        </div>
    </section>

    <section className="w-full py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-6 relative">
            <div className="grid lg:grid-cols-[80px_1fr] gap-4">
                <div className="">
                    <div className="lg:sticky lg:top-8 text-blue-500/50">
                        <div className="text-6xl font-bold mb-2">01</div>
                        <h2 className="mb-5">What?</h2>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl mb-6 font-sans">New UTEP Academic Programs Platform</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">I built a new digital platform to showcase UTEP&apos;s academic programs and connect with prospective students.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="w-full py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-6 relative">
            <div className="grid lg:grid-cols-[80px_1fr] gap-4">
                <div className="">
                    <div className="lg:sticky lg:top-8 text-blue-500/50">
                        <div className="text-6xl font-bold mb-2">02</div>
                        <h2 className="mb-5">Why?</h2>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl mb-6 font-sans">The Problem</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">There was no tool specifically designed to inform and guide our primary audience, prospective students. The closest tool, the academic catalog, was packed with technical information. While it worked fine for current students planning their schedules, it didn&apos;t help prospective students understand:</p>
                    <ul className="list-disc pl-5 mt-5">
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">What each program was actually about</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">What career opportunities they could pursue</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Learn success stories from graduates</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">How programs matched their interests and goals</li>
                    </ul>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">The design was also outdated and not engaging - no personalized content, compelling images, or videos that would excite potential students about their future.</p>
                    <blockquote className="relative p-8 mt-10">
                        <svg className="absolute top-4 left-4 w-8 h-8 text-neutral-500 opacity-25" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z"/>
                        </svg>
                        <p className="text-lg leading-relaxed pl-12 italic">
                            “This is a very detailed map, but I don&apos;t know the destination.”
                        </p>
                        <cite className="text-sm mt-6 pl-12 block not-italic">— Ana, Prospective Student</cite>
                    </blockquote>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">From a business perspective:</p>
                    <ul className="list-disc pl-5 mt-5">
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">There was no platform to run digital campaigns and track performance</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">We were not connecting with our primary audience</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">We were not integrating interested prospective students to a pre-enrollment process to inform and guide them</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">We were not capturing data to get to know our primary audience</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">We didn&apos;t have a baseline of enrollment data that we could latter on optimize</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Content managers found it difficult to update web content, leading to outdated content</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="w-full py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-6 relative">
            <div className="grid lg:grid-cols-[80px_1fr] gap-4">
                <div className="">
                    <div className="lg:sticky lg:top-8 text-blue-500/50">
                        <div className="text-6xl font-bold mb-2">03</div>
                        <h2 className="mb-5">Who?</h2>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl mb-10 font-sans">Primary Audience, Team & Stakeholders</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                        
                        <div className="col-span-1 md:col-span-2 rounded-xl p-6 py-8 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                            <h2 className="text-xl font-semibold">Primary Audience: Prospective Students</h2>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Stakeholders</h3>
                            <ul className="list-disc pl-5 mt-5">
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Office of Admissions & Recruitment</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Extended University</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Enrollment Systems</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Content Managers</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">College of Education</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">College of Engineering</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">College of Health Sciences</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">College of Liberal Arts</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">College of Nursing</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">College of Science</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">School of Pharmacy</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Woody L. Hunt College of Business</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Graduate School</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Project Team</h3>
                            <ul className="list-disc pl-5 mt-5">
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">UX Designer <span className="inline-block w-2 h-2 me-3 bg-blue-500 rounded-full"></span></li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Marketing Data Analyst</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">UI Developer <span className="inline-block w-2 h-2 me-3 bg-blue-500 rounded-full"></span></li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Project Manager <span className="inline-block w-2 h-2 me-3 bg-blue-500 rounded-full"></span></li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Creative (Photo & Video)</li>
                                <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Editorial</li>
                            </ul>
                            <hr className="border-t-1 border-neutral-200 dark:border-neutral-800 my-8"/>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed"><span className="inline-block w-2 h-2 me-1 bg-blue-500 rounded-full"></span> Roles performed by me.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <section className="w-full py-10">
        <div className="max-w-5xl mx-auto px-6 space-y-6 relative">
            <div className="grid lg:grid-cols-[80px_1fr] gap-4">
                <div className="">
                    <div className="lg:sticky lg:top-8 text-blue-500/50">
                        <div className="text-6xl font-bold mb-2">04</div>
                        <h2 className="mb-5">How?</h2>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl font-sans">Research, Design & Code</h2>
                    <h3 className="text-xl font-semibold mt-10">The Research</h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">To understand how students research university programs and application information, we interviewed high school seniors and first-year college students. Our research uncovered several key pain points:</p>
                    <ul className="list-disc pl-5 mt-5">
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed"><b>Lack of a Clear Process:</b> There was no single, defined pathway for users to research academic programs, forcing them to navigate a fragmented landscape of information.</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed"><b>Scattered Information:</b> Students relied on Google, leading them to a scattered collection of data rather than a unified source.</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed"><b>Incomplete Tools:</b> The course catalog, while descriptive of individual courses, was the closest available resource. However, it lacked crucial information such as career opportunities, success stories, and the ability to connect with the university.</li>
                    </ul>
                    <ExpandableContent title="Existing Course Catalog" maxHeight={600} className="my-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300">
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                            <Image
                                src="/projects/ap/previous-utep-academic-programs1.png"
                                alt="UTEP Academic Programs Page"
                                width={800}
                                height={400}
                                className="rounded-lg mt-6"
                            />
                            <Image
                                src="/projects/ap/previous-utep-academic-programs2.png"
                                alt="UTEP Academic Programs Page"
                                width={800}
                                height={400}
                                className="rounded-lg mt-6"
                            />
                            <Image
                                src="/projects/ap/previous-utep-academic-programs3.png"
                                alt="UTEP Academic Programs Page"
                                width={800}
                                height={400}
                                className="rounded-lg mt-6"
                            />
                        </div>
                    </ExpandableContent>
                    <blockquote className="relative p-8 my-10">
                        <svg className="absolute top-4 left-4 w-8 h-8 text-neutral-500 opacity-25" fill="currentColor" viewBox="0 0 32 32">
                            <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z"/>
                        </svg>
                        <p className="text-lg leading-relaxed pl-12 italic">
                            “Not inspiring for a life-changing decision.”
                        </p>
                        <cite className="text-sm mt-6 pl-12 block not-italic">— Ruben, Prospective Student</cite>
                    </blockquote>

                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">Besides our primary audience, we also solicited requirements internally:</p>
                    <ul className="list-disc pl-5 mt-5">
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Interviewed CRM owners to understand requirements for integrating forms and capturing necessary information</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Interviewed Leadership and Staff from enrollment services to understand their requirements</li>
                        <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Conducted competitive analysis using examples from other universities provided by leadership</li>
                    </ul>

                    <div className="rounded-xl p-6 py-8 mt-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                        <h2 className="text-xl font-semibold">Key Discovery</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">Prospective students need more than just a course catalog. They require inspirational, outcome-focused content to make informed decisions about their academic future. Our in-depth user interviews revealed that prospective students want to understand:</p>
                        <ul className="list-disc pl-5 mt-5">
                            <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Career opportunities and earning potential</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Alumni success stories and outcomes</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Program differentiation and unique value propositions</li>
                            <li className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Clear pathways from interests to career goals</li>
                        </ul>
                    </div>


                    <h3 className="text-xl font-semibold mt-10">The Design</h3>

                    <h4  className="text-lg font-semibold text-gray-500 dark:text-gray-400 leading-relaxed mt-10">Sitemap</h4>
                    <div className="rounded-xl p-6 py-8 mt-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                        <Image
                            src="/projects/ap/sitemap.png"
                            alt="UTEP Academic Programs Page"
                            width={800}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">The solution centered on creating three distinct program pathways (Undergraduate, Graduate, Online) with personalized content architecture and streamlined content management workflows.</p>
                    
                    <h4  className="text-lg font-semibold text-gray-500 dark:text-gray-400 leading-relaxed mt-10">Wireframes V1</h4>
                    <div className="rounded-xl p-6 py-8 mt-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                        <Image
                            src="/projects/ap/wireframes1.gif"
                            alt="Wireframes V1"
                            width={800}
                            height={400}
                            className="rounded-lg mt-5"
                        />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">✅ Our initial wireframes (V1) incorporated the content that prospective students, our primary audience, were looking for. The user journey was a simple, consisting of an index page with modal overlays for specific programs.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">❌ However, while this design was simple to build, it lacked the emotional connection needed to engage users. The wireframes were too text-heavy and didn&apos;t offer the personalized content that prospective students need to connect with the university.</p>

                    <h4  className="text-lg font-semibold text-gray-500 dark:text-gray-400 leading-relaxed mt-10">Wireframes V2</h4>
                    <div className="rounded-xl p-6 py-8 mt-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                        <Image
                            src="/projects/ap/wireframes2.gif"
                            alt="Wireframes V2"
                            width={800}
                            height={400}
                            className="rounded-lg mt-5"
                        />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">✅ Based on our research, Wireframes V2 was more aligned with what prospective students wanted. We enriched the pages with photography, video, highlights, testimonials, and key facts about each program.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">❌ However, the design had a significant flaw. The first section of the page included multiple links to external resources like the academic department, catalog, and application pages. These links had the same visual hierarchy as our primary business objective for the page: the “Request Information” form. This created a lack of focus and potentially drew users away from our main call to action.</p>

                    <h4  className="text-lg font-semibold text-gray-500 dark:text-gray-400 leading-relaxed mt-10">Wireframes V3</h4>
                    <div className="rounded-xl p-6 py-8 mt-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                        <Image
                            src="/projects/ap/wireframes3.gif"
                            alt="Wireframes V3"
                            width={800}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">✅ This version of the wireframes was meticulously refined, with every element serving a specific purpose. We removed unnecessary and distracting links, ensuring the design stayed focused on the needs of our primary audience and our core business objective.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">✅ Using an adaptive design approach, we avoided creating overly long pages, a crucial decision since our CRM form was strategically placed at the bottom. A/B testing confirmed that this placement significantly improved conversion rates.</p>

                    <h4  className="text-lg font-semibold text-gray-500 dark:text-gray-400 leading-relaxed mt-10">Index Page Prototype</h4>
                    <div className="rounded-xl p-6 py-8 mt-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                        <Image
                            src="/projects/ap/prototype.png"
                            alt="Wireframes V3"
                            width={800}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">Sidebar vs Top bar: We built a prototype to test the placement of filters and found that a sidebar is more usable for desktop users, while a top bar works better for mobile. On mobile, the filters are kept out of sight within a dropdown menu, making them visible only when a user needs them.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">Filters State Persistence: Usability tests revealed that users expect their selected filters to persist when they navigate away from a program page and then return. This feature prevents users from having to re-select their preferences, creating a smoother user experience.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">Autogenerated Content: To streamline content creation and simplify future maintenance, our index pages will be autogenerated. By pulling content directly from the program pages, we eliminate the need for manual updates and ensure information stays consistent across the site.</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">
                        We used no code tools (Webflow) for fast protoyping, here is the link to the Index Page Prototype: 
                        <a 
                        href="https://homepage-starter-06cf4d-0004106cfc4e672.webflow.io/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 underline ml-1"
                    >
                        Webflow Prototype
                    </a></p>

                    <h4  className="text-lg font-semibold text-gray-500 dark:text-gray-400 leading-relaxed mt-10">Visual Design</h4>
                    <div className="rounded-xl p-6 py-8 bg-[#041e42] border-gray-200 dark:border-neutral-800 mt-10">
                        <Image
                            src="/projects/ap/the-university-of-texas-at-el-paso.svg"
                            alt="Wireframes V3"
                            width={800}
                            height={400}
                            className=""
                        />
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">Primary Lockup</p>

                    <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                        <div>
                            <div className="rounded-xl p-6 py-8 bg-[#041e42] border-gray-200 dark:border-neutral-800 mt-10"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">Primary Color<br/>
                            #041e42
                            </p>
                        </div>
                        <div>
                            <div className="rounded-xl p-6 py-8 bg-[#ff8200] border-gray-200 dark:border-neutral-800 mt-10"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">Accent Color<br/>
                            #ff8200
                            </p>
                        </div>
                        <div>
                            <div className="rounded-xl p-6 py-8 bg-[#1a1b1f] border-gray-200 dark:border-neutral-800 mt-10"></div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">Primary Color<br/>
                            #1a1b1f
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-xl p-6 py-8 bg-[#1a1b1f] border-gray-200 dark:border-neutral-800 mt-10">
                            <Image
                                src="/projects/ap/abc.svg"
                                alt="Wireframes V3"
                                width={800}
                                height={400}
                                className=""
                            />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                            Primary Typeface<br/>
                            Tungsten Bold - Headings<br/>
                        </p>
                    </div>
                    <div>
                        <div className="rounded-xl p-6 py-8 bg-[#1a1b1f] border-gray-200 dark:border-neutral-800 mt-10">
                            <Image
                                src="/projects/ap/abc-Open.svg"
                                alt="Wireframes V3"
                                width={800}
                                height={400}
                                className=""
                            />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                            Secondary Typeface<br/>
                            Open Sans Regular - Body<br/>
                        </p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <BrowserWindow>
                            <Image 
                                src="/projects/ap/screenshotIndexDesktop.png" 
                                alt="Website screenshot" 
                                width={800}
                                height={400}
                                className="w-full h-auto block"
                            />
                            </BrowserWindow>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                            Undergraduate Index Page - Desktop</p>
                    </div>
                    <div>
                        <div className="mt-10">
                            <BrowserWindow>
                            <Image 
                                src="/projects/ap/screenshotProgram.png" 
                                alt="Website screenshot" 
                                width={800}
                                height={400}
                                className="w-full h-auto block"
                            />
                            </BrowserWindow>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                            Program Page - Desktop</p>
                    </div>
                    <div>
                        <div className="rounded-xl p-6 py-8 mt-10 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                            <Image
                                src="/projects/ap/mobileComponents.png"
                                alt="Wireframes V3"
                                width={800}
                                height={400}
                                className=""
                            />
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3">
                            Components for Mobile
                        </p>
                    </div>

                    <h3 className="text-xl font-semibold mt-10">The Development</h3>


                </div>
            </div>
        </div>{/* end of narrow container */}
        <div className="mx-auto w-full max-w-lvw py-10 px-6">
            <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-4 hide-scrollbar">
                <div className="flex-shrink-0 w-80 lg:w-auto rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <Image
                        src="/projects/ap/dev-data-definition-section-profile.png"
                        alt="Wireframes V3"
                        width={800}
                        height={400}
                        className=""
                    />
                    <h3 className="text-xl mt-5">1. CMS Admin UI</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">
                        Built a CMS admin UI to capture the content needed for each program. This content will automatically generate the index and program pages.
                    </p>
                </div>

                
                <div className="flex-shrink-0 w-80 lg:w-auto rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <Image
                        src="/projects/ap/dev-formatting.png"
                        alt="Wireframes V3"
                        width={800}
                        height={400}
                        className=""
                    />
                    <h3 className="text-xl mt-5">2. Content Formatting</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">
                        The Apache Velocity language was used to format content inputted by content managers into structured HTML sections.
                    </p>
                </div>

                
                <div className="flex-shrink-0 w-80 lg:w-auto rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <Image
                        src="/projects/ap/dev-output.png"
                        alt="Wireframes V3"
                        width={800}
                        height={400}
                        className=""
                    />
                    <h3 className="text-xl mt-5">3. HTML Output</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-5">
                        The output is clean, tested, semantic HTML that is optimized for performance and accessibility
                    </p>
                </div>
            </div>
        </div>{/* end of large container */}
        <div className="mx-auto w-full max-w-lvw py-10 px-6">
<div className="max-w-5xl mx-auto px-6 space-y-6 relative">
            <div className="grid lg:grid-cols-[80px_1fr] gap-4">
                <div className="">
                    <div className="lg:sticky lg:top-8 text-blue-500/50">
                        <div className="text-6xl font-bold mb-2">05</div>
                        <h2 className="mb-5">Results</h2>
                    </div>
                </div>
                <div className="">
                    <h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl mb-6 font-sans">The Results</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">The new Academic Programs section launched alongside a redesigned homepage and delivered impressive results:</p>
                </div>
            </div>
        </div>{/* end of narrow container */}
            
            <TemplateFeatures />
            
        </div>{/* end of narrow container */}
    </section>

    <section className="w-full py-10">
        <div className="mx-auto w-full max-w-lvw py-20 lg:px-6 pl-6">
    


        </div>
</section>




        <div className="max-w-5xl mx-auto px-6 space-y-6 relative">
        </div>
        <div className="max-w-5xl mx-auto px-6 space-y-6 relative">

        </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Research & UX Design</p>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Created user flow charts and wireframes to map out the experience</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Built interactive prototypes for testing</p>


<div className="lg:sticky lg:top-8 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold border-4 border-gray-800">
  <h2 className="text-sm font-bold leading-4">HOW?</h2>
</div>
<h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl mb-6 font-sans">Research & Interviews</h3>
<h3 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-4xl lg:text-5xl xl:text-6xl mb-6 font-sans">My Process & Contributions</h3>
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


<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">4% conversion rate - exceeding our initial goals</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Increased website traffic from prospective students</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Streamlined content management - staff can now update programs quickly without waiting for the web team</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Better user experience with distinct sections for Undergraduate, Graduate, and Online Programs</p>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">Improved tracking through integrated analytics and CRM forms</p>

<p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">The project successfully transformed how UTEP presents its academic programs, making it easier for prospective students to find their path and for the university to showcase what makes their programs special.</p>


</div>
  );
}





