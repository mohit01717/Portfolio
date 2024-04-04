import React, { useEffect } from "react";
import { RiGraduationCapFill } from "@remixicon/react";
import Aos from "aos";
import 'aos/dist/aos.css';
const Line = () => {
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
    <div className=" flex flex-col justify-center items-center  relative xl:w-[100%] w-[50px] p-10">
      <div className=" h-16 w-16  bg-black rounded-full flex justify-center items-center ">
        <RiGraduationCapFill color="grey" size={30} />
      </div>

      <div className="border-x-4 border-black bg-black  h-28 "></div>

      <div className="flex justify-center items-center  ">

        <div className="absolute 2xl:left-80  xl:left-80  left-16 " data-aos="fade-left">
          <h1 className="  text-3xl font-bold uppercase">Master Degree</h1>
          <p className="  text-sm font-semibold uppercase text-white">
            AUG 2023 - PRESENT | Lovely University
          </p>
        </div>

        <div className="h-10 w-10 rounded-full border border-black  flex justify-center items-center">
          <div className=" h-3 w-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="border-x-4 border-black bg-black  h-36 "></div>

      <div className="flex justify-center items-center ">
        <div className="h-10 w-10 rounded-full border border-black  flex justify-center items-center">

        <div className="absolute 2xl:left-80  xl:left-80  left-16" data-aos="fade-right">
            <h1 className="  text-3xl font-bold uppercase">BACHELOR DEGREE</h1>
            <p className=" text-sm font-semibold uppercase text-white ">
              NOV 2020 - MAR 2023 | DAVIET
            </p>
          </div>

          <div className=" h-3 w-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="border-x-4 border-black bg-black  h-28 "></div>

      <div className="flex justify-center items-center ">

      <div className="absolute 2xl:left-80  xl:left-80  left-16 " data-aos="fade-left">
          <h1 className="  text-3xl font-bold uppercase">Higher School </h1>
          <p className=" text-sm font-semibold uppercase text-white ">
            APR 2019 - MAR 2020
          </p>
        </div>

        <div className="h-10 w-10 rounded-full border border-black   flex justify-center items-center">
          <div className=" h-3 w-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="border-x-4 border-black bg-black  h-32 "></div>
      <div className="h-9 w-9 rounded-full    bg-black  flex justify-center items-center"></div>
    </div>
  );
};

export default Line;
