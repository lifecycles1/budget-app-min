import React, { useEffect, useState } from "react";
import LandingNav from "../components/LandingNav";
import dashboard from "../assets/dashboard.jpg";
import LandingFooter from "../components/LandingFooter";
import LoadingButton from "../components/LoadingButton";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    setError(null);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_BASE_URL}/api/users/signup`, options);
      const jsonData = await response.json();
      if (jsonData.success) {
        localStorage.setItem("user", email);
        window.location.href = "/welcome";
      } else setError(jsonData.message);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <LandingNav />
      <div>
        <div className="bg-teal-600 py-8">
          <p className="font-black text-white text-4xl text-center">Sign up</p>
          <p className="text-white text-2xl text-center">Budgeting for the modern world.</p>
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
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 placeholder-gray-400"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-gray-700 font-medium">
                      Password
                    </label>
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 placeholder-gray-400"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="flex">
                    <LoadingButton type="submit" loading={loading} text="Sign Up" className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-md" />
                    {error && <p className="text-red-500 ml-4">{error}</p>}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <img src={dashboard} alt="db" className="w-96" />
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default Signup;
