const IMG_CDN = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-32 md:w-40 flex-shrink-0 transition-transform transform hover:scale-105 duration-300">
      <img
        src={IMG_CDN + posterPath}
        alt="Movie Poster"
        className="rounded-md"
      />
    </div>
  );
};

export default MovieCard;
