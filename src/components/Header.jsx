import { Link } from "react-router";
import logo from "/src/assets/frontcast-logo-top.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext, useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { themeContext } from "../Contexts/ThemeContext";
const Header = () => {
  const [burgerMenu, setburgerMenu] = useState(false);
const theme = useContext(themeContext);
const {isDark}=useContext(themeContext)



  return (
    <div className='w-4/5 mx-auto mb-15 pt-[6%]'>
      <div className="flex justify-between items-center ">
        <div className="hidden lg:block">
          <ul className="flex gap-5 font-bold items-center font-[iranyekanwebregular] ">
            <li className="text-[#ffffff] p-2 rounded-[6px] hover:bg-[#1565c0] bg-[#1976d2] cursor-pointer transition duration-350 ">
              {" "}
              <Link to={"/myaccount"}>حساب کاربری</Link>{" "}
            </li>
            <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350">
              <Link to={"/"}>صفحه اصلی</Link>
            </li>
            <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350">
              <Link to={"/course"}>دوره‌های آموزشی</Link>
            </li>
            <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350 ">
              <Link to={"/cart"}>سبد خرید</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <div
            onClick={() => setburgerMenu(!burgerMenu)}
            className="block lg:hidden opacity-[0.55]"
          >
            <RxHamburgerMenu className="pl-2 pr-2 rounded-[5px] font-bold text-4xl w-11  border-1 border-[#0000008c]" />
          </div>
          
        </div>

         <div className="flex gap-3 items-center">
          <div onClick={()=>theme.toggleTheme()} className="flex justify-between text-[1.2rem]  text-2xl  p-1 rounded-4xl items-center">
            <button className={`${isDark ? "text-[#ffffff] bg-[#34373d] " : "text-[#000000] bg-[#c7d8e9]"} rounded-[100%]  p-3`} >{isDark ? <IoSunnyOutline /> : <IoMoonOutline />}</button>
          </div>
          <img src={logo} className="max-h-8" alt="" />
          </div>
          
        
      </div>
      <div
        className={`${isDark ? "bg-[#1a1d24]" : "bg-[#eee]"} block lg:hidden w-full  rounded-b-lg overflow-hidden transition-[60px] duration-700 ease-in-out ${
          burgerMenu
            ? "max-h-60 opacity-100 translate-y-0"
            : "max-h-0  opacity-0"
        }`}
      >
        {burgerMenu && (
          <ul className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} flex flex-col gap-5 p-5 font-bold  font-[iranyekanwebregular]`}>
            <li className="p-2 rounded-[6px] w-28 hover:bg-[#1565c0] text-[#ffffff] bg-[#1976d2] cursor-pointer transition duration-350">
              {" "}
              <Link to={"/myaccount"}>حساب کاربری</Link>{" "}
            </li>
            <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350">
              <Link to={"/"}>صفحه اصلی</Link>
            </li>
            <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350">
              <Link to={"/course"}>دوره‌های آموزشی</Link>
            </li>
            <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350 ">
              <Link to={"/cart"}>سبد خرید</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
export default Header;
