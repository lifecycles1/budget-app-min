import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import LandingFooter from "../components/LandingFooter";
import { XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, Legend, PieChart, Pie } from "recharts";
import { Cell, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const transformedData = [
    {
      name: "A. Bills",
      "Rent/Mortgage": Number(data.data?.[0]?.[1]) || 0,
      Electric: Number(data.data?.[0]?.[2]) || 0,
      Water: Number(data.data?.[0]?.[3]) || 0,
      Internet: Number(data.data?.[0]?.[4]) || 0,
      Cellphone: Number(data.data?.[0]?.[5]) || 0,
    },
    {
      name: "B. Frequent",
      Groceries: Number(data.data?.[0]?.[6]) || 0,
      "Eating out": Number(data.data?.[0]?.[7]) || 0,
      Transportation: Number(data.data?.[0]?.[8]) || 0,
    },
    {
      name: "C. Non-monthly",
      "Home maintenance": Number(data.data?.[0]?.[9]) || 0,
      "Auto maintenance": Number(data.data?.[0]?.[10]) || 0,
      Gifts: Number(data.data?.[0]?.[11]) || 0,
    },
    {
      name: "D. Goals",
      Vacation: Number(data.data?.[0]?.[12]) || 0,
      Education: Number(data.data?.[0]?.[13]) || 0,
      "Home improvement": Number(data.data?.[0]?.[14]) || 0,
    },
    {
      name: "E. Quality of life",
      Hobbies: Number(data.data?.[0]?.[15]) || 0,
      Entertainment: Number(data.data?.[0]?.[16]) || 0,
      "Health & Wellness": Number(data.data?.[0]?.[17]) || 0,
    },
    {
      name: "F. Miscellaneous",
      Miscellaneous: Number(data.data?.[0]?.[18]) || 0,
    },
  ];

  const pieChart01 = [
    {
      name: "Rent/Mortgage",
      value: Number(data.data?.[0]?.[1]) || 0,
    },
    {
      name: "Electric",
      value: Number(data.data?.[0]?.[2]) || 0,
    },
    {
      name: "Water",
      value: Number(data.data?.[0]?.[3]) || 0,
    },
    {
      name: "Internet",
      value: Number(data.data?.[0]?.[4]) || 0,
    },
    {
      name: "Cellphone",
      value: Number(data.data?.[0]?.[5]) || 0,
    },
  ];

  const pieChart02 = [
    {
      name: "Groceries",
      value: Number(data.data?.[0]?.[6]) || 0,
    },
    {
      name: "Eating out",
      value: Number(data.data?.[0]?.[7]) || 0,
    },
    {
      name: "Transportation",
      value: Number(data.data?.[0]?.[8]) || 0,
    },
  ];

  const pieChart03 = [
    {
      name: "Home maintenance",
      value: Number(data.data?.[0]?.[9]) || 0,
    },
    {
      name: "Auto maintenance",
      value: Number(data.data?.[0]?.[10]) || 0,
    },
    {
      name: "Gifts",
      value: Number(data.data?.[0]?.[11]) || 0,
    },
  ];

  const pieChart04 = [
    {
      name: "Vacation",
      value: Number(data.data?.[0]?.[12]) || 0,
    },
    {
      name: "Education",
      value: Number(data.data?.[0]?.[13]) || 0,
    },
    {
      name: "Home improvement",
      value: Number(data.data?.[0]?.[14]) || 0,
    },
  ];

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ffc0a5", "#8dd1e1"];

  useEffect(() => {
    const user = localStorage.getItem("user");
    (async () => {
      try {
        setLoading(true);
        const response = await fetch("https://budget-app-min-client.onrender.com/api/expenses/get", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ user }),
        });
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  return (
    <>
      <NavigationBar />
      <div>
        {error && <div className="text-red-500 text-center mt-16">Please reload the page</div>}
        {loading && (
          <div className="flex justify-center mt-16">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-gray-900"></div>
          </div>
        )}
        {!loading && (
          <>
            <div className="flex justify-center mt-16">
              <BarChart width={800} height={400} data={transformedData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Rent/Mortgage" stackId="expenses" fill="#8884d8" />
                <Bar dataKey="Electric" stackId="expenses" fill="#82ca9d" />
                <Bar dataKey="Water" stackId="expenses" fill="#ffc658" />
                <Bar dataKey="Internet" stackId="expenses" fill="#ff6f69" />
                <Bar dataKey="Cellphone" stackId="expenses" fill="#73c2fb" />
                <Bar dataKey="Groceries" stackId="expenses" fill="#3b8ead" />
                <Bar dataKey="Eating out" stackId="expenses" fill="#f9d56e" />
                <Bar dataKey="Transportation" stackId="expenses" fill="#e76f51" />
                <Bar dataKey="Home maintenance" stackId="expenses" fill="#ffcc5c" />
                <Bar dataKey="Auto maintenance" stackId="expenses" fill="#a7c957" />
                <Bar dataKey="Gifts" stackId="expenses" fill="#588c7e" />
                <Bar dataKey="Vacation" stackId="expenses" fill="#9b5de5" />
                <Bar dataKey="Education" stackId="expenses" fill="#00bbf9" />
                <Bar dataKey="Home improvement" stackId="expenses" fill="#f95738" />
                <Bar dataKey="Hobbies" stackId="expenses" fill="#ff6f69" />
                <Bar dataKey="Entertainment" stackId="expenses" fill="#73c2fb" />
                <Bar dataKey="Health & Wellness" stackId="expenses" fill="#3b8ead" />
                <Bar dataKey="Miscellaneous" stackId="expenses" fill="#f9d56e" />
              </BarChart>
            </div>
            <div className="flex justify-center mt-20">
              <div>
                <PieChart width={500} height={250}>
                  <Pie data={pieChart01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                  <Pie data={pieChart02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
                </PieChart>
              </div>
              <ResponsiveContainer width="75%" height={300}>
                <PieChart>
                  <Pie data={pieChart01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
                    {pieChart01.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </div>
      <LandingFooter />
    </>
  );
};

export default Dashboard;
