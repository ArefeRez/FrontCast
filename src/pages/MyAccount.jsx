import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaRegEye } from "react-icons/fa6";
import { RxStarFilled } from "react-icons/rx";
import { themeContext } from "../Contexts/ThemeContext";
import { useForm } from "react-hook-form";
import { CgLayoutGrid } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../Redux/authSlice";

const MyAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { isDark } = useContext(themeContext);
  const [showPass, setshowPass] = useState(false);
  const [showPass1, setshowPass1] = useState(false);
  const loginUser = async (data) => {
    console.log(data);
    try {
     dispatch(userLogin({
      username:data.userName,
      password:data.password
     }))
    } catch (error) {}
  };
  const dispatch = useDispatch()
  const token = useSelector((state)=> state.auth.token)
  return (
    <>
      <div className="w-3/4 mx-auto md:flex gap-7 justify-between  mb-20">
        <div className="w-[100%] md:w-[50%] relative">
          <p
            className={`${
              isDark ? "text-[#e0e0e0]" : "text-[#212121] "
            } font-[iranyekanwebregular] text-[2rem] mb-4`}
          >
            ورود
          </p>
          <div
            className={`${
              isDark ? "bg-[#1a1d24]" : "bg-[#ffffff]"
            }   rounded-[5px] pt-7 pr-5 pl-5`}
          >
            <label
              className={`${
                isDark ? "text-[#e0e0e0]" : "text-[#212121]"
              }  items-center mb-2  font-[iranyekanwebmedium] flex`}
            >
              نام کاربری یا آدرس ایمیل{" "}
              <RxStarFilled className="text-[#aa0000] mr-1 text-[0.6rem]" />
            </label>
            <input
              {...register('userName', { required: "! userName is required" })}
              type="text"
              className="p-3 border w-full rounded-[5px] h-[3rem] border-[#e0e0e0] mb-4"
            />
            {errors.userName && (
              <p className="text-[#e40000] text-[13px]">
                {errors.userName.message}
              </p>
            )}
            <label
              className={`${
                isDark ? "text-[#e0e0e0]" : "text-[#212121]"
              } items-center mb-2  font-[iranyekanwebmedium] flex`}
            >
              {" "}
              گذرواژه{" "}
              <RxStarFilled className="text-[#aa0000] mr-1 text-[0.6rem]" />
            </label>
            <input
              {...register('password', { required: "! password is required" })}
              type={showPass1 ? "text" : "password"}
              className="p-3 border w-full rounded-[5px] h-[3rem] border-[#e0e0e0] mb-4"
            />
            {errors.password && (
              <p className="text-[#e40000] text-[13px] mb-2">
                {errors.password.message}
              </p>
            )}
            <div
              className="absolute bottom-37 left-7 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setshowPass1(!showPass1)}
            >
              {showPass1 ? <FaEyeSlash /> : <FaEye />}
            </div>
            <input
              type="checkbox"
              className="p-3 w-3 h-3 accent-blue-600 items-center ml-1"
            />
            <label
              htmlFor="agree"
              className={`${
                isDark ? "text-[#9ca3af]" : "text-[#212121]"
              } font-[iranyekanwebregular] `}
            >
              مرا به خاطر بسپار
            </label>
            <button
              onClick={handleSubmit(loginUser)}
              className="bg-[#1976d2] font-[iranyekanwebregular] font-bold text-[#ffffff] rounded-[5px] w-full p-3 mt-5 mb-8 cursor-pointer"
            >
              ورود
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[50%] relative">
          <p
            className={`${
              isDark ? "text-[#e0e0e0]" : "text-[#212121] "
            } font-[iranyekanwebregular] text-[2rem] mb-4`}
          >
            عضویت
          </p>
          <div
            className={`${
              isDark ? "bg-[#1a1d24]" : "bg-[#ffffff]"
            }   rounded-[5px] pt-7 pr-5 pl-5`}
          >
            <label
              className={`${
                isDark ? "text-[#e0e0e0]" : "text-[#212121]"
              }  flex  items-center mb-2  font-[iranyekanwebmedium] `}
            >
              {" "}
              آدرس ایمیل{" "}
              <RxStarFilled className="text-[#aa0000] mr-1 text-[0.6rem]" />
            </label>
            <input
              type="text"
              className=" p-3 border w-full rounded-[5px] h-[3rem] border-[#e0e0e0] mb-4"
            />
            <label
              className={`${
                isDark ? "text-[#e0e0e0]" : "text-[#212121]"
              } flex   items-center mb-2  font-[iranyekanwebmedium] `}
            >
              {" "}
              گذرواژه{" "}
              <RxStarFilled className="text-[#aa0000] mr-1 text-[0.6rem]" />
            </label>
            <input
              type={showPass ? "text" : "password"}
              className="p-3 border w-full rounded-[5px] h-[3rem] border-[#e0e0e0] mb-4"
            />
            <div
              className="absolute bottom-37 left-7 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setshowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </div>
            <button className="bg-[#1976d2] font-[iranyekanwebregular] font-bold text-[#ffffff] rounded-[5px] w-full p-3 mt-5 mb-8 cursor-pointer">
              عضویت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyAccount;
