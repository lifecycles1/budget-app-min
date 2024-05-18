const { getAuthClient } = require("../utilities/helpers");
const oauth = getAuthClient();
const sheetId = process.env.SPREADSHEET;

exports.signUp = async function (req, res) {
  const { email, password } = req.body;
  try {
    oauth.then((client) => {
      client.spreadsheets.values.get({ spreadsheetId: sheetId, range: "budgetappAuth!A:C" }).then((resp) => {
        const response = resp.data.values;
        let r = false;
        for (let i = response.length - 1; i >= 0; i--) {
          if (response[i][0] === email) {
            console.log(response[i][0]);
            r = true;
            break;
          }
        }
        if (r) {
          res.status(200).json({ message: "Email already exists", success: false });
        } else {
          oauth.then((client) => {
            client.spreadsheets.values
              .append({
                spreadsheetId: sheetId,
                range: "budgetappAuth!A1",
                valueInputOption: "USER_ENTERED",
                resource: {
                  values: [[email, password]],
                },
              })
              .then((result) => {
                res.status(200).json({ message: "Success", success: true });
              });
          });
        }
      });
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Server Error", success: false });
  }
};

exports.signIn = async function (req, res) {
  const { email, password } = req.body;
  try {
    oauth.then((client) => {
      client.spreadsheets.values.get({ spreadsheetId: sheetId, range: "budgetappAuth!A:D" }).then((resp) => {
        const response = resp.data.values;
        let r = 0;
        for (let i = response.length - 1; i >= 0; i--) {
          if (response[i][0] === email && response[i][1] === password) {
            r = i;
            break;
          }
        }
        if (r > 0) {
          if (response[r][3] !== "done") {
            res.status(200).json({ message: "Not Done", success: true });
          } else if (response[r][3] === "done") {
            res.status(200).json({ message: "Success", success: true });
          }
        } else {
          res.status(200).json({ message: "Invalid Credentials", success: false });
        }
      });
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Server Error", success: false });
  }
};
