import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { themeContext } from "./Contexts/ThemeContext";

const Layout=({children})=>{
const {isDark} = useContext(themeContext);
console.log(isDark)
    return(
        <div className={`${isDark?'bg-[#0f1117] text-[#e0e0e0] ':'bg-[#f8f9fa] '} `}>
        <Header/>
        {children}
        <Footer/>
        </div>
    )
}
export default Layout;