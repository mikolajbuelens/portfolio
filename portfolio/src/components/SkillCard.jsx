export default function SkillCard({ skill }) {
  return (
    <div className="skill-card">
      {/* <h3>{skill.title}</h3> */}
      <img src={skill.image} alt="" />
      <p>{skill.description}</p>
    </div>
  );
}
