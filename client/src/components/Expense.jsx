import React, { useMemo, useCallback, useState } from "react";

const Expense = ({ category, categoryIndex, expenseIndex, expenseInputs, handleInputChange }) => {
  const expenseValue = expenseInputs[categoryIndex]?.[expenseIndex] || "";

  return (
    <div className="mb-2">
      <label className="block font-medium">{category}</label>
      <input type="text" className="border border-gray-300 rounded px-2 py-1 w-full" value={expenseValue} onChange={(e) => handleInputChange(categoryIndex, expenseIndex, e.target.value)} />
    </div>
  );
};

export default Expense;
