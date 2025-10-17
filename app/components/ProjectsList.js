import Image from "next/image";

export default function ProjectsList() {
    return (
        <section className="min-h-screen px-6 pt-20">
            <div className="max-w-7xl mx-auto w-full">
                <div className="">
                    <div className="space-y-8">

                        <section id="about" className="">
                                <div className="max-w-7xl mx-auto">
                                    <div className="grid lg:grid-cols-1 gap-6">
<div className="pt-6">
    <h3 className="">Selected Projects</h3>
</div>
                                        <div className="lg:col-span-3">
<div className="bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800 rounded-xl  transition-all duration-300overflow-hidden">
    <div className="overflow-x-auto rounded-xl">
        <table className="w-full">
            <thead className="dark:bg-neutral-800">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-1/12">Company / Institution</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider w-11/12">Project</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Indeed</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Company OKR Planning <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2024-2025</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed py-4 leading-relaxed">Led the process to define company Objectives and Key Results (OKRs), aligning leadership and cross-functional teams. Solicited requirements to create concise and effective OKR planning templates. Established a secure, shared digital workspace and managed access to facilitate the collaborative drafting of confidential company memos. Published and maintained internal communications on Confluence to ensure company-wide transparency and awareness of strategic OKRs.
                            <div className="pt-6">
                                <span className="bg-indigo-950 text-indigo-400 px-2 py-1 mr-4 rounded text-xs">Strategic Planning</span>
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Indeed</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Reactivation and Retention Company Objective <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2024-2025</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Led the “Retention and Reactivation” company objective by facilitating cross-functional collaboration among product, marketing, business strategy, and sales teams. Leveraged data analytics to track performance and drive progress toward the company’s revenue OKR.
                            <div className="pt-6">
                                <span className="bg-indigo-950 text-indigo-400 px-2 py-1 mr-4 rounded text-xs">Strategic Planning</span>
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Indeed</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Heuristic Evaluations <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2023</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Facilitated evaluations, documented problems, and collaborated with product teams to develop and implement effective solutions and improve the user experience.
                            <div className="pt-6">
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Institutional Design System V2<span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2016-2018</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Created and scaled a Design System to build 300+ web pages, adopted by 20+ users (software developers and content editors).
                            <div className="pt-6">
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-fuchsia-950 text-fuchsia-400 px-2 py-1 mr-4 rounded text-xs">Design Systems</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Enterprise CMS Implementation and Migration <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2016-2018</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Built a new CMS infrastructure. Integrated branding, UI design, pattern library, HTML/CSS/JavaScript templates, and Content Administrators UIs. Managed work across software development, QA, marketing, and Editorial teams. Collaborated with stakeholders from 20 divisions to gather requirements, discover desired features, and negotiate product adoption.
                            <div className="pt-6">
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                                <span className="bg-sky-950 text-sky-400 px-2 py-1 mr-4 rounded text-xs">CMS</span>
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Institutional Design System V1<span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2016-2018</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Created and scaled a Design System adopted by 800+ users.
                            <div className="pt-6">
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-fuchsia-950 text-fuchsia-400 px-2 py-1 mr-4 rounded text-xs">Design Systems</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Product Discovery Process Implementation <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2016-2018</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Establish mechanism to gather user feedback, explore solutions, and develop new product or features.
                            <div className="pt-6">
                                <span className="bg-teal-950 text-teal-400 px-2 py-1 mr-4 rounded text-xs">Product Management</span>
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Homepage Redesign <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2021-2022</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">User research, defining goals, creating wireframes and mockups, developing the new design, launching and testing the final product.
                            <div className="pt-6">
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                                <span className="bg-sky-950 text-sky-400 px-2 py-1 mr-4 rounded text-xs">CMS</span>
                                <span className="bg-emerald-950 text-emerald-400 px-2 py-1 mr-4 rounded text-xs">Digital Marketing</span>
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Academic Programs Platform <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2021-2022</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Design and develop a new web platform that integrates with CRM to attract and engage prospective students, feeding them into the marketing lifecycle. Manage cross-functional teams to create content and build CMS templates to streamline the process of creating and maintaining program pages.
                            <div className="pt-6">
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                                <span className="bg-sky-950 text-sky-400 px-2 py-1 mr-4 rounded text-xs">CMS</span>
                                <span className="bg-emerald-950 text-emerald-400 px-2 py-1 mr-4 rounded text-xs">Digital Marketing</span>
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Email Marketing System Implementation <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2021-2022</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Execute a full Mailchimp implementation by migrating subscriber data, developing custom email templates, and launching data-driven campaigns that can be continually monitored and optimized.
                            <div className="pt-6">
                                <span className="bg-emerald-950 text-emerald-400 px-2 py-1 mr-4 rounded text-xs">Digital Marketing</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Events Platform <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2016</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Lead the end-to-end implementation of the Localist event calendar, from vendor collaboration and brand-aligned customization to user integration and comprehensive testing, to provide a centralized and fully functional events platform for the university.
                            <div className="pt-6">
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                                <span className="bg-sky-950 text-sky-400 px-2 py-1 mr-4 rounded text-xs">CMS</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Division of Business Affairs Websites Revamp <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2015-2016</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Overhaul of 14 websites, starting with usability research to inform a new design language, including UI patterns and responsive templates, followed by the seamless integration of these assets into a CMS, comprehensive user training for 28 individuals, and the establishment of new content governance and maintenance workflows.
                            <div className="pt-6">
                                <span className="bg-cyan-950 text-cyan-400 px-2 py-1 mr-4 rounded text-xs">Project Management</span>
                                <span className="bg-sky-950 text-sky-400 px-2 py-1 mr-4 rounded text-xs">CMS</span>
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-orange-950 text-orange-400 px-2 py-1 mr-4 rounded text-xs">Web Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Division of Business Affairs Design System <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2014-2015</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">creating a reusable library of documented components and establishing a scalable framework to consistently apply them across new websites and future implementations.
                            <div className="pt-6">
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-fuchsia-950 text-fuchsia-400 px-2 py-1 mr-4 rounded text-xs">Design Systems</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Georgetown University</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Website Design and Development Consultant <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2015-2016</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Provide CMS recommendations, develop dynamic components for data visualization, create website templates for reports
                            <div className="pt-6">
                                <span className="bg-sky-950 text-sky-400 px-2 py-1 mr-4 rounded text-xs">CMS</span>
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-orange-950 text-orange-400 px-2 py-1 mr-4 rounded text-xs">Web Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Bazaarvoice</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Enterprise Product Rating System Integration <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2013-2014</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Integrate a ratings and reviews system across enterprise and client websites, implementing each client’s unique branding and style guide
                            <div className="pt-6">
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                                <span className="bg-red-950 text-red-400 px-2 py-1 mr-4 rounded text-xs">Front-end Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Themify</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Wordpress Themes Development <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2013</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Design and develop WordPress themes, and provide support to clients during their implementation.
                            <div className="pt-6">
                                <span className="bg-sky-950 text-sky-400 px-2 py-1 mr-4 rounded text-xs">CMS</span>
                                <span className="bg-orange-950 text-orange-400 px-2 py-1 mr-4 rounded text-xs">Web Development</span>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Migration.Mobi</span>
                    </td>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Mobile App Design <span className="pl-4 text-sm text-gray-600 dark:text-gray-400">2012-2013</span></div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 py-4 leading-relaxed">Design wireframes, prototypes, and the visual interface for mobile applications. Partner with engineers for an efficient design handoff
                            <div className="pt-6">
                                <span className="bg-blue-950 text-blue-400 px-2 py-1 mr-4 rounded text-xs">UX Design</span>
                                <span className="bg-purple-950 text-purple-400 px-2 py-1 mr-4 rounded text-xs">UI Design</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                    </div>
                </div>
            </div>
        </section>
    );
}