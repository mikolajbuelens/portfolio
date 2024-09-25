import ProjectCard from "./ProjectCard";
import data from "../../data/projectsSkills.json";
const projects = data.filter((project) => project.type === "project");
export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul className="projects">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
}
