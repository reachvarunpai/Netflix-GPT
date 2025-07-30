import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
    const langKey = useSelector((Store) => Store.config.lang);
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="w-11/12 md:w-1/2 bg-black bg-opacity-80 grid grid-cols-12 rounded-lg shadow-lg mt-[30vh]"
      >
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-lg focus:outline-none text-white bg-gray-800"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800 transition">
        {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
