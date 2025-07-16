import React from "react";
import { useNavigate } from "react-router-dom";

import Image from "../assets/Profile_Image.jpg";
import Developer_Image from '../assets/Developer_Image.png'
import Footer from "./Footer";


function Home() {

  const navigate = useNavigate();

  const handleHireMeClick = () => {
    navigate("/contact");
  };

  return (
    <>
      <div className="grid place-items-center mx-auto">
        <div className="mt-20 mb-5 relative w-42 h-52  p-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-900 shadow-lg">
          <img
            className=" rounded-full w-full h-full object-cover  border-2 border-white"
            src={Image}
            alt="Profile"
          />
        </div>

        <div className="text-center">
          <h1 className="text-2xl font-mono">Hi there!</h1>
          <h1 className="text-4xl">
            I'm{" "}
            <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
              Nithish kumar
            </span>
          </h1>
          <h3 className=" mt-2 text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
            Frontend Developer
          </h3>
          <button
            onClick={handleHireMeClick}
            className="mt-5 px-4 py-2 cursor-pointer border-2 bg-gradient-to-r from-blue-500 to-blue-900 text-white font-semibold  rounded-lg shadow-md hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 hover:scale-110"
          >
            HIRE ME
          </button>
        </div>

        <div className="mt-15">
          <h1 className="text-4xl text-center">
            Let Me{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
              Introduce
            </span>{" "}
            Myself
          </h1>
          <div className="grid w-2/3 mt-10 mx-auto mb-30">
            <p className="text-xl font-medium text-gray-600 mb-3">
              Developed 5+ frontend React.js applications using Tailwind CSS,
              focusing on responsive design, performance optimization, and clean
              code architecture.
            </p>
            <p className="text-xl font-medium text-gray-600 ">
              Created a featuring interactive gameplay logic, state management
              dynamic data fetching, animated icons, and responsive
              layout,implementing API integration, search filtering UI
              components matching, including menu browsing, cart functionality
              using{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
                React js, Tailwind Css, JavaScript
              </span>{" "}
              and specialties include quick{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
                learning new skills
              </span>{" "}
              and{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
                programming languages
              </span>
            </p>
            <div className="mt-10 flex justify-center">
              <img className="w-100 rounded-xl" src={Developer_Image} alt="" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}


export default Home;
