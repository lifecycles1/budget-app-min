import React, { useEffect } from "react";
import LandingNav from "../components/LandingNav";
import ctpeople from "../assets/ctpeople.jpg";
import offguard from "../assets/offguard.jpg";
import { useNavigate } from "react-router-dom";
import LandingFooter from "../components/LandingFooter";

const HowItWorks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/welcome");
  });
  return (
    <div>
      <LandingNav />
      <div>
        <div className="flex justify-evenly mt-12">
          <div>
            <p className="font-black text-teal-600 text-3xl mt-20">Become a Budgeter</p>
            <p className="w-72">Meet Dave. As the father of a growing family, Dave has a lot to keep track of. With Goodbudget, he's able to manage his finances, stay on the same page with his family, and spend on what's really important in life.</p>
            <p className="mt-10">This is his story.</p>
            <button onClick={() => navigate("/signup")} className="text-white font-black bg-teal-600 rounded-full p-2 px-4">
              SIGN UP TO START YOUR STORY
            </button>
          </div>
          <img src={ctpeople} alt="people" className="w-96" />
        </div>
        <div className="flex justify-around mt-48 bg-[#dbebe8] py-10">
          <div>
            <p className="font-black text-teal-600 text-3xl">No more surprises</p>
            <p className="w-72">With the tried new system, Dave is never caught off-guard by a bill or sudden expense. Each month he takes his paycheck and sets aside what he needs for the month.</p>
          </div>
          <img src={offguard} alt="offguard" className="w-96" />
        </div>
        <div className="flex justify-around mt-20">
          <div>
            <p className="font-black text-teal-600 text-3xl">Stay on the same page</p>
            <p className="w-72">With a budget that syncs between his mobile devices and the web, Dave and his wife Sarah are always on the same page with their spending.</p>
          </div>
          <div>
            <p className="font-black text-teal-600 text-3xl">Spend on what's important</p>
            <p className="w-72">With The Budget App, Dave and Sarah craft a budget that reflects their values. They set aside what they need each month, and choose how to use the rest based on what's important to them.</p>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default HowItWorks;
