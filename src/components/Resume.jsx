import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
import { RiCloseLine } from "@remixicon/react";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import cv from "../assets/cv/cv.pdf";

const Resume = ({ setopen }) => {
  return (
    <div className=" flex  flex-col place-items-center p-5 bg-black  opacity-95  w-full absolute z-50 top-0 ">
      <div className="flex justify-end items-start p-5 w-full">
       
        <RiCloseLine
          size={50}
          className=" hover:text-gray-500 cursor-pointer"
          onClick={() => setopen((prev) => !prev)}
        />
      </div>
      

      <Document file={cv} onLoadError={console.error}>
        <Page pageIndex={0} />
      </Document>
    </div>
  );
};

export default Resume;
