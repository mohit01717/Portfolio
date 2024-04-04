import React, { useContext } from "react";
import { RiCloseLine } from "@remixicon/react";
import { MyContext } from "../MyContext";
import { motion } from "framer-motion";
const Nav2 = ({ setclick }) => {
  const { home, about, education, certifications, projects } =
    useContext(MyContext);
  return (
    <nav className="bg-black opacity-95 h-full w-full absolute top-0 ">
      <div className="flex justify-end items-start h-24 p-5">
        <RiCloseLine
          size={50}
          className=" hover:text-gray-500 cursor-pointer"
          onClick={() => setclick((prev) => !prev)}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 top-0 z-auto pt-10">
        <div
          className="text-3xl cursor-pointer hover:text-4xl hover:transition-transform hover:text-gray-500"
          onClick={() => home.current?.scrollIntoView({ behavior: "smooth" })}
        >
          Home
        </div>
        <div
          className="text-3xl cursor-pointer hover:text-4xl hover:transition-transform hover:text-gray-500"
          onClick={() => about.current?.scrollIntoView({ behavior: "smooth" })}
        >
          About
        </div>
        <div
          className="text-3xl cursor-pointer hover:text-4xl hover:transition-transform hover:text-gray-500"
          onClick={() =>
            education.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Education
        </div>
        <div
          className="text-3xl cursor-pointer hover:text-4xl hover:transition-transform hover:text-gray-500"
          onClick={() =>
            education.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Resume
        </div>
        <div
          className="text-3xl cursor-pointer hover:text-4xl hover:transition-transform hover:text-gray-500"
          onClick={() =>
            certifications.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Certifications
        </div>
        <div
          className="text-3xl cursor-pointer hover:text-4xl hover:transition-transform hover:text-gray-500"
          onClick={() =>
            projects.current?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Projects
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
