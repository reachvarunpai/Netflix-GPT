const VideoTitle = ({ title, overview }) => {
  return (
    <div className="h-full flex flex-col justify-center px-6 md:px-12 text-white">
      <h1 className="text-3xl md:text-6xl font-bold drop-shadow-lg max-w-3xl">
        {title}
      </h1>
      <p className="py-6 text-sm md:text-lg max-w-2xl drop-shadow-md line-clamp-4">
        {overview}
      </p>
      <div className="flex gap-4 mt-2">
        <button className="bg-white text-black px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-semibold rounded hover:bg-gray-200 transition-all">
          ▶️ Play
        </button>
        <button className="bg-gray-700 text-white px-6 md:px-8 py-2 md:py-3 text-sm md:text-lg font-semibold rounded hover:bg-gray-600 transition-all">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
