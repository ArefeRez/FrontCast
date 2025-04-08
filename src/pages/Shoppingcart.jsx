import React, { useContext } from 'react';
import { themeContext } from '../Contexts/ThemeContext';
import { useSelector } from 'react-redux';

const Shoppingcart = () => {
    const {isDark} = useContext(themeContext);
    const token = useSelector((state) =>state.auth.token)
    return (
        <div className={`${isDark ? "bg-[#2a2f38]" : "bg-[#ffffff]"} rounded-[22px] mb-12 pb-10 pr-13 pl-13 w-4/5 mx-auto mt-15`}>
            <p className={`${isDark ? 'text-[#e0e0e0]':'text-[#212121]' }  font-[YekanBakhBold] text-3xl pt-15 mb-10`}>
            سبد خرید
        </p>
        <div className="flex gap-[40%] bg-[#ebf7fc] p-5 rounded-[8px] text-[#1565c0] font-bold font-[iranyekanwebmedium]">
            <p>جمع کل</p>
            <p className="">0 تومان</p>
        </div>
        <button className="text-[#ffffff] bg-[#1976d2]  mt-8 p-4 rounded-[8px] font-[iranyekanwebregular] mx-auto block cursor-pointer">{token ? "اقدام به پرداخت" : "ثبت نام کنید"}  
          </button>
        </div>
    );
}

export default Shoppingcart;
