import React, { useContext } from "react";
import Nav from "../components/Nav";
import { MyContext } from "../MyContext";
import Typewriter from "typewriter-effect";

const Home = () => {
  const { home } = useContext(MyContext);
  return (
    <div
      ref={home}
      className=" bg-gradient-to-r from-violet-500 to-fuchsia-500  h-[100vh] text-white  "
    >
      <Nav />
      <div className="h-[90vh] flex justify-center flex-col pl-6 lg:pl-20">
        <Typewriter
          options={{
            strings: "Hello",
            autoStart: true,
            loop: true,
            wrapperClassName: "text-[40px] xl:text-9xl md:text-7xl ",
            delay:0,
            pauseFor:1500,
          }}
        />

        <Typewriter
          options={{
            strings: "I'm Mohit Gagneja",
            autoStart: true,
            loop: true,
           delay:50,
            wrapperClassName: "text-[40px] xl:text-9xl md:text-7xl ",
          }}
        />

        <Typewriter
          options={{
            strings: "FullStack Developer",
            autoStart: true,
            loop: true,
            delay:100,
            wrapperClassName: "text-[40px] xl:text-9xl md:text-7xl ",
          }}
        />
      </div>
    </div>
  );
};

export default Home;
