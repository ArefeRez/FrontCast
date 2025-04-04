import { FaArrowLeftLong } from "react-icons/fa6";

const Posts = ({img,title}) => {
    return(
  <div className=" w-[100%] bg-[#ffffff] items-center rounded-[11px]">
    <img className="w-[100%] rounded-t-[11px]" src={img} alt=""/>
    <p className="mb-15 mt-6 mr-4 text-[#000000] font-extrabold font-[iranyekanwebregular] text-[1.2rem] hover:text-[#0d47a1] transition duration-350 cursor-pointer">
      {title}
    </p>
    <div className="mb-5 mr-4 flex items-center cursor-pointer font-[YekanBakhBold] text-[#1565c0]">
      <p className="ml-2">{"ادامه پست"}</p>
      <p className="text-[0.8rem]">
        <FaArrowLeftLong />
      </p>
    </div>
  </div>
  )
};
export default Posts;
