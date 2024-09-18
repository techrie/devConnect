const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");

const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  //Creating a new instance of User model
  const user = new User(req.body);

  try {
    await user.save();
    res.send("User added successfully");
  } catch (err) {
    res.status(400).send("Error saving the user", err.message);
  }
});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(7777, () => {
      console.log("Server is listening on port 7777");
    });
  })
  .catch((err) => {
    console.log("Database cannot be connected");
  });

/*

const { adminAuth, userAuth } = require("./middleware/auth");
//Order of routes is important

//Works for all requests GET, POST, PATCH, DELETE
app.use("/admin", adminAuth);
app.use("/user", userAuth);

app.get("/admin/getAllData", (req, res) => {
  res.send("All data is sent");
});

app.delete("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});

app.use("/user/data", userAuth, (req, res) => {
  res.send({ firstname: "USer", lastname: "Da" });
});

app.post("/user/login", (req, res) => {
  res.send("Data saved successfully");
});

app.delete("/user", (req, res) => {
  res.send("User deleted");
});

//this will match all HTTP method API calls to /hello
app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

//keep this at the end . It matches all requests. Wild card error handling
app.use("/", (err, req, res, next) => {
  if (err) {
    //console.log(err);
    res.status(500).send("something went wrong");
  }
});

// //b is optional to test APi's use localhost:7777/ac also works for /abc
// app.get("/ab?c", (req, res) => {
//   res.send({ firstname: "USer", lastname: "Da" });
// });

// //works for /abcd /abUSERcd /abanythingcd
// app.get("/ab*cd", (req, res) => {
//   res.send({ firstname: "USer", lastname: "Da" });
// });

// //works for /abc /abbbbbbbc /abbc we can add as many b's
// app.get("/ab+c", (req, res) => {
//   res.send({ firstname: "USer", lastname: "Da" });
// });

// //works for /abcd /abcbcbcbcd /abcbcd we can add as many bc's
// app.get("/abc+d", (req, res) => {
//   res.send({ firstname: "USer", lastname: "Da" });
// });

// //grouping bc is optional works for /ad /abcd
// app.get("/a(bc)?d", (req, res) => {
//   res.send({ firstname: "USer", lastname: "Da" });
// });

// //works for regex /a /cab
// app.get(/a/, (req, res) => {
//   res.send({ firstname: "USer", lastname: "Da" });
// });

// //works for /fly, /dragonfly, /butterfly
// app.get(/.*fly$/, (req, res) => {
//   res.send({ firstname: "USer", lastname: "Da" });
// });

//next() will go to the next route handler. As soon as the response is sent, connection will be closed

app.use(
  "/user",
  (req, res, next) => {
    console.log("HAndling the route user!!");
    next();
  },
  (req, res) => {
    console.log("HAndling the 2nd route handler!");
    res.send("2nd Response!!");
  }
);

//Express js does this
//when a request is sent to the server or an API call is made,it takes the matching route and it goes through the middleware chain(which has next()) and finally goes to the request handler which handles the response



*/
