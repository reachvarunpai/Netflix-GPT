import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

   useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL 
        })
      );
      navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img
        className="w-32 md:w-44"
        src={LOGO}
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
