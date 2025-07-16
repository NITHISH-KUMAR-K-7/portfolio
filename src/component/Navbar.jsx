import React, { useState } from 'react'
import { FaHome } from "react-icons/fa";
import { FaUser} from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { MdContactMail } from "react-icons/md";
import { Link } from "react-router-dom";


function Navbar() {

  const [showMenu,setShowMenu] = useState(false)

  const HandleClick = ()=>{
    setShowMenu(false)
  }

  return (
    <>
      <header className="w-full sticky top-0 z-50 bg-white shadow-md">
        <nav className="font-serif p-5 relative lg:flex lg:justify-between lg:items-center">
          <Link
            to="/"
            className="text-black text-2xl font-bold cursor-pointer md:text-3xl xl:text-4xl hover:text-transparent hover:bg-clip-text 
               hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-900"
          >
            NITHISH KUMAR K
          </Link>

          <ul
            className={`mt-7 lg:mt-0 font-sans  gap-6 transition-all duration-300 delay-200 ${
              showMenu ? "flex" : "hidden"
            }
              flex-col  lg:flex lg:flex-row lg:items-center`}
          >
            <Link
              to="/"
              onClick={HandleClick}
              className="group flex items-center gap-1 text-xl mb-5 lg:mb-0 cursor-pointer"
            >
              <FaHome className="transition-all duration-300 text-black group-hover:text-blue-600" />
              <span
                className="transition-all duration-300 
                   group-hover:text-transparent 
                   group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r 
                   group-hover:from-blue-500 
                   group-hover:to-blue-900"
              >
                Home
              </span>
            </Link>
            <Link
              to="/about"
              onClick={HandleClick}
              className="group flex items-center gap-1 text-xl mb-5 lg:mb-0 cursor-pointer"
            >
              <FaUser className="transition-all duration-300 text-black group-hover:text-blue-600" />
              <span
                className="transition-all duration-300 
                   group-hover:text-transparent 
                   group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r 
                   group-hover:from-blue-500 
                   group-hover:to-blue-900"
              >
                About
              </span>
            </Link>

            <Link
              to="/project"
              onClick={HandleClick}
              className="group flex items-center gap-1 text-xl mb-5 lg:mb-0 cursor-pointer"
            >
              <FaFileAlt className="transition-all duration-300 text-black group-hover:text-blue-600" />
              <span
                className="transition-all duration-300 
                   group-hover:text-transparent 
                   group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r 
                   group-hover:from-blue-500 
                   group-hover:to-blue-900"
              >
                Project
              </span>
            </Link>
            <Link
              to="/contact"
              onClick={HandleClick}
              className="group flex items-center gap-1 text-xl mb-5 lg:mb-0 cursor-pointer"
            >
              <MdContactMail className="transition-all duration-300 text-black group-hover:text-blue-600" />
              <span
                className="transition-all duration-300 
                   group-hover:text-transparent 
                   group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r 
                   group-hover:from-blue-500 
                   group-hover:to-blue-900"
              >
                Contact
              </span>
            </Link>
            <li className="group flex items-center gap-1 text-xl mb-5 lg:mb-0 cursor-pointer">
              <a
                href="/Nithish_kumar_K.doc.pdf"
                download
                onClick={HandleClick}
                className="group flex items-center gap-1 text-xl mb-5 lg:mb-0 cursor-pointer"
              >
                <FiDownload className="transition-all duration-300 text-black group-hover:text-blue-600" />
                <span
                  className="transition-all duration-300 
                   group-hover:text-transparent 
                   group-hover:bg-clip-text 
                   group-hover:bg-gradient-to-r 
                   group-hover:from-blue-500 
                   group-hover:to-blue-900"
                >
                  Download Resume
                </span>
              </a>
            </li>
          </ul>

          <div
            onClick={() => setShowMenu(!showMenu)}
            className="absolute right-5 top-6 cursor-pointer lg:hidden"
          >
            <div className="w-10 h-1 bg-black mb-1"></div>
            <div className="w-10 h-1 bg-black mb-1"></div>
            <div className="w-10 h-1 bg-black mb-1"></div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar




