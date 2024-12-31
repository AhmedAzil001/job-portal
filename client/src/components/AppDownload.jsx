import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <div className="container px-4 2xl:px-20 my-20 mx-auto">
      <div className="relative bg-gradient-to-r from-violet-50 to-violet-50 sm:p-24 lg:p-32 p-12 rounded-lg">
        <div>
          <h1 className="mb-8 font-bold text-2xl sm:text-4xl max-w-md">Download Mobile App For Better Experience</h1>
          <div className="flex items-center gap-4">
            <a className="inline-block" href="#">
              <img className="h-12" src={assets.play_store} alt="" />
            </a>
            <a className="inline-block" href="#">
              <img className="h-12" src={assets.app_store} alt="" />
            </a>
          </div>
        </div>
        <div>
          <img className="absolute right-0 bottom-0 mr-32 max-lg:hidden" src={assets.app_main_img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AppDownload;
