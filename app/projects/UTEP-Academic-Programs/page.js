import Image from "next/image";
import { ArrowRight, Users, Target, Lightbulb, BarChart3, CheckCircle, ExternalLink } from 'lucide-react';
import ExpandableImage from "../../components/ExpandableImage";
import ExpandableGallery from "../../components/ExpandableGallery";
import ExpandableContent from "../../components/ExpandableContent";
import BrowserWindow from "@/app/components/BrowserWindow";
import TemplateFeatures from "@/app/components/TemplateFeatures";
import FeatureCards from "@/app/components/FeatureCards";
import ProjectGrid from "@/app/components/ProjectGrid";
import { projects } from '@/app/data/projectsListData.js';


export default function UTEPAcademicPrograms() {
  return (
<div className="">
    <section>
        <div id="cs-hero" className="container-narrow">
            <div>
                <h1 className="text-[72px] leading-[0.85] tracking-[-7px] md:text-[120px] md:leading-[0.85] md:tracking-[-11px] font-semibold">UTEP<br/> ACADEMIC PROGRAMS</h1>
                <p className="px-1 md:px-2 pt-3">Transforming University Program Discovery</p>
            </div>
        </div>
    </section>

    <section>
        <div className="mx-auto w-full max-w-lvw py-10 px-0">
            <FeatureCards />
        </div>
    </section>

    <section className="w-full py-10 errs">
        <div className="container-narrow">
            <h2>New UTEP Academic Programs Platform</h2>
            <p className="text-lg">
                Built UTEP&apos;s academic program discovery experience to help prospective students make informed career decisions. Through user research, design, and web development, created flexible templates that achieved a 4% conversion rate while empowering content managers with no-code publishing workflows. And connecting prospective students to enrollment services throug our CRM.
            </p>

        </div>
    </section>

    <section className="w-full py-10 errs">
        <div className="container-narrow">
            <h2>The Problem</h2>
            <p>There was no tool specifically designed to inform and guide our primary audience, prospective students. The closest tool, the academic catalog, was packed with technical information. While it worked fine for current students planning their schedules, it didn&apos;t help prospective students understand:</p>
            <ul className="list-disc pl-5 mt-5">
                <li>What each program was actually about</li>
                <li>What career opportunities they could pursue</li>
                <li>Learn success stories from graduates</li>
                <li>How programs matched their interests and goals</li>
            </ul>
            <p>The design was also outdated and not engaging - no personalized content, compelling images, or videos that would excite potential students about their future.</p>
            <blockquote className="relative p-8 mt-10">
                <svg className="absolute top-4 left-4 w-8 h-8 text-neutral-500 opacity-25" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z"/>
                </svg>
                <p className="text-lg leading-relaxed pl-12 italic">
                    “This is a very detailed map, but I don&apos;t know the destination.”
                </p>
                <cite className="text-sm mt-6 pl-12 block not-italic">— Ana, Prospective Student</cite>
            </blockquote>

            <p>From a business perspective:</p>
            <ul className="list-disc pl-5 mt-5">
                <li>There was no platform to run digital campaigns and track performance</li>
                <li>We were not connecting with our primary audience</li>
                <li>We were not integrating interested prospective students to a pre-enrollment process to inform and guide them</li>
                <li>We were not capturing data to get to know our primary audience</li>
                <li>We didn&apos;t have a baseline of enrollment data that we could latter on optimize</li>
                <li>Content managers found it difficult to update web content, leading to outdated content</li>
            </ul>
        </div>
    </section>

    <section className="w-full py-10 errs">
        <div className="container-narrow">
            <h2>Primary Audience, Team & Stakeholders</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">

                <div className="col-span-1 md:col-span-2 rounded-xl p-6 py-8 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <span className="text-xl font-semibold">Primary Audience: Prospective Students</span>
                </div>

                <div>
                    <h3>Stakeholders</h3>
                    <ul className="list-disc pl-5 mt-5">
                        <li>Office of Admissions & Recruitment</li>
                        <li>Extended University</li>
                        <li>Enrollment Systems</li>
                        <li>Content Managers</li>
                        <li>College of Education</li>
                        <li>College of Engineering</li>
                        <li>College of Health Sciences</li>
                        <li>College of Liberal Arts</li>
                        <li>College of Nursing</li>
                        <li>College of Science</li>
                        <li>School of Pharmacy</li>
                        <li>Woody L. Hunt College of Business</li>
                        <li>Graduate School</li>
                    </ul>
                </div>
                <div>
                    <h3>Project Team</h3>
                    <ul className="list-disc pl-5 mt-5">
                        <li>UX Designer <span className="inline-block w-2 h-2 me-3 bg-blue-500 rounded-full"></span></li>
                        <li>Marketing Data Analyst</li>
                        <li>UI Developer <span className="inline-block w-2 h-2 me-3 bg-blue-500 rounded-full"></span></li>
                        <li>Project Manager <span className="inline-block w-2 h-2 me-3 bg-blue-500 rounded-full"></span></li>
                        <li>Creative (Photo & Video)</li>
                        <li>Editorial</li>
                    </ul>
                    <hr className="border-t-1 border-neutral-200 dark:border-neutral-800 my-8"/>
                    <p><span className="inline-block w-2 h-2 me-1 bg-blue-500 rounded-full"></span> Roles performed by me.</p>

                </div>
            </div>
        </div>
    </section>


    <section className="w-full py-10 errs">
        <div className="container-narrow">
            <h2>Research, Design & Code</h2>
            <h3>The Research</h3>

            <p>To understand how students research university programs and application information, we interviewed high school seniors and first-year college students. Our research uncovered several key pain points:</p>
            <ul className="list-disc pl-5 mt-5">
                <li><b>Lack of a Clear Process:</b> There was no single, defined pathway for users to research academic programs, forcing them to navigate a fragmented landscape of information.</li>
                <li><b>Scattered Information:</b> Students relied on Google, leading them to a scattered collection of data rather than a unified source.</li>
                <li><b>Incomplete Tools:</b> The course catalog, while descriptive of individual courses, was the closest available resource. However, it lacked crucial information such as career opportunities, success stories, and the ability to connect with the university.</li>
            </ul>

            <blockquote className="relative p-8 my-10">
                <svg className="absolute top-4 left-4 w-8 h-8 text-neutral-500 opacity-25" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h8V14h-4c0-1.1.9-2 2-2V8z"/>
                </svg>
                <p className="text-lg leading-relaxed pl-12 italic">
                    “Not inspiring for a life-changing decision.”
                </p>
                <cite className="text-sm mt-6 pl-12 block not-italic">— Ruben, Prospective Student</cite>
            </blockquote>

            <p>Besides our primary audience, we also solicited requirements internally:</p>
            <ul className="list-disc pl-5 mt-5">
                <li>Interviewed CRM owners to understand requirements for integrating forms and capturing necessary information</li>
                <li>Interviewed Leadership and Staff from enrollment services to understand their requirements</li>
                <li>Conducted competitive analysis using examples from other universities provided by leadership</li>
            </ul>

            <div className="er-card">
                <h2 className="text-xl font-semibold">Key Discovery</h2>
                <p>Prospective students need more than just a course catalog. They require inspirational, outcome-focused content to make informed decisions about their academic future. Our in-depth user interviews revealed that prospective students want to understand:</p>
                <ul className="list-disc pl-5 mt-5">
                    <li>Career opportunities and earning potential</li>
                    <li>Alumni success stories and outcomes</li>
                    <li>Program differentiation and unique value propositions</li>
                    <li>Clear pathways from interests to career goals</li>
                </ul>
            </div>


            <h3>The Design</h3>

            <h4>Sitemap</h4>
            <div className="rounded-xl p-6 py-8 mt-10 bg-neutral-900 dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                <Image
                    src="/projects/ap/sitemap.png"
                    alt="UTEP Academic Programs Page"
                    width={1200}
                    height={400}
                    className="rounded-lg"
                />
            </div>
            <p>The solution centered on creating three distinct program pathways (Undergraduate, Graduate, Online) with personalized content architecture and streamlined content management workflows.</p>

            <h4>Wireframes V1</h4>
            <div className="er-card">
                <Image
                    src="/projects/ap/wireframes1.gif"
                    alt="Wireframes V1"
                    width={1200}
                    height={400}
                    className="rounded-lg mt-5"
                />
            </div>
            <p>✅ Our initial wireframes (V1) incorporated the content that prospective students, our primary audience, were looking for. The user journey was a simple, consisting of an index page with modal overlays for specific programs.</p>
            <p>❌ However, while this design was simple to build, it lacked the emotional connection needed to engage users. The wireframes were too text-heavy and didn&apos;t offer the personalized content that prospective students need to connect with the university.</p>

            <h4>Wireframes V2</h4>
            <div className="er-card">
                <Image
                    src="/projects/ap/wireframes2.gif"
                    alt="Wireframes V2"
                    width={1200}
                    height={400}
                    className="rounded-lg mt-5"
                />
            </div>
            <p>✅ Based on our research, Wireframes V2 was more aligned with what prospective students wanted. We enriched the pages with photography, video, highlights, testimonials, and key facts about each program.</p>
            <p>❌ However, the design had a significant flaw. The first section of the page included multiple links to external resources like the academic department, catalog, and application pages. These links had the same visual hierarchy as our primary business objective for the page: the “Request Information” form. This created a lack of focus and potentially drew users away from our main call to action.</p>

            <h4>Wireframes V3</h4>
            <div className="er-card">
                <Image
                    src="/projects/ap/wireframes3.gif"
                    alt="Wireframes V3"
                    width={1200}
                    height={400}
                    className="rounded-lg"
                />
            </div>
            <p>✅ This version of the wireframes was meticulously refined, with every element serving a specific purpose. We removed unnecessary and distracting links, ensuring the design stayed focused on the needs of our primary audience and our core business objective.</p>
            <p>✅ Using an adaptive design approach, we avoided creating overly long pages, a crucial decision since our CRM form was strategically placed at the bottom. A/B testing confirmed that this placement significantly improved conversion rates.</p>

            <h4>Index Page Prototype</h4>
            <div className="er-card">
                <Image
                    src="/projects/ap/prototype.png"
                    alt="Wireframes V3"
                    width={1200}
                    height={400}
                    className="rounded-lg"
                />
            </div>
            <p>Sidebar vs Top bar: We built a prototype to test the placement of filters and found that a sidebar is more usable for desktop users, while a top bar works better for mobile. On mobile, the filters are kept out of sight within a dropdown menu, making them visible only when a user needs them.</p>
            <p>Filters State Persistence: Usability tests revealed that users expect their selected filters to persist when they navigate away from a program page and then return. This feature prevents users from having to re-select their preferences, creating a smoother user experience.</p>
            <p>Autogenerated Content: To streamline content creation and simplify future maintenance, our index pages will be autogenerated. By pulling content directly from the program pages, we eliminate the need for manual updates and ensure information stays consistent across the site.</p>
            <p>
                We used no code tools (Webflow) for fast protoyping, here is the link to the Index Page Prototype: 
                <a 
                href="https://homepage-starter-06cf4d-0004106cfc4e672.webflow.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 underline ml-1"
            >
                Webflow Prototype
            </a></p>

            <h4>Visual Design</h4>
            <div className="rounded-xl p-6 py-8 bg-[#041e42] border-gray-200 dark:border-neutral-800 mt-10">
                <Image
                    src="/projects/ap/the-university-of-texas-at-el-paso.svg"
                    alt="Wireframes V3"
                    width={1200}
                    height={400}
                    className=""
                />
            </div>
            <p>Primary Lockup</p>

            <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
                <div>
                    <div className="rounded-xl p-6 py-8 bg-[#041e42] border-gray-200 dark:border-neutral-800 mt-10"></div>
                    <p>Primary Color<br/>
                    #041e42
                    </p>
                </div>
                <div>
                    <div className="rounded-xl p-6 py-8 bg-[#ff8200] border-gray-200 dark:border-neutral-800 mt-10"></div>
                    <p>Accent Color<br/>
                    #ff8200
                    </p>
                </div>
                <div>
                    <div className="rounded-xl p-6 py-8 bg-[#1a1b1f] border-gray-200 dark:border-neutral-800 mt-10"></div>
                    <p>Neutral Color<br/>
                    #1a1b1f
                    </p>
                </div>
            </div>
            <div>
                <div className="rounded-xl p-6 py-8 bg-[#1a1b1f] border-gray-200 dark:border-neutral-800 mt-10">
                    <Image
                        src="/projects/ap/abc.svg"
                        alt="Wireframes V3"
                        width={1200}
                        height={400}
                        className=""
                    />
                </div>
                <p>
                    Primary Typeface<br/>
                    Tungsten Bold - Headings<br/>
                </p>
            </div>
            <div>
                <div className="rounded-xl p-6 py-8 bg-[#1a1b1f] border-gray-200 dark:border-neutral-800 mt-10">
                    <Image
                        src="/projects/ap/abc-Open.svg"
                        alt="Wireframes V3"
                        width={1200}
                        height={400}
                        className=""
                    />
                </div>
                <p>
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
                        width={1200}
                        height={400}
                        className="w-full h-auto block"
                    />
                    </BrowserWindow>
                </div>
                <p>
                    Undergraduate Index Page - Desktop</p>
            </div>
            <div>
                <div className="mt-10">
                    <BrowserWindow>
                    <Image 
                        src="/projects/ap/screenshotProgram.png" 
                        alt="Website screenshot" 
                        width={1200}
                        height={400}
                        className="w-full h-auto block"
                    />
                    </BrowserWindow>
                </div>
                <p>
                    Program Page - Desktop</p>
            </div>
            <div>
                <div className="er-card">
                    <Image
                        src="/projects/ap/mobileComponents.png"
                        alt="Wireframes V3"
                        width={1200}
                        height={400}
                        className=""
                    />
                </div>
                <p>
                    Components for Mobile
                </p>
            </div>

            <h3>The Development</h3>
            <p>
                I built a CMS content type, which is an object containing a admin form for data entry and a corresponding database. The CMS then shares this content via an XML file, which is used to capture content in variables. These variables are inserted into an HTML template. When ready, content managers publish a static version of the pages to test or production.
            </p>
            <h4>Example of a profile card:</h4>
        </div>{/* end of narrow container */}
        <div className="mx-auto w-full max-w-lvw py-10 px-6">
            <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 gap-6 pb-4 hide-scrollbar">
                <div className="flex-shrink-0 w-80 lg:w-auto rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <Image
                        src="/projects/ap/dev-data-definition-section-profile.png"
                        alt="Wireframes V3"
                        width={1200}
                        height={400}
                        className=""
                    />
                    <h3 className="text-xl mt-5">1. CMS Admin UI</h3>
                    <p>
                        Built a CMS admin UI to capture the content needed for each program. This content will automatically generate the index and program pages.
                    </p>
                </div>
                
                <div className="flex-shrink-0 w-80 lg:w-auto rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <Image
                        src="/projects/ap/dev-formatting.png"
                        alt="Wireframes V3"
                        width={1200}
                        height={400}
                        className=""
                    />
                    <h3 className="text-xl mt-5">2. Content Formatting</h3>
                    <p>
                        The Apache Velocity language was used to format content inputted by content managers into structured HTML sections.
                    </p>
                </div>

                
                <div className="flex-shrink-0 w-80 lg:w-auto rounded-xl p-4 bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800">
                    <Image
                        src="/projects/ap/dev-output.png"
                        alt="Wireframes V3"
                        width={1200}
                        height={400}
                        className=""
                    />
                    <h3 className="text-xl mt-5">3. HTML Output</h3>
                    <p>
                        The output is clean, tested, semantic HTML that is optimized for performance and accessibility
                    </p>
                </div>
            </div>
        </div>{/* end of large container */}
        <div className="mx-auto w-full max-w-lvw py-10 px-6">
        <div className="container-narrow">
            <h2>The Results</h2>
            <p>The new Academic Programs section launched alongside a redesigned homepage and delivered impressive results:</p>
        </div>{/* end of narrow container */}

            <TemplateFeatures />

        </div>{/* end of narrow container */}
    </section>

    <section className="w-full py-10 errs">
        <div className="mx-auto w-full max-w-lvw py-20 lg:px-6 pl-6">



        </div>
</section>




        <div className="container-narrow">
        </div>
        <div className="container-narrow">

        </div>
        <ProjectGrid projects={projects} />
</div>
  );
}





