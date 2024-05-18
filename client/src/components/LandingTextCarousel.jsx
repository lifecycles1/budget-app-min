import React from "react";
import Carousel from "react-grid-carousel";

const LandingTextCarousel = () => {
  return (
    <div className="mt-20">
      <Carousel cols={1} rows={1} gap={1} autoplay={7000} loop>
        <Carousel.Item>
          <div className="hover:cursor-pointer ml-44">
            <div className=" text-teal-600 font-bold text-2xl">5 Money Lessons My Mom Taught Me</div>
            <div className="text-teal-600 font-medium">Hear Chi-En reflect on valuable lessons her mom taught her.</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hover:cursor-pointer ml-44">
            <div className="text-teal-600 font-bold text-2xl">Money Tips for Recent Grads</div>
            <div className="text-teal-600 font-medium">See 3 tips to help you create an awesome money plan.</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hover:cursor-pointer ml-44">
            <div className="text-teal-600 font-bold text-2xl">Vacations Are Better When You Can Afford Them</div>
            <div className="text-teal-600 font-medium">Learn why it's important to save for your vacation in advance.</div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingTextCarousel;
