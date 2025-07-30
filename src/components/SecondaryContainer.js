import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  if (!movies?.nowPlayingMovies) return null;

  return (
    <div className="bg-black">
     <div className="relative z-10 -mt-39">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Trending" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Upcoming Movies" movies={movies.nowPlayingMovies} />
      <MovieList title="Thriller" movies={movies.nowPlayingMovies} />
    </div>
    </div>
  );
};

export default SecondaryContainer;
