
const express = require("express");
const app = express();

// const PORT = 7000;
const cors = require("cors");
const connection = require("./Config/config");
const userController = require("./Routes/user.routes");
const authentication = require("./Middleware/authentication");
const bmiController = require("./Routes/BmiCal.routes");
app.use(express.json());
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("home");
});
app.use("/user", userController);

app.use(authentication);
app.use("/bmi", bmiController);

app.listen(process.env.PORT||7000 , async () => {
    console.log(`listeniing on PORT ${process.env.PORT}`);
  try {
    await connection;
    console.log("database connected");
  } catch (error) {
    console.log("error to connecting db");
    console.log(error);
  }
});
