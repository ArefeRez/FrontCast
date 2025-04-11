import { useContext, useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";
import { themeContext } from "../Contexts/ThemeContext";

const Course= ( { img, status, title, price }) =>{
  const {isDark} = useContext( themeContext);
    const [Course, setCourse] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((Response) => {
        setCourse(Response.data);
      })
      .catch((error) => {
        console.error("خطا در دریافت داده:", error);
      });
  }, []);
    return(
        <>
        <div className=" w-4/5 mx-auto gap-5 mt-40">
        <p className={`${isDark ? 'text-[#e0e0e0]':'text-[#212121]' } font-[YekanBakhBold] text-4xl mb-20`}>
          دوره‌های آموزشی
        </p>
      </div>
        <div className=" mb-30 gap-7 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Course.map((card, index) => (
          <Card
            title={card.title}
            status={card.status}
            img={card.thumbnail}
            price={card.price}
            id={card.id}
          />
        ))}
      </div>
      </>
    )
}
export default Course;