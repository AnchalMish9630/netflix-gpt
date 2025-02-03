const VideoTitle = ({title, overview})=>{
   
    return(
        <div className="w-screen aspect-video absolute pt-[15%] pl-24 text-[#fff] bg-gradient-to-r from-black">
            <div className="text-6xl font-bold">{title}</div>
            <p className="py-6 font-normal w-1/4 text-2xl">{overview}</p>
            <div className="">
            <button className="bg-white text-black p-4 px-12 text-2xl hover:bg-opacity-80 rounded-lg font-medium">
                Play ▶️
            </button>
             <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-2xl bg-opacity-50 hover:bg-opacity-30 rounded-lg font-medium">
                More Info ℹ️
            </button>
            </div>
        </div>
    )
}
export default VideoTitle;