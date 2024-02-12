const morgan = require("morgan");
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./src/db");
const { errorHandler } = require("./src/helpers");
const {
  contactsRouter,
  authRouter,
  specificationRouterFSM,
} = require("./src/routers");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.end("<h1>OK  my future</h1>");
});

app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/specificationFSM", specificationRouterFSM);
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
    console.error("ERROR", error.message);
  }
};

start();
