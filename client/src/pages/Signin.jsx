import React, { useEffect, useState } from "react";
import LandingNav from "../components/LandingNav";
import LandingFooter from "../components/LandingFooter";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const flag = localStorage.getItem("expenses");
    if (user && flag) {
      window.location.href = "/dashboard";
    } else if (user && !flag) {
      window.location.href = "/welcome";
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    try {
      const response = await fetch("https://budget-app-min-server.onrender.com/api/users/signin", options);
      const jsonData = await response.json();
      if (jsonData.success && jsonData.message === "Not Done") {
        localStorage.setItem("user", email);
        window.location.href = "/welcome";
      } else if (jsonData.success && jsonData.message === "Success") {
        localStorage.setItem("user", email);
        localStorage.setItem("expenses", "done");
        window.location.href = "/dashboard";
      } else setError(jsonData.message);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <LandingNav />
      <div>
        <div className="bg-teal-600 py-8">
          <p className="font-black text-white text-4xl text-center">Sign in</p>
          <p className="text-white text-2xl text-center">Sign in to manage your budget</p>
        </div>
        <div className="flex justify-evenly">
          <div>
            <div className="max-w-md mx-auto w-96 bg-white rounded-md overflow-hidden shadow-md mt-10">
              <div className="px-6 py-4">
                <h2 className="text-2xl font-bold mb-2">Start your budget</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium">
                      Email
                    </label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 placeholder-gray-400" placeholder="Enter your email address" />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium">
                      Password
                    </label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 placeholder-gray-400" placeholder="Enter your password" />
                  </div>
                  <div className="flex">
                    <button type="submit" className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md">
                      Sign In
                    </button>
                    {error && <p className="text-red-500 ml-4">{error}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <p className="text-teal-600 font-black text-4xl">Welcome Back!</p>
            <div className="w-96 font-medium">
              Hello again. We’re glad you’re here! Living out your budget is a process, and we’re cheering for you every step of the way. Reach out to us with any stories from your budgeting journey or if you have questions about anything at all. We’d love to hear from you.
            </div>
            <div className="flex justify-between">
              <div></div>
              <p className="mt-7 font-medium">- The Budget App Team</p>
            </div>
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default Signin;
