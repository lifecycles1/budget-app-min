import React from "react";
import { useNavigate } from "react-router-dom";

const LandingFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-teal-600 mt-20">
      <div className="flex justify-around p-4 text-white">
        <div>
          <p className="font-black text-2xl">The Budget App</p>
          <p className="-mt-4">Budget well. Live life. Do good.</p>
          <p className="w-60">A home budget app available on the web. Replace your family budget planner, worksheet or spreadsheet with software that syncs.</p>
          <div className="flex space-x-2">
            <img className="hover:cursor-pointer" width="50" height="50" src="https://img.icons8.com/ios/50/facebook-new.png" alt="facebook-new" />
            <img className="hover:cursor-pointer" width="50" height="50" src="https://img.icons8.com/ios/50/twitter--v1.png" alt="twitter--v1" />
            <img className="hover:cursor-pointer" width="50" height="50" src="https://img.icons8.com/ios/50/new-post--v1.png" alt="new-post--v1" />
            <img className="hover:cursor-pointer" width="50" height="50" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" />
          </div>
        </div>
        <div>
          <div className="font-black text-lg">EXPLORE</div>
          <div className="hover:text-gray-300 hover:cursor-pointer" onClick={() => navigate("/")}>
            Home
          </div>

          <div className="hover:text-gray-300 hover:cursor-pointer" onClick={() => navigate("/howitworks")}>
            How It Works
          </div>
          <div className="hover:text-gray-300 hover:cursor-pointer" onClick={() => navigate("/whatyouget")}>
            What You Get
          </div>
          <div className="hover:text-gray-300 hover:cursor-pointer" onClick={() => navigate("/appway")}>
            The Budget App Way
          </div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Reviews</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Roadmap</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Budget Podcast</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Blog</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">About us</div>
        </div>
        <div>
          <div className="font-black text-lg">GET STARTED</div>
          <div className="hover:text-gray-300 hover:cursor-pointer" onClick={() => navigate("/signup")}>
            Sign Up
          </div>
          <div className="hover:text-gray-300 hover:cursor-pointer" onClick={() => navigate("/signin")}>
            Sign In
          </div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Pricing</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">FAQ</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Privacy Policy</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Terms of Service</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Security</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">GDPR</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Cookie Policy</div>
        </div>
        <div className="pr-10">
          <div className="font-black text-lg">GET HELP</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">User Guide</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Forums</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Refunds</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">How To Videos</div>
          <div className="hover:text-gray-300 hover:cursor-pointer">Contact Us</div>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
