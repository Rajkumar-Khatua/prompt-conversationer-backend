const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const discussionRoutes = require("./routes/discussionRoutes.js");
const messageRoutes = require("./routes/messageRoutes.js");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO__API, {})
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.use(bodyParser.json());

// Routes
app.use("/api/discussions", discussionRoutes);
app.use("/api/messages", messageRoutes); // Change the base path for messages

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
