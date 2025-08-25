import Image from "next/image";
import Link from "next/link"


export default function ProjectGrid({ projects }) {
    return (
        <section className="px-6 pt-20">
            <div className="py-4">
                <h3 className="font-mono">Case Studies</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <div key={project.id} className="bg-white dark:bg-neutral-900 shadow-sm dark:shadow-neutral-900/20 border border-gray-200 dark:border-neutral-800 rounded-xl p-6 transition-all duration-300">
                            <div className="w-full relative mb-4">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="responsive"
                                    width={400}  // Aspect ratio reference (not actual size)
                                    height={300} // Aspect ratio reference (not actual size)
                                    objectFit="contain"
                                    className="rounded-lg"
                                />
                            </div>
                        <h2 className="text-xl font-bold leading-normal pb-4">{project.title}</h2>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{project.description}</p>
                        <Link href={`/projects/${project.id}`} className="mt-4 inline-block text-blue-500 hover:underline">
                            View Project <span className="ml-1 text-xl">↗</span>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
