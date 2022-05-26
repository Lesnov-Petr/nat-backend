const morgan = require("morgan");
const express = require("express");
const { connectDB } = require("./src/db");
const { errorHandler } = require("./src/helpers");
const { contactsRouter } = require("./src/routers");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.end("<h1>This page my future</h1>");
});

app.use("/api/contacts", contactsRouter);
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, (err) => {
      if (err) {
        console.error(err);
      }
      console.log(`Server work at port ${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
  }
};

start();
