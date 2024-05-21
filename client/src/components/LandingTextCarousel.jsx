import React from "react";

const LandingTextCarousel = () => {
  return (
    <div className="mt-20 flex items-center justify-evenly">
      <div className="w-72">
        <div className="text-teal-600 font-bold text-2xl">5 Money Lessons My Mom Taught Me</div>
        <div className="text-teal-600 font-medium">Hear Chi-En reflect on valuable lessons her mom taught her.</div>
      </div>
      <div className="w-72">
        <div className="text-teal-600 font-bold text-2xl">Money Tips for Recent Grads</div>
        <div className="text-teal-600 font-medium">See 3 tips to help you create an awesome money plan.</div>
      </div>
      <div className="w-72">
        <div className="text-teal-600 font-bold text-2xl">Vacations Are Better When You Can Afford Them</div>
        <div className="text-teal-600 font-medium">Learn why it's important to save for your vacation in advance.</div>
      </div>
    </div>
  );
};

export default LandingTextCarousel;
