import React from "react";
import pig from "../assets/modal1.png";

const Modal1 = ({ closeModal }) => {
  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 shadow-lg flex">
          <div>
            <img src={pig} alt="" className="w-96 h-96 rounded-2xl mr-10" />
          </div>
          <div>
            <h2 className="text-sm font-semibold mb-4 text-gray-500">Welcome to the Budget App!</h2>
            <div className="font-bold text-xl">Let's build your budget.</div>
            <p className="mt-4">In three simple steps, you will gain more control of your money!</p>
            <p>Let’s start by setting some targets. Targets can be for regular expenses, or goals you are saving up for.</p>
            <p>
              They can help you decide how much money you <span className="italic">want</span> to set aside for the things that matter to you.
            </p>
            <p className="mt-20">
              <span className="font-black">TIP:</span> Don't worry about getting your targets perfect on your first try - you can change them any time!
            </p>
            <div className="flex justify-between">
              <div></div>
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={closeModal}>
                Let's Go
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal1;
