const { google } = require("googleapis");
exports.getAuthClient = async () => {
  const authClient = new google.auth.GoogleAuth({
    keyFile: "ADC.json",
    scopes: "https://www.googleapis.com/auth/spreadsheets",
  });
  const auth = await authClient.getClient();
  const client = google.sheets({ version: "v4", auth });
  return client;
};
