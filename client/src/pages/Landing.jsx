import React, { useEffect } from "react";
import landing1 from "../assets/landing1.jpg";
import landing2 from "../assets/landing2.jpg";
import { useNavigate } from "react-router-dom";
import LandingNav from "../components/LandingNav";
import LandingFooter from "../components/LandingFooter";

const Landing = () => {
  const navigate = useNavigate();

  const signup = () => {
    navigate("/signup");
  };

  const signin = () => {
    navigate("/signin");
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    const flag = localStorage.getItem("expenses");
    if (user && flag) {
      window.location.href = "/dashboard";
    } else if (user && !flag) {
      window.location.href = "/welcome";
    }
  });

  return (
    <div>
      <LandingNav />
      <div>
        <div className="absolute left-20 top-32 text-3xl font-bold text-teal-600">
          <p>Managing Money,</p>
          <p>Made Simple</p>
        </div>
        <div id="carouselExampleAutoplaying" className="carousel slide w-96 mt-16 mx-auto" style={{ opacity: 0.7, backgroundColor: "rgba(128, 128, 128, 0.5)" }} data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={landing1} className="d-block w-90" alt="desk" />
            </div>
            <div className="carousel-item">
              <img src={landing2} className="d-block w-90" alt="desk" />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-forms mt-14">
        <p className="landing-text animate-[slideInAnim_1.5s_ease-out_forwards]">If you are an existing user please</p>
        <div className="bg-teal-600 w-20 h-10 rounded-md mx-auto items-center flex justify-center">
          <button onClick={signin} className="landing-text animate-[slideInAnim_1.5s_ease-out_forwards] font-black text-white">
            sign in
          </button>
        </div>
        <p className="landing-text animate-[slideInAnim_1.5s_ease-out_forwards] mt-2">otherwise please</p>
        <div className="bg-teal-600 w-20 h-10 rounded-md mx-auto items-center flex justify-center">
          <button onClick={signup} className="landing-text animate-[slideInAnim_1.5s_ease-out_forwards] font-black text-white">
            sign up
          </button>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default Landing;
