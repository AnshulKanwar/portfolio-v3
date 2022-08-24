import Image from "next/image";
import Link from "next/link";
import Container from "./container";

const Project = ({ title, description, link, children }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div>
        {children}
        <div className="ml-6">
          <h1 className="text-xl font-bold">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

const Projects = () => {
  return (
    <Container name="Projects" fg="text-orange-900" bg="bg-orange-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-stretch">
        <Project
          title="Blockchain Demo"
          description="An interactive app to visualize concepts of blockchain"
          link="https://github.com/AnshulKanwar/blockchain-demo"
        >
          <Image
            src="/projects/blockchain-demo.png"
            alt="Blockchain Demo"
            layout="intrinsic"
            width={514}
            height={334}
          />
        </Project>
        <Project
          title="Planetary Motion"
          description="Planetray motion simulation using OpenGL and Physics :)"
          link="https://github.com/AnshulKanwar/Planetary-Motion"
        >
          <div className="p-5">
            <Image
              src="/projects/planetary-motion.gif"
              className="rounded-md"
              alt="Planetary Motion"
              layout="intrinsic"
              width={450}
              height={280}
            />
          </div>
        </Project>
        <Project
          title="8 Puzzle Problem Solver"
          description="Webapp to solve the 8 puzzle problem"
          link="https://github.com/AnshulKanwar/8-puzzle-problem"
        >
          <Image
            src="/projects/8-puzzle.png"
            alt="8 Puzzle Problem Solver"
            layout="intrinsic"
            width={514}
            height={334}
          />
        </Project>
        <Project
          title="Nutrition Planner"
          description="An app to plan your daily nutrition needs"
          link="https://github.com/AnshulKanwar/Nutrition-Planner"
        >
          <Image
            src="/projects/nutrition-planner.png"
            alt="Nutrition Planner"
            layout="intrinsic"
            width={380}
            height={334}
          />
        </Project>
      </div>
    </Container>
  );
};

export default Projects;
