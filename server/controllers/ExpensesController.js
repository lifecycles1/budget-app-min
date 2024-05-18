const { getAuthClient } = require("../utilities/helpers");
const oauth = getAuthClient();
const sheetId = process.env.SPREADSHEET;

exports.setExpenses = async function (req, res) {
  const rentMortgage = req.body?.expenses[0]?.["0"];
  const electric = req.body?.expenses[0]?.["1"];
  const water = req.body?.expenses[0]?.["2"];
  const internet = req.body?.expenses[0]?.["3"];
  const cellphone = req.body?.expenses[0]?.["4"];

  const groceries = req.body?.expenses[1]?.["0"];
  const eatingOut = req.body?.expenses[1]?.["1"];
  const transportation = req.body?.expenses[1]?.["2"];

  const homeMaintenance = req.body?.expenses[2]?.["0"];
  const autoMaintenance = req.body?.expenses[2]?.["1"];
  const gifts = req.body?.expenses[2]?.["2"];

  const vacation = req.body?.expenses[3]?.["0"];
  const education = req.body?.expenses[3]?.["1"];
  const homeImprovement = req.body?.expenses[3]?.["2"];

  const hobbies = req.body?.expenses[4]?.["0"];
  const entertainment = req.body?.expenses[4]?.["1"];
  const healthAndWellness = req.body?.expenses[4]?.["2"];

  const miscellaneous = req.body?.expenses[5]?.["0"];

  const user = req.body?.user;

  const data = [user, rentMortgage, electric, water, internet, cellphone, groceries, eatingOut, transportation, homeMaintenance, autoMaintenance, gifts, vacation, education, homeImprovement, hobbies, entertainment, healthAndWellness, miscellaneous];

  oauth.then((client) => {
    client.spreadsheets.values
      .append({
        spreadsheetId: sheetId,
        range: "budgetappExpenses!A1",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [data],
        },
      })
      .then((result) => {
        res.status(200).json({ message: "Success", success: true });
      })
      .catch((err) => {
        res.status(200).json({ message: "Server Error", success: false });
      });
  });
};

exports.setFlag = async function (req, res) {
  const user = req.body?.user;

  oauth.then((client) => {
    client.spreadsheets.values.get({ spreadsheetId: sheetId, range: "budgetappAuth!A1:A" }).then((result) => {
      const userRow = result.data.values;
      const userIndex = userRow.findIndex((row) => row[0] === user);
      const row = userIndex + 1;
      client.spreadsheets.values
        .append({
          spreadsheetId: sheetId,
          range: `budgetappAuth!D${row}`,
          valueInputOption: "USER_ENTERED",
          resource: {
            values: [["done"]],
          },
        })
        .then((result) => {
          res.status(200).json({ message: "Success", success: true });
        })
        .catch((err) => {
          res.status(200).json({ message: "Server Error", success: false });
        });
    });
  });
};

exports.getExpenses = async function (req, res) {
  const user = req.body?.user;

  oauth.then((client) => {
    client.spreadsheets.values.get({ spreadsheetId: sheetId, range: "budgetappExpenses!A1:S" }).then((result) => {
      const response = result.data.values;
      const userRow = response.filter((row) => row[0] === user);
      res.status(200).json({ message: "Success", success: true, data: userRow });
    });
  });
};
