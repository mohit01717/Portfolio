import React, { useContext } from 'react'
import { projects_data } from '../assets/projects_data';
import { MyContext } from '../MyContext';


const Projects = () => {
  const {projects} = useContext(MyContext);
  return (
    <section ref={projects} className=" bg-slate-900 p-10" id='projects'> 
      <div>
      <h1 className='xl:text-6xl text-4xl uppercase text-center mb-10 text-white'>Projects</h1>

      </div>

      <div className=" flex justify-around items-center flex-wrap gap-10">
      {
        projects_data.map((e)=>{
            return(
            <Card_Certify title={e.title} image={e.image} desc={e.desc} link={e.link} key={e.id} />
            )
        })
      }
       
      </div>
    </section>
  )
}

export default Projects;
const Card_Certify = ({image,title,desc,link}) => {
    return (
      <>
   
  


   <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
    <a href="#">
        <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{desc}</p>
        <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Github
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

  
      </>
    );
  };
  