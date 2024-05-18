const express = require("express");
const router = express.Router();
const ExpensesController = require("../controllers/ExpensesController");

router.post("/api/expenses/set", ExpensesController.setExpenses);

router.post("/api/expenses/setFlag", ExpensesController.setFlag);

router.post("/api/expenses/get", ExpensesController.getExpenses);

module.exports = router;
