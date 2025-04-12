import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { themeContext } from "../Contexts/ThemeContext";
import { CiMoneyBill, CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { BsMortarboard } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { FaLock, FaRegMinusSquare, FaRegPlusSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useSelector } from "react-redux";
import Accordion from "./Accordion";
import avatar from "../assets/avatar.jpg";
import sadri from "../assets/sadri.jpeg";
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
      <div
        className={`${
          isDark ? "bg-[#2a2f38]" : "bg-[#ffffff]"
        } w-3/4 mx-auto  p-10 rounded-[15px] mb-12`}
      >
        <p
          className={`${
            isDark ? "text-[#e0e0e0]" : "text-[#212121]"
          } mb-10 font-[iranyekanwebregular]`}
        >
          {product?.description}
        </p>
        <p
          className={`${
            isDark ? "text-[#e0e0e0]" : "text-[#212121]"
          } font-[iranyekanwebregular] text-2xl mb-5`}
        >
          سرفصل‌ها
        </p>

        <div>
          {product?.sesions.map((item, index) => (
            <Accordion session={item} />
          ))}
        </div>
        <p
          className={`${
            isDark ? "text-[#e0e0e0]" : "text-[#212121]"
          } font-bold font-[iranyekanwebregular] text-2xl mt-10 mb-8`}
        >
          دیدگاه‌ها:
        </p>
        <div className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"}  border border-[#bdbdbd] rounded-[20px] p-5`}>
          <div className="flex items-center gap-7 mb-9">
            <img className="rounded-[50%]" src={avatar} alt="" />
            <div >
              <p className="mb-4 font-[iranyekanwebmedium] font-bold">meysam</p>
              <p className="font-[iranyekanwebregular]">آذر 19, 1403 در 10:09 ق.ظ</p>
            </div>
          </div>
          <div className="flex justify-between font-[iranyekanwebmedium]">
            <p className="text-[1.1rem]">بسیار عالی و ممنون از حضور مستمر مهندس در عرصه آموزش.</p>
            <button className="cursor-pointer bg-[#ebf7fc] text-[#1565c0] p-2 rounded-[5px]">برای پاسخ دادن وارد شوید</button>
          </div>
        </div>
        <div className={`${isDark ? "bg-[#4f555f]" : "bg-[#f8f9fa] "} border border-[#bdbdbd] rounded-[20px] pl-4 pr-4 pt-7 pb-7 mt-9 w-[90%] mr-auto`}>
          <div className={`${isDark ? "text-[#e0e0e0] bg-[#2a2f38]" : "text-[#212121]"} border border-[#bdbdbd] rounded-[20px] p-5`}>
            <div className="flex items-center gap-7 mb-9">
            <img className="rounded-[50%]" src={sadri} alt="" />
            <div >
              <p className="mb-4 font-[iranyekanwebmedium] font-bold">مسعود صدری</p>
              <p className="font-[iranyekanwebregular]">آذر 19, 1403  در  1:48 ب.ظ</p>
            </div>
            </div>
            <p className="text-[1.1rem] font-[iranyekanwebmedium]">سلام
              </p>
              <p className="text-[1.1rem] font-[iranyekanwebmedium]">ممنونم از لطفتون.</p>
          </div>
        </div>
        <div className={`${isDark ? "bg-[#51555c]" : "bg-[#fafafa]"}  mt-15 rounded-[15px] pt-10 pr-12 p-17 font-[iranyekanwebregular] `}>
          <p className="text-[1.3rem] mb-3">افزودن دیدگاه جدید </p>
          <p className="flex gap-1 text-[1.1rem]">برای نوشتن دیدگاه باید  <p className="text-[#1976d2] cursor-pointer ">  وارد شوید  </p>.</p>
        </div>
      </div>
    </>
  );
};

export default ProductsDetails;
