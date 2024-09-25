export default function ProjectCard({ project }) {
  return (
    <a href={project.link} className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <img src={project.image} alt="" />
    </a>
  );
}
