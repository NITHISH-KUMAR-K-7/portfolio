import React from 'react'
import Footer from './Footer';

function Project() {

    const All_Project = [
      {
        ProjectName: "Portfolio",
        SkillsUsed: "React Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/portfolio",
      },
      {
        ProjectName: "Crud Application",
        SkillsUsed:
          "MongoDB, Express Js, React Js, Node Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/Crud",
      },
      {
        ProjectName: "Signup-Login",
        SkillsUsed:
          "MongoDB, Express Js, React Js, Node Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/Signup-Login",
      },

      {
        ProjectName: "Weather-Report",
        SkillsUsed: "React Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/Weather-Report",
      },
      {
        ProjectName: "Imdb-Clone",
        SkillsUsed: "React Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/Imdb-Clone",
      },
      {
        ProjectName: "Food-Delivery",
        SkillsUsed: "React Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/Food-Delivery",
      },
      {
        ProjectName: "Tic-Tac-Toe",
        SkillsUsed: "React Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/Tic-Tac-Toe",
      },
      {
        ProjectName: "Calculator",
        SkillsUsed: "React Js, Tailwind CSS, JavaScript",
        ProjectLink: "https://github.com/NITHISH-KUMAR-K-7/Calculator",
      },
    ];
  return (
    <>
      <div>
        <h1 className="mt-10 text-4xl text-center font-serif font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
          Project
        </h1>
        <div className="mt-10 m-5 grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {All_Project.map((project, index) => (
            <div
              key={index}
              className="relative border-2 border-blue-200  w-70  h-90 px-5 rounded-xl bg-blue-100 mb-5 shadow-lg"
            >
              <div className="flex flex-col items-center justify-center h-full text-center gap-6">
                <h3 className="text-2xl  text-gray-600 font-medium">
                  {project.ProjectName}
                </h3>

                <h2 className="text-lg text-gray-600">
                  SkillsUsed : {project.SkillsUsed}
                </h2>
              </div>
              <a
                href={project.ProjectLink}
                target="_target"
                className="absolute right-0 bottom-0 justify-start border-2  border-gray-400 px-4 py-2 rounded-xl cursor-pointer  bg-gradient-to-r from-blue-500 to-blue-900 text-white font-semibold   shadow-md hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 hover:scale-75"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Project





