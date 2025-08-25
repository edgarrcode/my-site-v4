import Image from "next/image";
import MyComponent from "./components/MyComponent";
import Hero from "./components/Hero";
import ProjectGrid from "./components/ProjectGrid";
import ProjectsList from "./components/ProjectsList";
import { projects } from './data/projectsListData.js';

export default function Home() {
  return (
    <div className="">
      <Hero />
      <ProjectGrid projects={projects} />
      <ProjectsList />
    </div>
  );
}
