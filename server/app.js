const express = require("express");
const dotenv = require("dotenv");
const connectToDb = require("./config/db");
const cookieParser = require("cookie-parser");

dotenv.config();

const userRoutes = require("./routes/auth/user.routes");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/auth", userRoutes);

const startServer = async () => {
  await connectToDb(); // Ensure DB is connected before starting server

  app.listen(process.env.PORT, () => {
    console.log(`Server Started at http://localhost:${process.env.PORT}`);
  });
};

startServer();


