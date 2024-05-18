import React from "react";
import { useNavigate } from "react-router-dom";

const LandingNav = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-14 justify-between items-center shadow-sm sticky top-0 z-50 bg-white">
      <div onClick={() => navigate("/")} className="font-black text-teal-600 ml-5 hover:cursor-pointer">
        LOGO
      </div>
      <div className="flex space-x-4 ml-40 text-teal-600">
        <div className="hover:cursor-pointer" onClick={() => navigate("/howitworks")}>
          How It Works
        </div>
        <div className="hover:cursor-pointer" onClick={() => navigate("/whatyouget")}>
          What You Get
        </div>
        <div className="hover:cursor-pointer" onClick={() => navigate("/appway")}>
          The Budget App Way
        </div>
      </div>
      <div className="flex space-x-4 mr-10">
        <div className="bg-teal-600 p-1 rounded-md px-2 text-white font-black">
          <div onClick={() => navigate("/signin")} className="hover:cursor-pointer">
            sign in
          </div>
        </div>
        <div className="bg-teal-600 p-1 rounded-md px-2 text-white font-black">
          <div onClick={() => navigate("/signup")} className="hover:cursor-pointer">
            sign up
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingNav;
