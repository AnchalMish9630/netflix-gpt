const VideoTitle = ({title, overview})=>{
   
    return(
        <div className="w-screen aspect-video absolute pt-[15%] md:pl-24 pl-6  text-[#fff] bg-gradient-to-r from-black">
            <div className="text-2xl md:text-6xl font-bold">{title}</div>
            <p className="hidden md:inline-block py-6 font-normal w-1/4 text-2xl">{overview}</p>
            <div className="my-2 md:m-0">
            <button className="bg-white md:text-black text-gray-500  py-1 md:py-4 px-4 md:px-12  text-lg md:text-2xl hover:bg-opacity-80 rounded-lg font-medium">
                Play ▶️
            </button>
             <button className="hidden md:inline-block  mx-2 bg-gray-500 text-white p-4 px-12 text-2xl bg-opacity-50 hover:bg-opacity-30 rounded-lg font-medium">
                More Info ℹ️
            </button>
            </div>
        </div>
    )
}
export default VideoTitle;