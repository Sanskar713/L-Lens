const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Legal Lens Backend Running Successfully");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});