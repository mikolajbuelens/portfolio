export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img className="projectImg" src={project.image} alt="" />
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      {/* <p>{project.description}</p> */}
      <div className="links">
        {/* if project url = "" don't show */}

        <a
          target="blank"
          className={project.url === "" ? "hidden" : "discover"}
          href={project.url}
        >
          Visit
        </a>
        {/* Visit
        </a> */}
        <a target="blank" href={project.github}>
          <img src="github-mark-white.svg" alt="" />
        </a>
      </div>
    </div>
  );
}
