import React from "react";
import Carousel from "react-grid-carousel";

const LandingGridCarousel = () => {
  return (
    <div className="mt-7">
      <Carousel cols={6} rows={1} gap={1} autoplay={7000} loop>
        <Carousel.Item>
          <div className="ml-5 hover:cursor-pointer">
            <img className="carousel-image" width="75" height="75" src="https://img.icons8.com/color/48/rainy-weather.png" alt="rainy-weather" />
            <div className="w-20 text-teal-600 font-bold">Plan for Emergencies</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hover:cursor-pointer">
            <img className="carousel-image" width="75" height="75" src="https://img.icons8.com/emoji/48/calendar-emoji.png" alt="calendar-emoji" />
            <div className="w-44 text-teal-600 font-bold -ml-8">Stop Living Paycheck to Paycheck</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/clouds/100/scorpion-scissors.png" alt="scorpion-scissors" />
            <div className="w-44 text-teal-600 font-bold -ml-4">Get Out of Debt</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/color/48/sunbathe.png" alt="sunbathe" />
            <div className="w-44 text-teal-600 font-bold -ml-5">Go on Vacation</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/clouds/100/apple-calculator.png" alt="apple-calculator" />
            <div className="w-44 text-teal-600 font-bold -ml-8">Budget like an Adult</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ml-7 hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/bubbles/50/sedan.png" alt="sedan" />
            <div className="w-44 text-teal-600 font-bold">Save for Car</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ml-6 hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/cute-clipart/64/wedding-cake.png" alt="wedding-cake" />
            <div className="w-44 text-teal-600 font-bold -ml-6">Getting Married</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ml-6 hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/dusk/64/couple-man-woman.png" alt="couple-man-woman" />
            <div className="w-44 text-teal-600 font-bold -ml-10">Budgeting as a Couple</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ml-8 hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/bubbles/50/baby.png" alt="baby" />
            <div className="w-44 text-teal-600 font-bold ml-4">Baby</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ml-4 hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-kids-modelling-agency-flaticons-lineal-color-flat-icons-3.png" alt="external-kids-modelling-agency-flaticons-lineal-color-flat-icons-3" />
            <div className="w-44 text-teal-600 font-bold ml-5">Kids</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ml-3 hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/clouds/100/cottage.png" alt="cottage" />
            <div className="w-44 text-teal-600 font-bold -ml-2">Buy a House</div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="ml-3 hover:cursor-pointer">
            <img width="75" height="75" src="https://img.icons8.com/emoji/48/graduation-cap-emoji.png" alt="graduation-cap-emoji" />
            <div className="w-44 text-teal-600 font-bold -ml-5">Save for College</div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingGridCarousel;
