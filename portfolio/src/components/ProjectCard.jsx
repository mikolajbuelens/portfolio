export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img className="projectImg" src={project.image} alt="" />
      <h3>{project.title}</h3>

      {/* <p>{project.description}</p> */}
      <div className="links">
        <a target="blank" className="discover" href={project.url}>
          Discover
        </a>
        <a target="blank" href={project.github}>
          <img src="github-mark-white.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
