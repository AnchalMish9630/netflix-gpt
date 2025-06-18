const VideoTitle = ({title, overview})=>{
   
    return(
        <div className="w-screen aspect-video absolute pt-[15%] md:pl-24 pl-6  text-[#fff] bg-gradient-to-r from-black">
            <div className="pt-20 md:pt-0 text-2xl md:text-6xl font-bold">{title}</div>
            <p className="hidden md:inline-block py-6 font-normal w-1/4 text-2xl">{overview}</p>
            <div className="my-2 md:m-0">
            <button className=" bg-gray-200 md:text-black text-gray-500 md:mr-5  py-1 md:py-4 px-4 md:px-12  text-sm md:text-2xl hover:bg-opacity-80 rounded-lg font-medium">
                Play 
            </button>
             <button className="  mx-2 bg-gray-500 text-white py-1 md:py-4 px-4 md:px-12  text-sm md:text-2xl  bg-opacity-50 hover:bg-opacity-30 rounded-lg font-medium">
                More Info 
            </button>
            </div>
        </div>
    )
}
export default VideoTitle;