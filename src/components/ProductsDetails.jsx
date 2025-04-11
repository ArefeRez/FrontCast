import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { themeContext } from "../Contexts/ThemeContext";
import { CiMoneyBill, CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { BsMortarboard } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaLock, FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useSelector } from "react-redux";

const ProductsDetails = () => {
  const token = useSelector((state) => state.auth.token);
  const [count, setCount] = useState(0);
  const min = () => {
    if (count > 0) setCount(count - 1);
  };
  const params = useParams();
  const [product, setProduct] = useState();
  const { isDark } = useContext(themeContext);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/products/${params.id}`
      );
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("خطا در گرفتن اطلاعات محصول:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);



  return (
    <>
    <div
      className={`${
        isDark ? "bg-[#2a2f38]" : "bg-[#f5f5f5]"
      } p-10 w-3/4 mx-auto flex justify-between  mb-20 font-[YekanBakhMedium] text-[1.2rem] rounded-[15px] gap-5`}
    >
      <div>
        <p
          className={`${
            isDark ? "text-[#e0e0e0]" : "text-[#212121]"
          } font-bold font-[iranyekanwebregular] text-[1.4rem]`}
        >
          {product?.title}
        </p>
        <div
          className={`${
            isDark ? "text-[#9ca3af]" : "text-[#000000]"
          } flex gap-3 justify-between mt-12 mb-8`}
        >
          <div className="flex gap-2 items-center">
            <CiMoneyBill className="text-[1.5rem]" />
            <p>{product?.price}</p>
          </div>
          <div className="flex gap-2 ">
            <BsMortarboard className="text-[1.5rem]" />
            <p>{product?.studentsCount}</p>
          </div>
        </div>
        <div
          className={`${
            isDark ? "text-[#9ca3af]" : "text-[#000000]"
          }  flex gap-2 items-center mb-10`}
        >
          <IoTimeOutline className="text-[1.5rem]" />
          <p>{product?.timeCourse}</p>
        </div>

        <div className="flex gap-2 text-3xl items-center">
          <CiSquarePlus
            onClick={() => setCount(count + 1)}
            className="cursor-pointer"
          />

          <p className="w-8 text-center">{count}</p>

          <CiSquareMinus
            onClick={() => count > 0 && setCount(count - 1)}
            className={`cursor-pointer transition ${
              count === 0 ? "text-gray-400 cursor-not-allowed" : ""
            }`}
          />
        </div>
        <div className="flex gap-2 mt-10 items-center font-[YekanBakhMedium] text-[1rem] cursor-pointer">
          <IoLogoYoutube className="text-2xl " />
          <p className="">مشاهده فصل اول دوره در کانال یوتوب</p>
        </div>
      </div>
      <div className="hidden lg:block">
        {token ? (
          <video
            className="rounded-[15px]"
            controls
            width="500"
            src={"http://localhost:5000" + product?.url}
          ></video>
        ) : (
          <div className="bg-[#d8cece] rounded-[15px] opacity-[0.7] relative">
            <video
            className="rounded-[15px]"
            width="500"
            src={"http://localhost:5000" + product?.url}
            
          ></video>
          <FaLock className=" absolute text-5xl top-[43%] left-[45%] text-[#000000] opacity-100" />
          </div>
          
            
          
        )}
      </div>

    </div>
    <div className={`${isDark ? "bg-[#2a2f38]" : "bg-[#ffffff]"} w-3/4 mx-auto  p-10 rounded-[15px] mb-12`}>
    <p className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} mb-10 font-[iranyekanwebregular]`}>
      {product?. description}
    </p>
    <p className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} font-[iranyekanwebregular] text-2xl`}>سرفصل‌ها</p>
    <div>
      
    </div>
    </div>
    </>
  );
};

export default ProductsDetails;
