const User_data = require("../Models/data_models");

const User_Controllers = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields (name, email, message) are required" });
    }

    // Save data to MongoDB
    const newData = new User_data({ name, email, message });
    await newData.save();

    // Send success response
    res.status(201).json({
      message: "Data saved successfully",
      data: newData,
    });

  } catch (error) {
    console.error("Error while saving data:", error);
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = User_Controllers;
