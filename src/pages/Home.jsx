import { SlNote } from "react-icons/sl";
import masood from "/src/assets/masood.jpg";
import { IoChatbubbleEllipsesOutline, IoTimeOutline } from "react-icons/io5";
import { BsWallet2 } from "react-icons/bs";
import { CiVideoOn } from "react-icons/ci";
import { TbListCheck } from "react-icons/tb";
import { Link } from "react-router";
import Card from "../components/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Comment from "../components/Comment";
import img1 from "/src/assets/img1.jpg";
import img2 from "/src/assets/img2.jpg";
import img3 from "/src/assets/img3.jpg";
import img4 from "/src/assets/img4.jpg";
import img5 from "/src/assets/img5.jpg";
import img6 from "/src/assets/img6.jpg";
import Posts from "../components/Posts";
import img11 from "/src/assets/img11.png";
import img12 from "/src/assets/img12.png";
import img13 from "/src/assets/img13.png";
import { useContext } from "react";
import { themeContext } from "../Contexts/ThemeContext";
import { useSelector } from "react-redux";
const Home = () => {
  const {isDark}=useContext(themeContext)
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((Response) => {
        setCards(Response.data);
      })
      .catch((error) => {
        console.error("خطا در دریافت داده:", error);
      });
  }, []);
  const commentList = [
    {
      id: 1,
      img: img1,
      name: "علی جلالی",
      description:
        "من در چند دوره‌ی ویدیویی و حضوری آموزش برنامه نویسی شرکت کرده بودم، ولی با حضور در دوره‌های ری‌اکت و نود جی‌اس استاد صدری به عمیق‌ترین مفاهیم برنامه نویسی جاوااسکریپت پی بردم. روش تدریس ایشون رو تا به حال در هیچ کدوم از دوره‌های مشابه ندیده بودم. از مفاهیم بسیار ساده شروع شده و پله پله بدون اینکه کسی لحظه‌ای از کلاس عقب بمونه تمام حاضرین رو تا رسیدن به پیشرفته‌ترین مراحل با خودشون همراه می‌کردن. من به شخصه کل پیشرفت‌هایی که در زمینه برنامه نویسی داشتم رو مدیون ایشون هستم. بعد از اتمام دوره‌ها توسط ایشون به یک شرکت دانش بنیان معرفی شدم و هم اکنون با این شرکت در حال همکاری هستم.",
    },
    {
      id: 2,
      img: img2,
      name: "سودا مجتهدی",
      description:
        "یکی از دلایل مهمی که باعث تمایز دوره‌های فرانت کست از بقیه می‌شه تایم کوتاه ویدیوها و کیفیت بسیار بالای اون‌هاست. به شکلی که پیچیده‌ترین مفاهیم به‌صورت خیلی ساده به دانشجو منتقل می‌شه و دلیل این هم فقط تسلط بسیار عالی استاد صدری روی مباحث و قدرت انتقال قوی ایشون هست. این موضوع خیلی کمک می‌کنه که فرآیند یادگیری اصلا خسته‌کننده نباشه. همینطور چالش‌ها و تمرین‌هایی که در طول دوره مطرح می‌شه خیلی کمک می‌کنه تا یادگیری مفاهیم به شکل عمیق صورت بگیره و یه انگیزه خیلی قوی هم برای ادامه دادن مسیر هست.",
    },
    {
      id: 3,
      img: img3,
      name: "پرستو پورمحمد",
      description:
        "یکی از معدود اساتیدی که واقعا براشون مهمه که دانشجوها مطلب رو دقیق و کامل یاد بگیرن، برای همین با مطرح کردن سوالات و تمرین‌های متنوع و مفید، انگیزه قوی برای یادگیری ایجاد می کنن که نوع تدریس، نشان دهنده تسلط کامل روی مطلب هست. همیشه روی کد نویسی اصولی خیلی تاکید می‌کنن که این کار، برای دسترسی سریع به کدها و رفع خطای کد خیلی مهم و کاربردی هست، برای خود منم توجه به این موضوع خیلی مفید بوده همیشه.",
    },
    {
      id: 4,
      img: img4,
      name: "مجتبی فرجپور",
      description:
        "در كلاس طراحى و مبانى برنامه نويسى وب با استاد صدرى آشنا شدم و با توجه به تسلط كامل و قدرت بيان قوى علاقه‌ام به برنامه نويسى بيشتر شد و دوره هاى جاوااسكريپت و ري‌اكت را با جناب آقاى صدرى ادامه دادم و الان تو شركت دانش بنيان مشغول به كار هستم. پيشنهاد مي‌كنم اگر واقعا علاقه‌مند به برنامه نويسى هستيد دوره‌هاى آقاى صدرى را از دست ندید.",
    },
    {
      id: 5,
      img: img5,
      name: "شبنم میرزایی",
      description:
        "در کلاس جاوا اسکریپت با استاد صدری آشنا شدم. تدریس عالی و تشویقهای مستمرشون باعث شد بعد از وقفه طولانی دوباره به سمت برنامه نویسی برگردم. در کلاسهای نود ایشون شرکت کردم و علاوه بر اون از ویدیوهای آموزشی ری اکت و آخرین ویدیوهای بی نظیر نود ایشون استفاده زیادی بردم. خیلی خیلی خوشحالم که باهاشون آشنا شدم؛ کاش که خیلیی زودتر این اتفاق افتاده بود.",
    },
    {
      id: 6,
      img: img6,
      name: "محمد مهدی ملک زاده",
      description:
        "زبان جاوااسکریپت رو با اولین دوره‌ی فرانت‌کست یعنی شروع برنامه نویسی با جاوااسکریپت شروع کردم. همونجا بود که بخاطر سبک تدریس فوق‌العاده استاد صدری، علاقه بسیار زیادی به این زبان پیدا کردم و خیلی راحت یاد گرفتم. در ادامه وقتی خواستم Node و React رو شروع کنم از ویدئوهای استاد صدری استفاده کردم و همیشه فرانت‌کست، بهترین گزینه من برای زمانی بود که میخواستم تکنولوژی جدیدی رو یاد بگیرم. این دوره‌ها به قدری کامل هستن که نیازی به هیچ منبع دیگه‌ای نیست و میشه خیلی راحت میشه پروژه کار کرد. حتی وقتی بخوای تو تکنولوژی‌ای عمیق‌تر بشی، بخاطر پایه قوی‌ای که این ویدئوها ایجاد میکنن، کار خیلی سریع و راحت میشه.",
    },
  ];
  const PostsList = [
    { id: 1, img: img11, title: "ساخت API با Next.js" },
    { id: 1, img: img12, title: "بررسی Generator در جاوااسکریپت" },
    { id: 1, img: img13, title: "پیاده‌سازی SSR در ۷ React Router" },
  ];

  return (
    <>
      <div className="flex w-4/5 mx-auto gap-5 ">
        <div className="mt-10">
          <p className={`${isDark ? 'text-[#e0e0e0]':'text-[#212121]' } font-[YekanBakhBold] text-4xl mb-12`} >
            برنامه نویسی به زبان ساده.
          </p>

          <p className={`${isDark ? "text-[#9ca3af]" : "text-[#424242]"} font-[iranyekanwebregular] text-[1rem] w-[80%]`}>
            در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید و به
            یک توسعه‌دهنده حرفه‌ای تبدیل شوید.
          </p>
          <button className="text-[#ffffff] bg-[#1976d2] mb-12 mt-8 p-2 rounded-[8px] font-[iranyekanwebregular] font-bold cursor-pointer">
            <Link to={"/course"}>شروع یادگیری</Link>{" "}
          </button>
          <ul className=" grid-cols-2	md:grid-cols-3 grid w-[100%] text-[17px] gap-4 text-[#0d47a1] font-[YekanBakhHeavy] font-bold">
            <div className="items-center flex">
              <SlNote className="text-[20px]" />
              <li className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} mr-2 `}>یادگیری با انجام تمرین</li>
            </div>
            <div className="items-center flex">
              <IoTimeOutline className="text-[20px]" />
              <li className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} mr-2 `}>ویدیوهای کوتاه و با کیفیت</li>
            </div>
            <div className="items-center flex">
              <BsWallet2 className="text-[20px]" />
              <li className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} mr-2 `}>ضمانت بازگشت وجه</li>
            </div>
            <div className="items-center flex">
              <CiVideoOn className="text-[20px]" />
              <li className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} mr-2 `}>به روز رسانی رایگان</li>
            </div>
            <div className="items-center flex">
              {" "}
              <TbListCheck className="text-[20px]" />
              <li className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} mr-2 `}>سرفصل‌های جامع و دقیق</li>
            </div>
            <div className="items-center flex">
              <IoChatbubbleEllipsesOutline className="text-[20px]" />
              <li className={`${isDark ? "text-[#e0e0e0]" : "text-[#212121]"} mr-2 `}>پشتیبانی دوره‌ها</li>
            </div>
          </ul>
        </div>

        <div className=" lg:block hidden  w-[58%]">
          <img className="rounded-3xl" src={masood} alt="" />
        </div>
      </div>
      <div className=" w-4/5 mx-auto gap-5 mt-40">
        <p className={`${isDark ? 'text-[#e0e0e0]':'text-[#212121]' } font-[YekanBakhBold] text-4xl mb-20`}>
          دوره‌های آموزشی
        </p>
      </div>
      <div className=" gap-7 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.slice(0, 6).map((card, index) => (
          <Card
            title={card.title}
            status={card.status}
            img={card.thumbnail}
            price={card.price}
            key={card.id || index}
            id={card.id}
          />
        ))}
      </div>
      <button className="text-[#ffffff] bg-[#1976d2] mb-12 mt-10 p-2 rounded-[8px] font-[iranyekanwebregular] mx-auto block cursor-pointer hover:bg-[#0d47a1] transition duration-350">
        <Link to={"/course"}>مشاهده همه دوره‌های آموزشی</Link>{" "}
      </button>
      <div className=" w-4/5 mx-auto gap-5 mt-40">
        <p className={`${isDark ? 'text-[#e0e0e0]':'text-[#212121]' } font-[YekanBakhBold] text-4xl mb-20`}>
          از زبان دانشجویان فرانت کست
        </p>
      </div>
      <div className="gap-7 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {commentList.map((comment, index) => (
          <Comment
            img={comment.img}
            name={comment.name}
            description={comment.description}
          />
        ))}
      </div>
      <div className=" w-4/5 mx-auto gap-5 mt-40">
        <p className={`${isDark ? 'text-[#e0e0e0]':'text-[#212121]' } font-[YekanBakhBold] text-4xl mb-20`}>
          پست‌های فرانت کست
        </p>
        <p className={`${isDark ? "text-[#9ca3af]" : "text-[#212121]"} flex mr-4 mb-20  font-[iranyekanwebregular]`}>
          برای مشاهده پست‌های بیشتر لطفا به{" "}
          <p className="text-[#1976d2] cursor-pointer">وبلاگ مراجعه کنید </p>.
        </p>
      </div>
      <div className="gap-7 w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-25">
        {PostsList.map((posts, index) => (
          <Posts img={posts.img} title={posts.title}  key={posts.id || index}/>
        ))}
      </div>
      

    </>
  );
};
export default Home;
