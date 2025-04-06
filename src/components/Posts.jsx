import { useContext } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { themeContext } from "../Contexts/ThemeContext";

const Posts = ({img,title}) => {
  const {isDark} = useContext(themeContext);
    return(
  <div className={`${isDark ? "bg-[#2a2f38]" : "bg-[#ffffff] "} w-[100%] items-center rounded-[11px]`}>
    <img className="w-[100%] rounded-t-[11px]" src={img} alt=""/>
    <p className={`${isDark ? "text-[#e0e0e0] hover:text-[#60a5fa]" : "text-[#000000] hover:text-[#0d47a1]"} mb-15 mt-6 mr-4 font-extrabold font-[iranyekanwebregular] text-[1.2rem] transition duration-350 cursor-pointer`}>
      {title}
    </p>
    <div className="mb-5 mr-4 flex items-center cursor-pointer font-[YekanBakhBold] text-[#1565c0]">
      <p className="ml-2">{"ادامه پست"}</p>
      <p className="text-[0.8rem]">
        <FaArrowLeftLong />
      </p>
    </div>
  </div>
  )
};
export default Posts;
