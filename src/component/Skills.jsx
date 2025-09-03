import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";


function Skills() {

    // Icons and Name 
    const Known_Skills = [
      {
        Icon: <FaReact size={50} />,
        Name: "React Js",
      },
      {
        Icon: <SiExpress size={50} />,
        Name: "Express Js",
      },
      {
        Icon: <FaNodeJs size={50} />,
        Name: "Node Js",
      },
      {
        Icon: <IoLogoJavascript size={50} />,
        Name: "JavaScript",
      },
      {
        Icon: <RiTailwindCssFill size={50} />,
        Name: "Tailwind CSS",
      },
      {
        Icon: <FaHtml5 size={50} />,
        Name: "HTML",
      },
      {
        Icon: <FaCss3Alt size={50} />,
        Name: "CSS",
      },
      {
        Icon: <FaJava size={50} />,
        Name: "Java",
      },
      {
        Icon: <SiMysql size={50} />,
        Name: "MY SQL",
      },
      {
        Icon: <SiPostman size={50} />,
        Name: "Postman",
      },
      {
        Icon: <VscVscode size={50} />,
        Name: "VS Code",
      },
      {
        Icon: <FaGithub size={50} />,
        Name: "GitHub",
      },
    ];

  return (
    <>
      <div className="mt-10">
        <h1 className="text-3xl font-semibold font-serif text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
          Skills
        </h1>
        <div className="grid grid-cols-1 place-items-center sm:grid-cols-2 px-6 m-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {Known_Skills.map((skill, index) => (
            <div
              key={index}
              className="mb-2 border-2 border-blue-200 bg-white rounded-xl shadow-lg  flex flex-col justify-center items-center w-50 h-30 hover:transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900 hover:text-white hover:font-medium hover:scale-110 duration-300"
            >
              <h1 className="">{skill.Icon}</h1>
              <h2 className="text-2xl">{skill.Name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills