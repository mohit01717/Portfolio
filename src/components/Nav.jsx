import React, { useEffect, useState } from "react";
import { RiLinkedinBoxFill,RiTwitterFill,RiGithubFill, RiMenu3Fill } from "@remixicon/react";
import Nav2 from "./Nav2";
import Aos from "aos";
import 'aos/dist/aos.css';

const Nav = () => {
    const [click,setclick] = useState(false);
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
    <>
    <nav className="flex justify-between p-5 2xl:justify-around items-center h-[7vh]"  data-aos="fade-right">
      <div className=" flex justify-center items-center gap-4 text-3xl">
        <h1 className="text-4xl font-extrabold font-mono text-white"><span className="text-4xl text-black">M</span>G</h1>
         <a href="https://github.com/mohit01717"><RiGithubFill size={30} color={"white"}/></a>
         <a href="https://twitter.com/MohitGagne71334"><RiTwitterFill size={30} color={"white"}/></a>
         <a href="https://www.linkedin.com/in/mohit-gagneja-186927206"><RiLinkedinBoxFill size={30} color={"white"}/></a>
      </div>
      <div>
        <RiMenu3Fill size={30} color={"white"} className=" cursor-pointer" onClick={()=>setclick(prev=>!prev)}/>
      </div>
     
    </nav>
   
    {
      click?<Nav2 click={click} setclick={setclick}/>:null
    }

    </>
  );
};

export default Nav;
