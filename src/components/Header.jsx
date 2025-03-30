import { Link } from "react-router";
import logo from "/src/assets/frontcast-logo-top.png";
const Header= () => {
    return(
        <>
        <div className="flex justify-between mt-[4%] w-4/5 mx-auto mb-20">
            <div>
            <ul className="flex gap-5 font-bold font-[iranyekanwebregular]">
                <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350 "> <Link to={'/myaccount'}>حساب کاربری</Link> </li>
                <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350">صفحه اصلی</li>
                <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350">دوره‌های آموزشی</li>
                <li className="hover:text-[#0d6efd] cursor-pointer transition duration-350 ">سبد خرید</li>
            </ul>
            </div>
            <div className="w-[20%]"><img src={logo} alt="" /></div>
        </div>
        </>
    )
}
export default Header;