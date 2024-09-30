import SkillCard from "./SkillCard";
import DATA from "../../data/projectsSkills.json";

import Slider from "infinite-react-carousel";

const skills = DATA.filter((skill) => skill.type === "skill");

export default function Skills() {
  return (
    <>
    <h1 id="skills" className="subtitle">Key Technologies I Work With</h1>

    <div  className="skills">
      {/* <Slider
        slidesToShow={8}
        // rows={5}
        centerMode={true}
        // slidesPerRow={4}
        autoplay={true}
        autoplayScroll={1}
        duration={3000}
        autoplaySpeed={0}
        pauseOnHover={false}
      > */}
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      {/* </Slider> */}
    </div>
    </>
  );
}
