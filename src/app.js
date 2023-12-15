const express = require("express");
const hbs = require("hbs");
const path = require("path");
const app = express();
const PORT = 3000;

//  Paths
const StaticPath = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const Partial_path = path.join(__dirname, "../templates/partials");

// hbs.handlebars set
hbs.registerPartials(Partial_path);
app.set("view engine", "hbs");
app.set("views", templates_path);
app.use(express.static(StaticPath));

// Route Create

// Home Page
app.get("/", (req, res) => {
  res.render("index");
});

// About Page
app.get("/about", (req, res) => {
  res.render("about");
});

// Weather Page
app.get("/weather", (req, res) => {
  res.render("Weather");
});

// Page Not found Page
app.get("*", (req, res) => {
  res.render("Page_404", {
    ErrorMsg: "Page Not Found OOps this is wronge",
  });
});

// listen at port
app.listen(PORT, (er) => {
  console.log(`Listen at Port ${PORT}`);
});
