import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth).catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-full px-6 md:px-12 py-4 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img className="w-28 md:w-44" src={LOGO} alt="Netflix Logo" />
      {user && (
        <div className="flex items-center gap-3">
          {showGptSearch && (
            <select className="p-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (
           <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
            </option>
            ))}              
            </select>
          )}
          <button className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg" 
          onClick={handleGptSearchClick}
          >
          {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-8 h-8 rounded-md object-cover" alt="User Icon" src={user.photoURL} />
          <button
            onClick={handleSignOut}
            className="text-white font-medium hover:underline"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
