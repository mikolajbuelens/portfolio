import ProjectCard from "./ProjectCard";
import data from "../../data/projectsSkills.json";

const projects = data.filter((project) => project.type === "project");
export default function Projects() {
  return (
    <>
    <h1 id="projects" className="subtitle mywork">My work</h1>

          <div  className="projects">

      {/* <Slider
        slidesToShow={5}
        // rows={5}
        centerMode={true}
        // slidesPerRow={4}
        autoplay={true}
        autoplayScroll={1}
        duration={3000}
        autoplaySpeed={0}
        pauseOnHover={false}
      > */}
        {/* <ul className="projects"> */}
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/* </ul> */}
      {/* </Slider> */}
    </div>
    </>
  );
}
