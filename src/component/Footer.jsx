import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
function Footer() {
  return (
    <>
      <div className="bg-blue-200 w-full text-center p-20">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-medium text-gray-700">Get In Touch</h1>
          </div>
          <div className="flex justify-center items-center gap-5">
            <a href="https://github.com/NITHISH-KUMAR-K-7">
              <FaGithub className="size-10 cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/nithish-kumar-k-5314b1240/">
              <FaLinkedin className="size-10 cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-110" />
            </a>
            <a href="mailto:grknithishkumar@gmail.com">
              <AiOutlineMail className="size-10 cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-110" />
            </a>
            <a href="tel:+917502426295">
              <AiOutlinePhone className="size-10 cursor-pointer transition-all duration-300 hover:text-blue-700 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer