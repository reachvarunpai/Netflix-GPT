import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="px-6">
      <h2 className="text-white text-lg md:text-2xl font-semibold mb-3">
        {title}
      </h2>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
