import { useContext } from "react";
import { themeContext } from "../Contexts/ThemeContext";

const Comment = ({img,name,description}) =>{
    const {isDark} = useContext(themeContext);
    return(
        <>
        <div className={`${isDark ? "bg-[#1a1d24]" : "bg-[#ffffff]"} w-[100%]  items-center rounded-[15px]`}>
        <div className="flex mt-5 mr-5 mb-6 items-center">
            <img className="ml-4 font-bold rounded-[100%] " src={img} alt="" />
            <p className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"}  font-[YekanBakhHeavy] `}>{name}</p>
        </div>
        <p className={`${isDark ? "text-[#9ca3af]" : "text-[#424242]"}  p-4 font-[iranyekanwebregular] text-[0.9rem]`}>{description}</p>
        </div>
        </>
    )
}
export default Comment;