import { SlNote } from "react-icons/sl";
import masood from "/src/assets/masood.jpg";
import { IoChatbubbleEllipsesOutline, IoTimeOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { TbListCheck } from "react-icons/tb";
import { Link } from "react-router";
const Home = () => {
  return (
    <>
      <div className="flex w-4/5 mx-auto gap-5">
        <div className="">
          <p className="font-[YekanBakhBold] text-[#212121] text-4xl mb-12">برنامه نویسی به زبان ساده.</p>
  
          <p className="text-[#424242] font-[iranyekanwebregular] text-[1rem] w-[80%]">
            در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید و به
            یک توسعه‌دهنده حرفه‌ای تبدیل شوید.
          </p>
          <button className="text-[#ffffff] bg-[#1976d2] mb-12 mt-8 p-2 rounded-[8px] font-[iranyekanwebregular] font-bold cursor-pointer"><Link to={"/course"}>شروع یادگیری</Link> </button>
          <ul className=" grid-cols-2	md:grid-cols-3 grid w-[100%] text-[17px] gap-4 text-[#0d47a1] font-[YekanBakhHeavy] font-bold">
            <div className="items-center flex">
          <SlNote className="text-[20px]" />
            <li className="mr-2 text-[#212121]">یادگیری با انجام تمرین</li>
            </div>
            <div className="items-center flex">
            <IoTimeOutline className="text-[20px]" />
            <li className="mr-2 text-[#212121]">
            ویدیوهای کوتاه و با کیفیت</li>
            </div>
            <div className="items-center flex">
            <BsWallet2 className="text-[20px]" />
            <li className="mr-2 text-[#212121]">ضمانت بازگشت وجه</li>
            </div>
          <div className="items-center flex"><CiVideoOn className="text-[20px]" />
            <li className="mr-2 text-[#212121]">
            به روز رسانی رایگان</li></div>
            <div className="items-center flex"> <TbListCheck className="text-[20px]" />
            <li className="mr-2 text-[#212121]">سرفصل‌های جامع و دقیق</li></div>
           <div className="items-center flex"><IoChatbubbleEllipsesOutline className="text-[20px]" />
            <li className="mr-2 text-[#212121]">
            پشتیبانی دوره‌ها</li></div>
            
          </ul>
        </div>

        <div className=" lg:block hidden  w-[58%]">
          <img className="rounded-3xl" src={masood} alt="" />
        </div>
      </div>
      <div className=" w-4/5 mx-auto gap-5 mt-40">
        <p className="font-[YekanBakhBold] text-[#212121] text-4xl mb-20">دوره‌های آموزشی</p>
      </div>
    </>
  );
};
export default Home;
