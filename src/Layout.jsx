import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout=({children})=>{
    return(
        <div className="bg-[#f8f9fa]">
        <Header/>
        {children}
        <Footer/>
        </div>
    )
}
export default Layout;