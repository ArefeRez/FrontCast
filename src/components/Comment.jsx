const Comment = ({img,name,description}) =>{
    return(
        <>
        <div className="w-[100%] bg-[#ffffff] items-center rounded-[15px]">
        <div className="flex mt-5 mr-5 mb-6 items-center">
            <img className="ml-4 font-bold rounded-[100%] " src={img} alt="" />
            <p className="font-[YekanBakhHeavy] text-[#212121]">{name}</p>
        </div>
        <p className="text-[#424242] p-4 font-[iranyekanwebregular] text-[0.9rem] ">{description}</p>
        </div>
        </>
    )
}
export default Comment;