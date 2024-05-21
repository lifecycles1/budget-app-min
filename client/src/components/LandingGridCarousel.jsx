import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LandingGridCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="mt-7">
      <Carousel className="flex h-40" responsive={responsive} additionalTransfrom={0} arrows autoPlay autoPlaySpeed={3000} centerMode={true} infinite minimumTouchDrag={80}>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/color/48/rainy-weather.png" alt="rainy-weather" />
          <div className="text-teal-600 font-bold">Emergencies</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/emoji/48/calendar-emoji.png" alt="calendar-emoji" />
          <div className="text-teal-600 font-bold">Paychecks</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img width={55} src="https://img.icons8.com/clouds/100/scorpion-scissors.png" />
          <div className="text-teal-600 font-bold">Debts</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/color/48/sunbathe.png" alt="sunbathe" />
          <div className="text-teal-600 font-bold">Vacations</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img width={53} src="https://img.icons8.com/clouds/100/apple-calculator.png" alt="apple-calculator" />
          <div className="text-teal-600 font-bold">Budgets</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/bubbles/50/sedan.png" alt="sedan" />
          <div className="text-teal-600 font-bold">Cars</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/cute-clipart/64/wedding-cake.png" alt="wedding-cake" />
          <div className="text-teal-600 font-bold">Marriages</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/dusk/64/couple-man-woman.png" alt="couple-man-woman" />
          <div className="text-teal-600 font-bold">Couples</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/bubbles/50/baby.png" alt="baby" />
          <div className="text-teal-600 font-bold">Babies</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-kids-modelling-agency-flaticons-lineal-color-flat-icons-3.png" alt="external-kids-modelling-agency-flaticons-lineal-color-flat-icons-3" />
          <div className="text-teal-600 font-bold">Kids</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img width={55} src="https://img.icons8.com/clouds/100/cottage.png" alt="cottage" />
          <div className="text-teal-600 font-bold">House</div>
        </div>
        <div className="w-20 h-40 flex flex-col items-center justify-center">
          <img src="https://img.icons8.com/emoji/48/graduation-cap-emoji.png" alt="graduation-cap-emoji" />
          <div className="text-teal-600 font-bold">College</div>
        </div>
      </Carousel>
    </div>
  );
};

export default LandingGridCarousel;
