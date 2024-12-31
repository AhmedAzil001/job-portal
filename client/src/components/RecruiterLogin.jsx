import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("Login");
  const [image, setImage] = useState(false);
  const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false);
  const { setShowRecruiterLogin } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (state === "Sign Up" && !isTextDataSubmitted) {
      setIsTextDataSubmitted(true);
    }
  };

  useEffect(()=>{
    document.body.style.overflow='hidden';
    return () => {
        document.body.style.overflow='unset';
    }
  },[])
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30  flex justify-center items-center">
      <form
        className="relative p-10 rounded-xl text-slate-500 bg-white"
        onSubmit={onSubmitHandler}
      >
        <h1 className="text-center text-2xl text-neutral-700 font-medium">
          Recruiter {state}
        </h1>
        {state === "Login" ? (
          <p className="text-sm">
            Welcome back! Please sign in to continue
          </p>
        ) : (
          <p className="text-sm tracking-wide">
             Hello there! Please sign up to continue
          </p>
        )}
        {state === "Sign Up" && isTextDataSubmitted ? (
          <>
            <div className="flex items-center gap-4 my-10">
              <label htmlFor="image">
                <img
                  className="w-16 rounded-full"
                  src={image ? URL.createObjectURL(image) : assets.upload_area}
                  alt=""
                />
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
              <p>
                Upload Company
                <br /> Logo
              </p>
            </div>
          </>
        ) : (
          <>
            {state !== "Login" && (
              <div className="flex items-center gap-2 border px-4 py-2 rounded-full mt-5">
                <img src={assets.person_icon} alt="" />
                <input
                  className="outline-none text-sm"
                  type="text"
                  placeholder="Company Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
            )}
            <div className="flex items-center gap-2 border px-4 py-2 rounded-full mt-5">
              <img src={assets.email_icon} alt="" />
              <input
                className="outline-none text-sm"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="flex items-center gap-2 border px-4 py-2 rounded-full mt-5">
              <img src={assets.lock_icon} alt="" />
              <input
                className="outline-none text-sm"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </>
        )}
        {state === "Login" && (
          <p className="mt-4 text-sm cursor-pointer text-blue-600">
            Forgot password?
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 py-2 mt-4 text-white rounded-full"
        >
          {state === "Login"
            ? "Login"
            : isTextDataSubmitted
            ? "Create Account"
            : "Next"}
        </button>

        {state === "Login" ? (
          <p className="text-sm mt-5 text-center">
            Don't have an account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-blue-600  cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p className="text-sm mt-5 text-center">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        )}

        <img
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => setShowRecruiterLogin(false)}
          alt=""
        />
      </form>
    </div>
  );
};

export default RecruiterLogin;
