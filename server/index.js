const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const authRoutes = require("./routes/auth.routes");
const expensesRoutes = require("./routes/expenses.routes");

app.use(authRoutes);
app.use(expensesRoutes);

app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
