import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const { setSearchFilter, setIsSearched } = useContext(AppContext);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
  };

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="py-16 text-center mx-2 rounded-xl text-white bg-gradient-to-r from-purple-900 to-purple-950">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 10,000+ jobs to apply
        </h2>
        <p className="mb-9 max-w-xl mx-auto text-sm font-light px-5">
          Your Next Big Career Move Starts Right Here - Explore the Best Job
          Opportunities and Take the First Step Toward Your Future!
        </p>
        <div className="flex items-center justify-center bg-white rounded max-w-xl text-gray-600 pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center gap-1">
            <img className="h-4 sm:h-5" src={assets.search_icon} alt="Search" />
            <input
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              type="text"
              ref={titleRef}
              placeholder="Search for jobs"
            />
          </div>

          <div className="flex items-center gap-1">
            <img
              className="h-4 sm:h-5"
              src={assets.location_icon}
              alt="Search"
            />
            <input
              className="max-sm:text-xs p-2 rounded outline-none w-full"
              type="text"
              placeholder="Location"
              ref={locationRef}
            />
          </div>

          <button
            onClick={onSearch}
            className="bg-blue-600 text-white rounded m-1 px-8 py-2"
          >
            Search
          </button>
        </div>
      </div>

      <div className="border border-gray-300 shadow-md mx-2 mt-10 p-6 rounded-md flex">
        <div className="flex justify-center gap-10 lg:gap-15 flex-wrap">
          <p className="font-medium">Trusted by </p>
          <img className="h-6" src={assets.microsoft_logo} alt="" />
          <img className="h-6" src={assets.walmart_logo} alt="" />
          <img className="h-6" src={assets.samsung_logo} alt="" />
          <img className="h-6" src={assets.accenture_logo} alt="" />
          <img className="h-6" src={assets.adobe_logo} alt="" />
          <img className="h-6" src={assets.amazon_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
