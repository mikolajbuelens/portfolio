import SkillCard from "./SkillCard";
import DATA from "../../data/projectsSkills.json";

import React from "react";
import Slider from "infinite-react-carousel";

const skills = DATA.filter((skill) => skill.type === "skill");

export default function Skills() {
  return (
    <>
      <Slider
        slidesToShow={5}
        // rows={5}
        centerMode={true}
        // slidesPerRow={4}
        autoplay={true}
        autoplayScroll={1}
        duration={3000}
        autoplaySpeed={0}
        pauseOnHover={false}
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </Slider>
    </>
  );
}
