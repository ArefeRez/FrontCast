import { FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { LuInstagram } from "react-icons/lu";
const Footer= () =>{
    return(
        <>
        <div className="w-4/5 mx-auto flex flex-col lg:items-start items-center">
        <div>
            <ul className="text-center flex flex-col md:flex-row font-[iranyekanwebregular] gap-12 mt-12 font-bold">
                <li className="text-[#424242] hover:text-[#0d6efd] cursor-pointer transition duration-350">درباره ما</li>
                <li className="text-[#424242] hover:text-[#0d6efd] cursor-pointer transition duration-350">تماس با ما</li>
                <li className="text-[#424242] hover:text-[#0d6efd] cursor-pointer transition duration-350">شرایط استفاده</li>
                <li className="text-[#424242] hover:text-[#0d6efd] cursor-pointer transition duration-350">وبلاگ</li>
                <li className="text-[#424242] hover:text-[#0d6efd] cursor-pointer transition duration-350">کانال تلگرام</li>
            </ul>
        </div>
        <div className=" mt-12  text-[#424242]">
            <div className="flex font-bold items-center gap-3">
            <p className="font-[iranyekanwebregular] text-[#424242] font-bold ">شبکه‌های اجتماعی :</p>
            <FaTwitter className="cursor-pointer"/>
            <LuInstagram className="cursor-pointer"/>
            <FaTelegram className="cursor-pointer"/>
             <IoLogoYoutube className="cursor-pointer"/>
            <FaLinkedin className="cursor-pointer"/>
            </div>
            <p className="mt-8 font-[YekanBakhMedium]">تمامی حقوق برای فرانت‌کست محفوظ است.</p> 
        </div>
        </div>
        </>
    )
}
export default Footer;