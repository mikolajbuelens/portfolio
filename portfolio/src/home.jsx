import Projects from "./components/Projects";
import Skills from "./components/Skills";
import "./index.css";
import "./reset.css";

export default function Home() {
  return (
    <>
      <header>
        <h1>Mikolaj Buelens</h1>
        <img src="" alt="placeholder" />
        <h2>About</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium
          voluptas pariatur ipsum non sit? Accusantium quisquam vitae, corrupti
          libero corporis, placeat in sint at dolor, sed magnam eius nulla sunt.
        </p>
      </header>
      <Skills />

      <div className="projects">
        <Projects />
      </div>
    </>
  );
}
