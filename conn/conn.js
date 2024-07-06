const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    const url="mongodb+srv://manshimalik456:g1bwsiGR4e0l3TqT@cluster0.ltbcdov.mongodb.net/todo";
    await mongoose
      .connect(
        url
      )
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    console.log(error);
  }
};
conn();
