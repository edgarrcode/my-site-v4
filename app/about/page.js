import ProjectsList from "@/app/components/ProjectsList";
import { projects } from '@/app/data/projectsListData.js';

export default function About() {
    return (
        <main>

            <section className="w-full pt-30 pb-10">
                <div className="max-w-5xl mx-auto px-6 space-y-6 relative">
                <h1 className="text-4xl tracking-tighter text-balance max-lg:font-medium sm:text-5xl lg:text-6xl xl:text-7xl">About Edgar E. Rodriguez</h1>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">Edgar is a seasoned design technologist with over a decade of experience. He has a proven track record of helping organizations achieve their business goals through the strategic implementation of digital products. Edgar&apos;s expertise lies in bridging the gap between design and development, ensuring that user-centric solutions are delivered efficiently and effectively.</p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">Throughout his career, Edgar has worked with a diverse range of clients, from startups to established enterprises. His ability to understand complex business requirements and translate them into intuitive digital experiences has made him a valuable asset to any team. Edgar is passionate about leveraging technology to solve real-world problems.</p>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">Below are some projects Edgar has participated in:</p>
                </div>

            </section>

            <ProjectsList />
        </main>
    );
}