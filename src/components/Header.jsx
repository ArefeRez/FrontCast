import { Link } from "react-router";
import logo from "/src/assets/frontcast-logo-top.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
const Header = () => {
  const [burgerMenu, setburgerMenu] = useState(false);
  return (
    <div className='w-4/5 mx-auto mb-20 mt-[6%]'>
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
          <div className=" hidden lg:block text-2xl bg-[#c7d8e9] w-20  p-2 rounded-4xl">
            <button className="ml-3" ><IoSunnyOutline /></button>
            <button ><IoMoonOutline /></button>
          </div>
        </div>

         
          <img src={logo} className="max-h-8" alt="" />
        
      </div>
      <div
        className={`block lg:hidden w-full bg-[#eee] rounded-b-lg overflow-hidden transition-[60px] duration-700 ease-in-out ${
          burgerMenu
            ? "max-h-60 opacity-100 translate-y-0"
            : "max-h-0  opacity-0"
        }`}
      >
        {burgerMenu && (
          <ul className=" flex flex-col gap-5 p-5 font-bold text-[#212121] font-[iranyekanwebregular]">
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
