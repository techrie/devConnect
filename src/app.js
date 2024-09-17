const express = require("express");

const app = express();

//Order of routes is important

app.get("/user", (req, res) => {
  res.send({ firstname: "USer", lastname: "Da" });
});

app.post("/user", (req, res) => {
  res.send("Data saved successfully");
});

app.delete("/user", (req, res) => {
  res.send("User deleted");
});

//this will match all HTTP method API calls to /hello
app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.listen(7777, () => {
  console.log("Server is listening on port 7777");
});
