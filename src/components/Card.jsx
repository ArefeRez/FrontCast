import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { themeContext } from "../Contexts/ThemeContext";

const Card = ({ img, status, title, price }) => {
  const {isDark} = useContext(themeContext);
  return (
    
      <div className={`${isDark ? "bg-[#2a2f38] shadow-lg shadow-black/30" : "bg-[#ffffff]"} w-[100%]  items-center rounded-b-[10px]`}>
        <img className="w-[100%]" src={"http://localhost:5000" + img} alt="" />
        <p className="text-[0.75rem] mr-5 mb-6 mt-5 text-[#1565c0] font-extrabold font-[iranyekanwebregular]">{status}</p>
        <p className={ `${isDark ? "text-[#e0e0e0] hover:text-[#60a5fa]" : "text-[#000000] hover:text-[#0d47a1]"} mb-13 mr-4  font-extrabold font-[iranyekanwebregular] text-[1.2rem]  transition duration-350 cursor-pointer`}>{title}</p>
        <div className="flex justify-between text-[#1565c0] mb-3 mr-4 ml-4 font-extrabold font-[iranyekanwebregular]">
          <p className="bg-[#ebf7fc] rounded-[5px] p-1">{price}</p>
          <div className="flex items-center cursor-pointer"><p className="ml-2">{"مشاهده دوره"}</p>
          <p className=""> <FaArrowLeftLong /></p>
          </div>
          
          
        </div>
      </div>
  );
};

export default Card;