import express from "express";
import cookieParser from "cookie-parser";
const app = express();
const PORT = 8000;

app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("home page");
});
// set cookie
app.get("/setcookie", (req, res) => {
  res.cookie("username", "maharijtariq", {
    maxAge: 1000 * 60 * 2,
    httpOnly: true,
    sameSite: "strict",
  });
  res.send("cookie  has been set ");
});
// get the cookie
app.get("/getcookie", (req, res) => {
  const username = req.cookies.username;
  if (!username) {
    return res.send("please login the cookie");
  } else {
    res.send(`send username form cookie ${username}`);
  }
});
app.get("/deletecookie", (req, res) => {
  res.clearCookie("username");
  res.send("usename delete successfully");
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});
