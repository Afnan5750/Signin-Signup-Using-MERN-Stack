const mongoose = require("mongoose");

module.exports = () => {
    try {
        mongoose.connect(process.env.DB);
        console.log("Connected to database successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};
