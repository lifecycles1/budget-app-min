import React from "react";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const navigate = useNavigate();
  const signOut = () => {
    localStorage.removeItem("user");
    window.location.href = "/signin";
  };
  return (
    <nav className="flex items-center justify-between bg-white shadow-sm py-4 px-8 sticky top-0 z-50">
      <div className="flex items-center">
        <div onClick={() => navigate("/")} className="font-black text-teal-600 ml-5 hover:cursor-pointer">
          LOGO
        </div>
      </div>
      <div className="flex items-center">
        <button onClick={signOut}>
          <img width="35" height="35" src="https://img.icons8.com/material/24/exit.png" alt="exit" />
        </button>
      </div>
    </nav>
  );
};

export default NavigationBar;
