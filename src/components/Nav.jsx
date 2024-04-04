import React, { useState } from "react";
import { RiLinkedinBoxFill,RiTwitterFill,RiGithubFill, RiMenu3Fill } from "@remixicon/react";
import Nav2 from "./Nav2";
import { AnimatePresence } from "framer-motion";
const Nav = () => {
    const [click,setclick] = useState(false);
  return (
    <>
    <nav className="flex justify-between p-5 2xl:justify-around items-center h-[7vh] ">
      <div className=" flex justify-center items-center gap-4 text-3xl">
        <h1 className="text-4xl font-extrabold font-mono text-white"><span className="text-4xl text-blue-600">M</span>G</h1>
         <a href="https://github.com/mohit01717"><RiGithubFill size={30} color={"white"}/></a>
         <a href="https://twitter.com/MohitGagne71334"><RiTwitterFill size={30} color={"white"}/></a>
         <a href="https://www.linkedin.com/in/mohit-gagneja-186927206"><RiLinkedinBoxFill size={30} color={"white"}/></a>
      </div>
      <div>
        <RiMenu3Fill size={30} color={"white"} className=" cursor-pointer" onClick={()=>setclick(prev=>!prev)}/>
      </div>
     
    </nav>
    <AnimatePresence>
    {
      click?<Nav2 click={click} setclick={setclick}/>:null
    }
    </AnimatePresence>
    
    </>
  );
};

export default Nav;
