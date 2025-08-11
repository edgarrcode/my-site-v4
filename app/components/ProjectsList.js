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
<div className="py-4">
    <h3 className="font-mono">Previous Projects</h3>
</div>                                        
                                        <div className="lg:col-span-3 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl">
<div className="rounded-xl shadow-lg shadow-gray-900/20 overflow-hidden">
    <div className="overflow-x-auto">
        <table className="w-full">
            <thead className="dark:bg-gray-750">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Project</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Company / Institution</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Due Date</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Company OKR Planning</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Led the process to define company Objectives and Key Results (OKRs), aligning leadership and cross-functional teams. Solicited requirements to create concise and effective OKR planning templates. Established a secure, shared digital workspace and managed access to facilitate the collaborative drafting of confidential company memos. Published and maintained internal communications on Confluence to ensure company-wide transparency and awareness of strategic OKRs.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Indeed</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Reactivation and Retention Company Objective</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Led the “Retention and Reactivation” company objective by facilitating cross-functional collaboration among product, marketing, business strategy, and sales teams. Leveraged data analytics to track performance and drive progress toward the company’s revenue OKR.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Indeed</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Heuristic Evaluations</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Facilitated evaluations, documented problems, and collaborated with product teams to develop and implement effective solutions and improve the user experience.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Indeed</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Customer Insights Project Management</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Customer Insights Project Management</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Indeed</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Enterprise CMS Implementation and Migration</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Enterprise CMS Implementation and Migration</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Creation of Design System</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Creation of Design System</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Product Discovery Process Implementation</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Establish mechanism to gather user feedback, explore solutions, and develop new product or features.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Homepage Redesign</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">User research, defining goals, creating wireframes and mockups, developing the new design, launching and testing the final product.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Academic Programs Platform</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Develop a new web platform that integrates with CRM to attract and engage prospective students, feeding them into the marketing lifecycle.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Email Marketing System Implementation</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Execute a full Mailchimp implementation by migrating subscriber data, developing custom email templates, and launching data-driven campaigns that can be continually monitored and optimized.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">UTEP Events Platform</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Lead the end-to-end implementation of the Localist event calendar, from vendor collaboration and brand-aligned customization to user integration and comprehensive testing, to provide a centralized and fully functional events platform for the university.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Division of Business Affairs Websites Revamp</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Overhaul of 14 websites, starting with usability research to inform a new design language, including UI patterns and responsive templates, followed by the seamless integration of these assets into a CMS, comprehensive user training for 28 individuals, and the establishment of new content governance and maintenance workflows.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Division of Business Affairs Design System Implementation</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">creating a reusable library of documented components and establishing a scalable framework to consistently apply them across new websites and future implementations.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">UTEP</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Website Design and Development Consultant</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Provide CMS recommendations, develop dynamic components for data visualization, create website templates for reports</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                            Active
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Georgetown University</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Dec 15, 2024</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Enterprise Product Rating System Integration</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Integrate a ratings and reviews system across enterprise and client websites, implementing each client’s unique branding and style guide</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                            Review
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Bazaarvoice</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Jan 30, 2025</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Wordpress Themes Development</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Design and develop WordPress themes, and provide support to clients during their implementation.</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                            Review
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Themify</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Jan 30, 2025</td>
                </tr>
                <tr>
                    <td className="px-6 py-4">
                        <div className="font-medium text-gray-900 dark:text-white">Mobile App Design</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Design wireframes, prototypes, and the visual interface for mobile applications. Partner with engineers for an efficient design handoff</div>
                    </td>
                    <td className="px-6 py-4">
                        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200">
                            Review
                        </span>
                    </td>
                    <td className="px-6 py-4">
                        <span className="text-gray-900 dark:text-white">Migration.Mobi</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">Jan 30, 2025</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>

                                        </div>

                                        <div className="space-y-6">
                                            <div className="bg-gradient-to-br from-purple-900/20 to-transparent border border-white/10 rounded-2xl p-6">
                                                <h3 className="text-xl font-bold mb-4">Core Skills</h3>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-gray-400">UI Design</span>
                                                        <div className="flex space-x-1">
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-gray-400">UX Research</span>
                                                        <div className="flex space-x-1">
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-gray-600 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-gray-400">Prototyping</span>
                                                        <div className="flex space-x-1">
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-white/10 rounded-2xl p-6">
                                                <h3 className="text-xl font-bold mb-4">Tools</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Figma</span>
                                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Sketch</span>
                                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Framer</span>
                                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Principle</span>
                                                    <span className="px-3 py-1 bg-white/10 rounded-full text-sm">After Effects</span>
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