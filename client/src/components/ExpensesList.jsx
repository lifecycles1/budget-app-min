import React, { useMemo, useCallback, useState } from "react";
import Expense from "./Expense";
import { expenseCategories } from "../utilities/data";

const ExpenseList = () => {
  const [expenseInputs, setExpenseInputs] = useState([]);
  const [error, setError] = useState(null);

  const handleInputChange = useCallback((categoryIndex, expenseIndex, value) => {
    setExpenseInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[categoryIndex] = { ...updatedInputs[categoryIndex] };
      updatedInputs[categoryIndex][expenseIndex] = value;
      return updatedInputs;
    });
  }, []);

  const handleSaveToDatabase = async () => {
    console.log(expenseInputs);
    const user = localStorage.getItem("user");
    await fetch("http://localhost:3000/api/expenses/set", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user, expenses: expenseInputs }),
    });

    const response = await fetch("http://localhost:3000/api/expenses/setFlag", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user }),
    });
    const data = await response.json();
    if (data.success) {
      window.location.href = "/dashboard";
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {expenseCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white shadow rounded-lg p-4 text-teal-600">
              <h2 className="text-lg faont-bold mb-2">{category.title}</h2>
              {category.expenses.map((expense, expenseIndex) => (
                <Expense key={expenseIndex} category={expense} categoryIndex={categoryIndex} expenseIndex={expenseIndex} expenseInputs={expenseInputs} handleInputChange={handleInputChange} />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded" onClick={handleSaveToDatabase}>
          Save
        </button>
        {error && <div className="ml-20">{error}</div>}
      </div>
    </div>
  );
};

export default ExpenseList;
