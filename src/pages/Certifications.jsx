import React, { useContext, useEffect } from "react";
import { data } from "../assets/certify_data";
import { MyContext } from "../MyContext";
import Aos from "aos";
import 'aos/dist/aos.css';

const Certifications = () => {
  const {certifications} = useContext(MyContext);
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
    <section  ref={certifications} className=" bg-slate-700 p-10" id="certifications"> 
      <div>
      <h1 className='xl:text-6xl text-4xl uppercase text-center mb-10 text-white'>Certifications</h1>

      </div>

      <div className=" flex justify-around items-center flex-wrap gap-10">
      {
        data.map((e)=>{
            return(
            <Card_Certify name={e.name} image={e.image} key={e.id} />
            )
        })
      }
       
      </div>
    </section>
  );
};

export default Certifications;
const Card_Certify = ({image,name}) => {
  return (
    <>
 

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"  data-aos="zoom-in">
    <a href="#">
        <img className="rounded-t-lg" src={image} alt={name} />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        
       
    </div>
</div>

    </>
  );
};
