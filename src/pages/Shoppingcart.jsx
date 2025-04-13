import React, { useContext } from "react";
import { themeContext } from "../Contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { deleteOrder } from "../Redux/orderSlice";

const Shoppingcart = () => {
  const { isDark } = useContext(themeContext);
  const token = useSelector((state) => state.auth.token);
  const orders = useSelector((state) => state.orders.orders) || [];
  const dispatch = useDispatch();

  const totalPrice = orders.reduce((sum, item) => {
    const total = sum + Number(item.price.replace(/,/g, "")) * item.quantity;
    console.log(total);
    return total
  }, 0);
  console.log(totalPrice.toString());
  return (
    <div
      className={`${
        isDark ? "bg-[#2a2f38]" : "bg-[#ffffff]"
      } rounded-[22px] mb-12 pb-10 pr-13 pl-13 w-4/5 mx-auto mt-15`}
    >
      <p
        className={`${
          isDark ? "text-[#e0e0e0]" : "text-[#212121]"
        }  font-[YekanBakhBold] text-3xl pt-15 mb-10`}
      >
        سبد خرید
      </p>
      <div>
        {orders.length > 0 ? (
          orders.map((item, index) => (
            <div className={` flex justify-between`}>
              <div>{item.title}</div>
              <div>{item.quantity}</div>
              <div>{item.price}</div>
              <BsTrash onClick={()=>dispatch(deleteOrder(item.id))} className="text-red-400" />
            </div>
          ))
        ) : (
          <div>empty</div>
        )}
      </div>
      <div className="flex flex-col md:flex-row text-center md:text-start gap-[40%] bg-[#ebf7fc] p-5 rounded-[8px] text-[#1565c0] font-bold font-[iranyekanwebmedium]">
        <p>جمع کل</p>
        <p>{totalPrice.toLocaleString()} تومان</p>
      </div>
      <button className="text-[#ffffff] bg-[#1976d2]  mt-8 p-4 rounded-[8px] font-[iranyekanwebregular] mx-auto block cursor-pointer">
        {token ? "اقدام به پرداخت" : "ثبت نام کنید"}
      </button>
    </div>
  );
};

export default Shoppingcart;
