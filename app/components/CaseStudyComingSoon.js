export default function CaseStudyComingSoon({ projectTitle }) {
    return (
        <div className="bg-gray-50 dark:bg-neutral-950">
            <div className="max-w-4xl mx-auto px-6">
                <div className="bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800 rounded-xl p-8 md:p-12">
                    
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Case Study Coming Soon
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Thanks for your interest in {projectTitle || "this project"}! 
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="mb-12">
                        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-8">
                            This case study is currently being prepared for the website, but I&apos;d be happy to share a detailed PDF version with you in the meantime.
                        </p>

                        <div className="">
                            <p className="mb-6">
                                If you&apos;d like to see the full case study, just drop me an email and I&apos;ll send you the PDF directly. It includes:
                            </p>
                            
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">•</span>
                                    Complete project overview and objectives
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">•</span>
                                    Design process and methodology
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">•</span>
                                    Key insights and challenges
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">•</span>
                                    Final outcomes and results
                                </li>
                            </ul>
                        </div>

                        {/* CTA */}
                        <div className="rounded-lg p-6 mb-8">
                            <p className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
                                Ready to take a look?
                            </p>                            
                            <a 
                                href="mailto:hello@edgarr.com?subject=Case Study Request"
                                className="inline-flex items-center"
                            >
                                Request Case Study to hello@edgarr.com
                                <span className="ml-2 text-lg">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="border-t border-gray-200 dark:border-neutral-700 pt-8">
                        <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                            This case study will be available on the website soon. Thanks for your patience!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}