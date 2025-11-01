// backend/index.js
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const groupRoutes = require("./routes/groupRoutes");


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/groups", groupRoutes);



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
