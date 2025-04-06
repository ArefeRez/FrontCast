import { useContext } from "react";
import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
import { themeContext } from "../Contexts/ThemeContext";
const Footer= () =>{
    const {isDark}=useContext(themeContext)
    return(
        <>
        <hr className="w-[86%] mx-auto border-t-2  border-[#eeeeee] " />
        <div className="w-4/5 mx-auto flex flex-col lg:items-start items-center">
        <div>
            <ul className="text-center flex flex-col md:flex-row font-[iranyekanwebregular] gap-12 mt-12 font-bold">

                <li className={`${isDark ? "text-[#e0e0e0] hover:text-[#60a5fa] " : "text-[#424242] hover:text-[#0d6efd] "}  cursor-pointer transition duration-350`}>درباره ما</li>



                <li className={`${isDark ? "text-[#e0e0e0] hover:text-[#60a5fa] " : "text-[#424242] hover:text-[#0d6efd] "}  cursor-pointer transition duration-350`}>تماس با ما</li>
                <li className={`${isDark ? "text-[#e0e0e0] hover:text-[#60a5fa] " : "text-[#424242] hover:text-[#0d6efd] "}  cursor-pointer transition duration-350`}>شرایط استفاده</li>
                <li className={`${isDark ? "text-[#e0e0e0] hover:text-[#60a5fa] " : "text-[#424242] hover:text-[#0d6efd] "}  cursor-pointer transition duration-350`}>وبلاگ</li>
                <li className={`${isDark ? "text-[#e0e0e0] hover:text-[#60a5fa] " : "text-[#424242] hover:text-[#0d6efd] "}  cursor-pointer transition duration-350`}>کانال تلگرام</li>
            </ul>
        </div>
        <div className={`${isDark ? "text-[#e0e0e0]" : "text-[#424242]"} mt-12  `}>
            <div className="flex font-bold items-center gap-3">
            <p className={`${isDark ? "text-[#e0e0e0]" : "text-[#424242]"} font-[iranyekanwebregular] font-bold `}>شبکه‌های اجتماعی :</p>
            <FaTwitter className="cursor-pointer"/>
            <LuInstagram className="cursor-pointer"/>
            <FaTelegram className="cursor-pointer"/>
             <IoLogoYoutube className="cursor-pointer"/>
            <FaLinkedin className="cursor-pointer"/>
            </div>
            <p className="lg:mt-8 mt-30  font-[YekanBakhMedium] mb-27">تمامی حقوق برای فرانت‌کست محفوظ است.</p> 
        </div>
        </div>
        </>
    )
}
export default Footer;