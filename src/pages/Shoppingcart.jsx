import React, { useContext } from "react";
import { themeContext } from "../Contexts/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { BsTrash } from "react-icons/bs";
import { deleteOrder, ordersApi } from "../Redux/orderSlice";
import { useNavigate } from "react-router";

const Shoppingcart = () => {
  const { isDark } = useContext(themeContext);
  const token = useSelector((state) => state.auth.token);
  const orders = useSelector((state) => state.orders.orders) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const totalPrice = orders.reduce((sum, item) => {
    const total = sum + Number(item.price.replace(/,/g, "")) * item.quantity;
    
    return total;
  }, 0);

  const submitOrders = async () => {
    const res =  dispatch(ordersApi(orders));

    if (ordersApi.fulfilled.match(res)) {
        console.log("سفارش شما با موفقیت ثبت شد.");
        alert("سفارش شما با موفقیت ثبت شد.");
    } else {
      alert("مشکلی در انجام ثبت سفارش به وجودآمده است.");
    }
  };
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
            <div className={` md:flex-row flex flex-col justify-between gap-3 mb-8 font-[iranyekanwebregular] text-[1.3rem]`}>
              <div>{item.title}</div>
              <div>{item.quantity}</div>
              <div>{item.price}</div>
              <BsTrash
                onClick={() => dispatch(deleteOrder(item.id))}
                className="text-[#8a0000] text-[30px]"
              />
            </div>
          ))
        ) : (
          <div className=" text-[#9ca3af] flex justify-center mb-12 font-[iranyekanwebregular]  font-bold text-2xl">سبد خرید شما خالی است.</div>
        )}
      </div>
      <div className={`${isDark ? "bg-[#343a44]" : "bg-[#ebf7fc]"} flex flex-col md:flex-row text-center md:text-start gap-[40%]  p-5 rounded-[8px] text-[#1565c0] font-bold font-[iranyekanwebmedium]`}>
        <p>جمع کل</p>
        <p>{totalPrice.toLocaleString()} تومان</p>
      </div>
      <button
        onClick={async () => {
           token ?submitOrders():navigate('/myaccount')
        }}
        className="text-[#ffffff] bg-[#1976d2]  mt-8 p-4 rounded-[8px] font-[iranyekanwebregular] mx-auto block cursor-pointer"
      >
        {token ? "اقدام به پرداخت" : "ثبت نام کنید"}
      </button>
    </div>
  );
};

export default Shoppingcart;
