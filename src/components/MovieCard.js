
import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard =({posterPath,id})=>{
    const navigate = useNavigate();
    const handleMovieInfo = () => {
    navigate(`/movie/${id}`);  // navigate to dynamic movie page
  };

  return (
    <div
      className="w-36 md:w-48 pr-4 cursor-pointer"
      onClick={handleMovieInfo}
    >
      <img src={IMG_CDN_URL + posterPath} alt="movie-card" />
    </div>
  );
};

export default MovieCard;
