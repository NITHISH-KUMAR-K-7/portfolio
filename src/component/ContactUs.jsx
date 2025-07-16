import React, { useRef } from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import emailjs from "@emailjs/browser";

function ContactUs() {


    const form = useRef();

    const sendEmail = (e) =>{
      e.preventDefault();

      emailjs
        .sendForm(
          "service_wmz8pc9",
          "template_aczh5uc",
          form.current,
          "qYG_DcArs9uI7KBrV"
        )
        .then(() => {
          alert("Message sent successfully");
          form.current.reset();
        })
        .catch((error) => {
          console.error("EmailJs error:", error);
          alert("Failed to send message");
        });
    }

  return (
    <>
      {/* create form for collect the details  */}
      <div className="min-h-screen w-full bg-gradient-to-b from-sky-100 to-sky-50">
        <div className="grid place-items-center lg:flex justify-around">
          <div className="m-10 mt-20 grid grid-cols-1 w-[40vw]">
            <h1 className="text-3xl font-serif text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-10">
              Contact Us
            </h1>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                placeholder="Your Name"
                name="user_name"
                required
                className="w-full p-4 outline-none border-l-2 border-b-2 border-gray-400 rounded-bl-xl mb-5"
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
                className="w-full p-4 outline-none border-l-2 border-b-2 border-gray-400 rounded-bl-xl mb-5"
              />
              <textarea
                rows="4"
                placeholder="Message"
                name="message"
                required
                className="w-full p-4 outline-none border-l-2 border-b-2 border-gray-400 rounded-bl-xl mb-5"
              />

              <button type="submit" className="border-2 text-gray-600 border-gray-400 px-4 py-1 rounded-xl cursor-pointer hover:scale-110 duration-300 hover:bg-gradient-to-r from-blue-500 to-blue-900 hover:text-white mb-10">
                Send
              </button>
            </form>
          </div>

          {/* creare my contact for viewer Reference */}
          <div className="lg:flex">
            <div className="grid grid-cols-1 ">
              <h1 className="text-3xl font-serif text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900 mb-5 ">
                Get In Touch
              </h1>
              <h3 className="text-xl text-center mb-3">
                <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
                  Email:{" "}
                </span>
                grknithishkumar@mail.com
              </h3>
              <h3 className="text-xl text-center mb-3">
                <span className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-900">
                  Mobile:{" "}
                </span>
                +91 7502426295
              </h3>
              <ul className="flex justify-center items-center gap-5">
                <a href="https://github.com/NITHISH-KUMAR-K-7">
                  <li className="group cursor-pointer hover:scale-110 transition-all duration-300 group-hover:text-blue-600">
                    <FaGithub className="size-6 transition-all duration-300 group-hover:text-blue-700" />
                  </li>
                </a>
                <a href="https://www.linkedin.com/in/nithish-kumar-k-5314b1240/">
                  <li className="group cursor-pointer hover:scale-110">
                    <FaLinkedin className="size-6 transition-all duration-300 group-hover:text-blue-700" />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs