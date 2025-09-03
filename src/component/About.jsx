import React from 'react'
import Skills from './Skills';
import Footer from './Footer';

function About() {


        const EducationDetails = [
          {
            degree: "Master of Computer Applications",
            school: "M.Kumarasamy College of Engineering,Karur",
            graduated: "2023",
            percentage: "71.07",
          },
          {
            degree: "Bachelor of Science in Mathematics",
            school: "Jairams Arts And Science College,Karur",
            graduated: "2021",
            percentage: "71.17",
          },
          {
            degree: "HSC",
            school: "Vivekananda Vidyalaya Higher Secondary School",
            graduated: "2018",
            percentage: "69.91",
          },
          {
            degree: "SSLC",
            school: "Vivekananda Vidyalaya Higher Secondary School",
            graduated: "2016",
            percentage: "86.8",
          }
        ];

  return (
    <>
      <div className="m-10 lg:mx-30 mt-7 min-h-screen">
        <div>
          <h1 className="text-3xl font-serif font-semibold text-center mb-5">
            About{" "}
            <span className="font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
              Me
            </span>
          </h1>
        </div>
        <p className="mb-15">
          Hi, I'm{" "}
          <span className="font-bold lg:text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
            Nithish kumar
          </span>{" "}
          from Dindigul,TamilNadu, a Passionate full stack developer & frontend developer who loves
          crafting clean, responsive, and interactive user interfaces. I'm
          skilled in modern full stack technologies like React.js, Express.js, Node.js, MySQL, Tailwind CSS,
          and JavaScript, and I’m always eager to learn and adapt to new tools
          and frameworks.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 w-[50vw]">
            <h1 className="text-3xl font-serif text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-10">
              Educations
            </h1>
            <div className="w-full">
              {EducationDetails.map((edu, index) => (
                <div
                  key={index}
                  className="mb-3 font-semibold p-7 rounded-xl bg-blue-100"
                >
                  <h3 className="text-2xl mb-1">{edu.degree}</h3>
                  <h4 className="text-xl text-gray-600 mb-1">{edu.school}</h4>
                  <h4 className="text-xl text-gray-600 mb-1">
                    Completed : {edu.graduated}
                    {"  |  "} Percentage : {edu.percentage}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Skills />
      </div>
        <Footer/>
    </>
  );
}

export default About