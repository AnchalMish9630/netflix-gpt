import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from "../utils/constant";
import { FaStar, FaFire } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { genreMap } from "../utils/genreMap";

const MovieInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieId = parseInt(id);
  const movies = useSelector((store) => store.movies);

  const allMovies = [
    ...movies.nowPlayingMovies,
    ...movies.topRatedMovies,
    ...movies.upcomingMovies,
    ...movies.popularMovies,
  ];

  const movie = allMovies.find((m) => m.id === movieId);

  if (!movie) return <div className="text-white p-6">Movie not found.</div>;

  return (
    <div className="bg-black text-white h-screen overflow-y-auto p-6 md:p-10">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Movie Poster */}
        <div className="flex-shrink-0 w-full md:w-1/3">
          <img
            src={IMG_CDN_URL + movie.poster_path}
            alt={movie.title}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Movie Info */}
        <div className="flex flex-col justify-center md:w-2/3">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{movie.title}</h1>

          <p className="text-lg md:text-xl text-gray-300 mb-6 break-words">
            {movie.overview}
          </p>

          <div className="space-y-2 text-sm md:text-base">
            <p className="flex items-center gap-2">
              <MdDateRange className="text-yellow-400" />
              <span>Release Date:</span> {movie.release_date}
            </p>

            <p className="text-white mt-2">
              Genres: {movie.genre_ids.map((id) => genreMap[id]).join(", ")}
            </p>

            <p className="flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <span>Rating:</span> {movie.vote_average}
            </p>

            <p className="flex items-center gap-2">
              <FaFire className="text-orange-500" />
              <span>Popularity:</span> {movie.popularity}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6 flex-wrap">
              <button
                onClick={() => navigate(-1)}
                className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                ⬅ Back
              </button>

              <button
                onClick={() => console.log("Added to watchlist")}
                className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
              >
                ⭐ Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
