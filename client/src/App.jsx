import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Expenses from "./pages/Expenses";
import HowItWorks from "./pages/HowItWorks";
import WhatYouGet from "./pages/WhatYouGet";
import BudgetAppWay from "./pages/BudgetAppWay";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="howitworks" element={<HowItWorks />} />
          <Route path="whatyouget" element={<WhatYouGet />} />
          <Route path="appway" element={<BudgetAppWay />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/welcome" element={<Expenses />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
