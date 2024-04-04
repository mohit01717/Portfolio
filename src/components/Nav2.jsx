import React, { useContext,useEffect } from "react";
import { RiCloseLine } from "@remixicon/react";
import { MyContext } from "../MyContext";
import Aos from "aos";
import 'aos/dist/aos.css';

const Nav2 = ({ setclick }) => {
  const { home, about, education, certifications, projects } =
    useContext(MyContext);
    useEffect(() => {
      Aos.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      });
    }, []);
  return (
    <nav className="bg-black opacity-95 h-full w-full absolute top-0 "  data-aos="zoom-in">
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
