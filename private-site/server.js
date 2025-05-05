const express = require("express");
const app = express();
const PORT = 3000;

// تنظیم موتور EJS
app.set("view engine", "ejs");

// روت اصلی
app.get("/", (req, res) => {
  res.render("index");
});

// اجرا
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
