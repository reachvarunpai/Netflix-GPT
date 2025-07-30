// MainContainer.js
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  return (
    <div className="relative h-screen w-full">
      <VideoBackground movieId={id} />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black">
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;
