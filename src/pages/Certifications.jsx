import React, { useContext } from "react";
import { data } from "../assets/certify_data";
import { MyContext } from "../MyContext";


const Certifications = () => {
  const {certifications} = useContext(MyContext);
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
 

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
