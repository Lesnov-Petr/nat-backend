const express = require("express");
const morgan = require("morgan");
const { contactsRouter } = require("./src/routers");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.end("<h1>Home page<h1>");
});
app.get("/about", (req, res) => {
  res.end("<h1>About page<h1>");
});

app.use("/api/contacts", contactsRouter);
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

const start = async () => {
  app.listen(PORT, (err) => {
    if (err) {
      console.error(err);
    }

    console.log(`Server work at port ${PORT}`);
  });
};

start();
