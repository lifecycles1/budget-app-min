import React, { useEffect } from "react";
import LandingNav from "../components/LandingNav";
import LandingGridCarousel from "../components/LandingGridCarousel";
import LandingTextCarousel from "../components/LandingTextCarousel";
import LandingFooter from "../components/LandingFooter";

const BudgetAppWay = () => {
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/welcome");
  });
  return (
    <div>
      <LandingNav />
      <div>
        <div className="bg-teal-600 py-8">
          <p className="font-black text-white text-4xl text-center">The Budget App Way</p>
          <p className="text-white text-2xl text-center">Spend in line with your values</p>
        </div>
        <div className="flex justify-around bg-gray-100 h-20 items-center">
          <p className="text-teal-600 text-2xl font-semibold">Get out of debt and reach your savings goals.</p>
          <button className="bg-teal-600 p-2 w-72 rounded-full font-bold text-white transition duration-300 transform hover:scale-110">CREATE YOUR BUDGET</button>
        </div>
        <LandingGridCarousel />
        <div className="bg-teal-200 p-10 mt-10">
          <div className="flex justify-around">
            <p></p>
            <div className="flex space-x-1">
              <p className="text-teal-600 hover:underline hover:cursor-pointer">SEE ALL COURSES</p>
              <p className="text-teal-600">&rsaquo;</p>
            </div>
          </div>
          <div className="pl-52">
            <p className="text-xs font-medium mb-12">COURSE: THE BUDGET APP 101</p>
            <p className="text-teal-600 text-3xl font-bold">Budget Bootcamp</p>
            <p className="w-8/12 text-teal-600">New to budgeting? Never had a budget that really worked? Start with The Budget 101, where we’ll walk you through creating a budget you can actually stick with!</p>
            <button className="bg-white p-2 rounded-full w-36 mt-6 text-teal-600 font-medium">SEE COURSE</button>
          </div>
        </div>
        <LandingTextCarousel />
        <div className="bg-gray-100 mt-20 h-96 -mb-20 flex justify-center items-center">
          <div className="flex space-x-40">
            <div className="flex justify-center items-center h-44 w-44 rounded-full bg-teal-200 text-teal-600">
              <span className="text-xl font-bold text-center w-36">Budget with a why</span>
            </div>
            <div className="flex justify-center items-center h-44 w-44 rounded-full bg-teal-200 text-teal-600">
              <span className="text-xl font-bold text-center">Live out your budget</span>
            </div>
            <div className="flex justify-center items-center h-44 w-44 rounded-full bg-teal-200 text-teal-600">
              <span className="text-xl font-bold text-center">Talk with people you trust</span>
            </div>
            <div className="flex justify-center items-center h-44 w-44 rounded-full bg-teal-200 text-teal-600">
              <span className="text-xl font-bold text-center">Give generously</span>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default BudgetAppWay;
