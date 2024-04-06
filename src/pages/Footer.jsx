import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-400 p-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <h1 className="xl:text-6xl text-4xl uppercase text-center mb-10 text-white">
          Contact Me
        </h1>
        <div className="flex justify-center items-center flex-wrap gap-10">
          <input
            type="text"
            name="name"
            required
            placeholder="Name"
            className=" outline-none w-[100%] xl:w-[50%] p-2 bg-gray-500 border-b-2"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className=" outline-none w-[100%] xl:w-[50%] p-2  bg-gray-500 border-b-2"
          />

          <textarea
            className=" p-2 resize-none h-[30vh] w-[100%] xl:w-[50%] bg-gray-500 border-b-2 outline-none"
            placeholder="Message"
          />
        </div>
        <button className=" px-8 py-4 border text-white hover:bg-green-500">
          Send Messages
        </button>
       
      </div>
    </div>
  );
};

export default Footer;
