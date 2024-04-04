import React from "react";
import { RiGraduationCapFill } from "@remixicon/react";
const Line = () => {
  return (
    <div className=" flex flex-col justify-center items-center  relative xl:w-[100%] w-[50px] p-10">
      <div className=" h-16 w-16  bg-black rounded-full flex justify-center items-center ">
        <RiGraduationCapFill color="grey" size={30} />
      </div>

      <div className="border-x-4 border-black bg-black  h-28 "></div>

      <div className="flex justify-center items-center  ">

        <div className="absolute 2xl:left-80  xl:left-80  left-16 " initial={{scale:0}} animate={{scale:1}} transition={{duration:2,delay:1}}>
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

        <div className="absolute 2xl:left-80  xl:left-80  left-16" initial={{scale:0}} animate={{scale:1}} transition={{duration:2,delay:2}}>
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

      <div className="absolute 2xl:left-80  xl:left-80  left-16 ">
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
