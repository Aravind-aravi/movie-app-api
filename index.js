const express = require("express");
const cors = require("cors");
const connectToDB = require("./config/db");
const movie = require("./routes/movie");

const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use(cors());

//connection database
connectToDB();

//use Routes
app.use("/", movie);

app.post("/auth/login", (req, res) => {
  let username = req.body.username;
  //create jwt token
  const token = jwt.sign({ user: username }, "secret_key");

  //save token in cookie
  res.cookie("authcookie", token, {
    httpOnly: true,
  });
  return res.send({ token: token });
});

app.get("/", (req, res) => res.send("Welcome to Book-app Api "));

app.listen(port, () => console.log(`Server is running on port ${port}`));
