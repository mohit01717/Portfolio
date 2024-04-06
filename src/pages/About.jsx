import React, { useContext, useState } from "react";
import {
  RiEyeFill,
  RiPencilFill,
  RiFlightTakeoffLine,
  RiMusic2Fill,
  RiCupFill,
} from "@remixicon/react";
import mohit from "../assets/mohit.png";
import { MyContext } from "../MyContext";
import Resume from "../components/Resume";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    Aos.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  const { about } = useContext(MyContext);
  const [click, setclick] = useState({
    drawing: false,
    traveling: false,
    music: false,
    cofee: false,
  });
  const [open, setopen] = useState(false);

  return (
    <section ref={about} className=" bg-black text-white relative" id="about">
      <div className=" flex xl:flex-row flex-col justify-center xl:gap-40 gap-10 p-10 ">
        <div className="flex flex-col place-items-center gap-5">
          <div
            className="xL:h-[500px] xl:w-[300px]  border-8 border-green-400"
            data-aos="fade-right"
          >
            <img
              src={mohit}
              alt="mohit"
              className="h-full w-full object-contain"
            />
          </div>
          <div
            className="flex justify-center items-center gap-3  px-5 py-2 border  cursor-pointer hover:bg-green-400 "
            onClick={() => setopen((prev) => !prev)}
          >
            <RiEyeFill />
            <button className="text-xl">View Resume</button>
          </div>
        </div>
        {open && <Resume setopen={setopen} />}
        <div className="flex flex-col gap-4" data-aos="fade-left">
          <h1 className="xl:text-6xl text-4xl uppercase">About Me</h1>
          <p className=" xl:w-[400px] w-full  text-[16px] xl:text-xl">
            Hello! I’m Mohit Gagneja. Experienced with all stages of the
            development cycle for dynamic web projects. Having an in-depth
            knowledge including advanced HTML5, CSS3, JavaScript, jQuery, React
            JS.
          </p>

          <div className="flex gap-2 xl:text-xl  ">
            <h1 className="uppercase font-semibold text-green-600">Name:</h1>
            <h1>Mohit Gagneja</h1>
          </div>

          <div className="flex gap-2 xl:text-xl  ">
            <h1 className="uppercase font-semibold text-green-600">
              Date of Birth:
            </h1>
            <h1>4 December 2001</h1>
          </div>
          <div className="flex gap-2 xl:text-xl  ">
            <h1 className="uppercase font-semibold text-green-600">
              Nationality:
            </h1>
            <h1>Indian</h1>
          </div>
          <div className="flex gap-2 xl:text-xl  ">
            <h1 className="uppercase font-semibold text-green-600">Address:</h1>
            <h1>14-A JP Nagar Jalandhar,Punjab,India</h1>
          </div>
          <div className="flex gap-2 xl:text-xl  ">
            <h1 className="uppercase font-semibold text-green-600">Phone:</h1>
            <h1>+91-623954619</h1>
          </div>
          <div className="flex gap-2 xl:text-xl  ">
            <h1 className="uppercase font-semibold text-green-600">Email:</h1>
            <h1>mohitgagneja943@gmail.com</h1>
          </div>
        </div>
      </div>
      <h1 className="text-2xl xl:text-4xl uppercase self-start px-10 xl:px-20 ">
        My Interests
      </h1>
      <div className="flex flex justify-center items-center gap-10 p-10 h-[30vh] flex-wrap">
      
      
        <div className="flex flex-col gap-20 justify-center  items-center  gap-4">
          <div
            className=" h-16 w-16 bg-slate-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-green-500 "
            onMouseEnter={() => setclick({ ...click, drawing: true })}
            onMouseLeave={() => setclick({ ...click, drawing: false })}
          >
            <RiPencilFill />
          </div>
          {click.drawing ? <h1 data-aos="zoom-in">Drawing</h1> : null}
        </div>
        <div className=" flex flex-col items-center  gap-4">
          <div
            className=" h-16 w-16 bg-slate-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-green-500"
            onMouseEnter={() => setclick({ ...click, traveling: true })}
            onMouseLeave={() => setclick({ ...click, traveling: false })}
          >
            <RiFlightTakeoffLine />
          </div>
          {click.traveling ? <h1 data-aos="zoom-in">Travelling</h1> : null}
        </div>
        <div className=" flex flex-col items-center  gap-4">
          <div
            className=" h-16 w-16 bg-slate-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-green-500"
            onMouseEnter={() => setclick({ ...click, music: true })}
            onMouseLeave={() => setclick({ ...click, music: false })}
          >
            <RiMusic2Fill />
          </div>
          {click.music ? <h1 data-aos="zoom-in">Music</h1> : null}
        </div>
        <div className=" flex flex-col items-center  gap-4">
          <div
            className=" h-16 w-16 bg-slate-500 rounded-full flex justify-center items-center cursor-pointer hover:bg-green-500"
            onMouseEnter={() => setclick({ ...click, cofee: true })}
            onMouseLeave={() => setclick({ ...click, cofee: false })}
          >
            <RiCupFill />
          </div>
          {click.cofee ? <h1 data-aos="zoom-in">Coffee</h1> : null}
        </div>
      </div>
    </section>
  );
};

export default About;
