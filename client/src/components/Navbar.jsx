import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  const { setShowRecruiterLogin } = useContext(AppContext);

  return (
    <div className="shadow py-4">
      <div className="container flex px-4 2xl:px-20 justify-between mx-auto items-center">
        <img
          onClick={() => navigate("/")}
          className="max-sm:h-7 cursor-pointer"
          src={assets.logo}
          alt="JobSearch"
        />

        {user ? (
          <div className="flex gap-3 items-center">
            <Link
              className="max-sm:text-sm text-base px-4 py-2 text-blue-500 hover:bg-blue-50 rounded-md"
              to={"/applications"}
            >
              Applied Jobs
            </Link>
            <p>|</p>
            <p className="max-sm:hidden">
              Hi, {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button
              onClick={() => setShowRecruiterLogin(true)}
              className="text-gray-60"
            >
              Recruiter Login
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-gradient-to-r from-blue-700 to-blue-800 text-white px-6 sm:px-9 py-2 rounded"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
