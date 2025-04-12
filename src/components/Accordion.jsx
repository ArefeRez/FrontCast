import React, { useContext, useState } from "react";
import { themeContext } from "../Contexts/ThemeContext";
import { IoIosArrowDown } from "react-icons/io";

const Accordion = ({session}) => {
    const [arrow, setArrow] = useState(false);
    const {isDark} = useContext(themeContext);
  return (
    <div>
      <p onClick={() => setArrow(!arrow)} className={`${isDark ? "bg-[#5c6577] text-[#e0e0e0]" : "bg-[#f8f9fa] text-[#212121] font-[iranyekanwebregular]"} rounded-[5px] p-3 w-[50%]  flex  justify-between items-center cursor-pointer mb-4`}>{session?.title}<IoIosArrowDown  className={`
            text-[1.5rem] transition-transform duration-300
            ${arrow ? "rotate-180 text-[#0c63e4] " : "rotate-0"}
          `} /></p>
      <ul className={`overflow-hidden transition-[60px] duration-700 ease-in-out ${
          arrow
            ? "max-h-60 opacity-100 translate-y-0"
            : "max-h-0  opacity-0"}`}>
        {session.description
         && session?.description.map((item, index) => (
          <li className={`${isDark ? "text-[#9ca3af]" : "text-[#212121]"} flex gap-2 font-[iranyekanwebregular] mt-5 mb-5 `}><span>{index+1+"."}</span><span>{item}</span></li>
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
