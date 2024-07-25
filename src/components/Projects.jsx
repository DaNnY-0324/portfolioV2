import { PROJECTS } from "../constants/index";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={300}
                height={300}
                alt={project.title}
                className="mb-8"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="m-6 font-semibold">{project.title}</h6>
              <p className="m-8 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="m-6 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-yellow-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
