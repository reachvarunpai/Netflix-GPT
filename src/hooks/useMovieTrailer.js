import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
        movieId + 
        "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      
      const filterData = json.results.filter((video) => video.type === "Trailer");
      const trailer = filterData[0]; 
      dispatch(addTrailerVideo(trailer));
    };
  useEffect(() => {
     getMovieVideos();
  }, []);
}

export default useMovieTrailer;