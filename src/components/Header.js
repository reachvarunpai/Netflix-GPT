import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.error("Sign out error:", error);
      });
  };

  return (
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-32 md:w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8 rounded-md object-cover"
            alt="User Icon"
            src={user.photoURL}
          />
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
