const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files (e.g., your GitHub repo files)
app.use(express.static(path.join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
    res.send("Welcome to My Simple Node.js Server!");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
