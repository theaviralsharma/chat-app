const mongoose = require("mongoose");

const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB connection error: ", error);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectToDb;
