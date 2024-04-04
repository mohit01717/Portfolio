import React, { useContext } from "react";
import Nav from "../components/Nav";
import { MyContext } from "../MyContext";


const Home = () => {
  const {home} = useContext(MyContext);
  return (
    <div ref={home} className=" bg-gradient-to-r from-violet-500 to-fuchsia-500  h-[100vh] text-white  ">
      <Nav />
      <div className="h-[90vh] flex justify-center flex-col pl-6 lg:pl-20">
        <h1 className="text-[40px] xl:text-9xl md:text-7xl ">
          Hello!
        </h1>
        <h1 className="text-[40px] xl:text-9xl md:text-7xl ">
          I'm Mohit Gagneja
        </h1>
        <h4 className="text-[30px] xl:text-5xl md:text-4xl font-serif pt-4 ">
          FullStack Developer
        </h4>
      </div>
    </div>
  );
};

export default Home;
