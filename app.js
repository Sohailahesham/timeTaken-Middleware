const express = require("express");

const app = express();

const timeTaken = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} took ${duration}ms`);
  });
  next();
};

app.get("/", timeTaken, (req, res) => {
  res.send("Welcome to my Home Page");
});

app.get("/about", timeTaken, (req, res) => {
  res.send("Welcome to my About Page");
});

app.listen(3000, () => console.log("app listening on port 3000"));
