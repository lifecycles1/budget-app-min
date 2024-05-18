import React, { useEffect, useRef } from "react";
import LandingNav from "../components/LandingNav";
import LandingFooter from "../components/LandingFooter";
import { useNavigate } from "react-router-dom";

const WhatYouGet = () => {
  const navigate = useNavigate();
  const budgetingRef = useRef(null);
  const syncRef = useRef(null);
  const saveRef = useRef(null);
  const debtRef = useRef(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/welcome");
  });

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <LandingNav />
      <div>
        <div className="flex justify-evenly mt-20">
          <div onClick={() => handleScroll(budgetingRef)} className="text-center hover:opacity-50 hover:cursor-pointer">
            <p className="font-black text-teal-600">Budgeting that works</p>
            <img className="mx-auto" width="75" height="75" src="https://img.icons8.com/ios/50/money-transfer.png" alt="money-transfer" />
            <p className="w-52 mx-auto">A time-tested system that works!</p>
          </div>
          <div onClick={() => handleScroll(syncRef)} className="text-center hover:opacity-50 hover:cursor-pointer">
            <p className="font-black text-teal-600">Sync & share budgets</p>
            <img className="mx-auto" width="75" height="75" src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/external-send-mail-communications-prettycons-lineal-prettycons.png" alt="external-send-mail-communications-prettycons-lineal-prettycons" />
            <p className="w-52 mx-auto">Put your budget into action with the people who matter most.</p>
          </div>
          <div onClick={() => handleScroll(saveRef)} className="text-center hover:opacity-50 hover:cursor-pointer">
            <p className="font-black text-teal-600">Save for big expenses</p>
            <img className="mx-auto" width="75" height="75" src="https://img.icons8.com/ios/50/idea-bank.png" alt="idea-bank" />
            <p className="w-52 mx-auto">Plan ahead and be prepared. No more surprises!</p>
          </div>
          <div onClick={() => handleScroll(debtRef)} className="text-center hover:opacity-50 hover:cursor-pointer">
            <p className="font-black text-teal-600">Pay off debt</p>
            <img className="mx-auto" width="75" height="75" src="https://img.icons8.com/ios/50/cut-paper.png" alt="cut-paper" />
            <p className="w-52 mx-auto">Track your debt payoff progress while still setting aside money for other things.</p>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="font-black text-teal-600 text-4xl mb-8">Start your Budget</p>
          <button onClick={() => navigate("/signup")} className="bg-teal-600 p-2 px-4 w-56 rounded-full text-white font-black">
            SIGN UP
          </button>
        </div>
        <div>
          <div className="flex mt-16 p-10" ref={budgetingRef}>
            <div className="my-auto ml-20">
              <img width="200" height="200" src="https://img.icons8.com/ios/50/money-transfer.png" alt="money-transfer" />
            </div>
            <div className="ml-48 my-auto">
              <p className="font-black text-3xl text-teal-600">Budgeting that actually works</p>
              <p className="w-9/12">
                The Budget App is budgeting software based on the envelope method. You make envelopes for all your budgeting categories – rent, groceries, eating out, date night, etc. After that, you set aside money up front in each envelope to spend based on categories and not your account balance.
              </p>
              <p>It’s a way to plan your spending instead of just tracking your spending.</p>
            </div>
            <div className="mr-20 my-auto">
              <p className="font-black">I think this may be the answer to years of budgeting struggles. Thanks!</p>
              <p className="font-black">KATHY</p>
            </div>
          </div>
          <div className="flex mt-16 p-10 bg-[#dbebe8]" ref={syncRef}>
            <div className="my-auto ml-20">
              <img width="200" height="200" src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/external-send-mail-communications-prettycons-lineal-prettycons.png" alt="external-send-mail-communications-prettycons-lineal-prettycons" />
            </div>
            <div className="ml-48 my-auto">
              <p className="font-black text-3xl text-teal-600">Sync & share household budgets</p>
              <p className="w-9/12 -mt-4">"Wait, what? You spent how much on what? Why didn’t you tell me?"</p>
              <p className="w-9/12">Sound familiar? Goodbudget keeps you on the same page by syncing your household budget across all your iPhones and Androids. When you deduct money from an envelope, the person you’re sharing with knows what’s spent, where, and when. Every time.</p>
              <p className="mt-4">Bye bye miscommunication.</p>
            </div>
            <div className="mr-20 my-auto">
              <p className="font-black">I think this may be the answer to years of budgeting struggles. Thanks!</p>
              <p className="font-black">KATHY</p>
            </div>
          </div>
          <div className="flex mt-16 p-10" ref={saveRef}>
            <div className="my-auto ml-20">
              <img width="200" height="200" src="https://img.icons8.com/ios/50/idea-bank.png" alt="idea-bank" />
            </div>
            <div className="ml-48 my-auto">
              <p className="font-black text-3xl text-teal-600">Save for big expenses</p>
              <p className="w-9/12">
                Making payments on cars, that real vacation you’ve always wanted, and other large purchases drain your bank account faster than you can say "swipe." Having the money to save and actually saving are two very different things. With Goodbudget, you can plan ahead and save for big
                expenses months in advance.
              </p>
              <p>Paying cash never felt so good.</p>
            </div>
            <div className="mr-20 my-auto">
              <p className="font-black">After months of saving, my vacation envelope covered the cost of my whole trip to New York!</p>
              <p className="font-black">BECKY</p>
            </div>
          </div>
          <div className="flex mt-16 p-10 bg-[#dbebe8]" ref={debtRef}>
            <div className="my-auto ml-20">
              <img width="200" height="200" src="https://img.icons8.com/ios/50/cut-paper.png" alt="cut-paper" />
            </div>
            <div className="ml-48 my-auto">
              <p className="font-black text-3xl text-teal-600">Pay off debt</p>
              <p className="w-9/12">Ready to tackle that debt you’ve been carrying around for a while? Pay off debt with a budget that works! Use Debt Accounts on the web to track your payoff progress and see when you’ll be debt-free — all while setting aside what you need for everything else.</p>
              <p>Say goodbye to debt.</p>
            </div>
            <div className="mr-20 my-auto">
              <p className="font-black">I paid off $10,000 in 10 months. Now that I'm totally debt free, I save for things that I WANT to spend money on.</p>
              <p className="font-black">JAMES</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="font-black text-teal-600 text-4xl mb-8">Get Started Now</p>
          <button onClick={() => navigate("/signup")} className="bg-teal-600 p-2 px-4 w-56 rounded-full text-white font-black">
            SIGN UP
          </button>
        </div>
      </div>
      <div>
        <LandingFooter />
      </div>
    </div>
  );
};

export default WhatYouGet;
