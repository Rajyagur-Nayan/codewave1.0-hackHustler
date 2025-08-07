const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cors({
  origin: "http://localhost:3000", // your frontend URL
  credentials: true,               // allow cookies
}));

// other middlewares
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/templates', express.static(path.join(__dirname, 'templates')));
app.use('/uploads/products', express.static(path.join(__dirname, 'uploads')));

// routes
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

app.use("/signup", require("./src/routes/user/signup.js"));
app.use("/login", require("./src/routes/user/login.js"));
app.use("/farmer", require("./src/routes/farmer/form.js"));
app.use("/chat", require("./src/routes/chat/chat.js"));
app.use("/admin", require("./src/routes/admin/dashboard.js"));
app.use("/chat", require("./src/routes/chatgemini/chat.js"));

module.exports = app;
