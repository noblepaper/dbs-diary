const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const port = process.env.PORT || 10100;
const path = require("path");
const config = require("./settings");

app.use(express.static(path.resolve(__dirname, "client", "build")));

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", require("./routes/auth"));
app.use("/refresh", require("./routes/verify"));
app.use("/api/entries", require("./routes/entries"));
app.use("/api/journal", require("./routes/journal"));
app.use("/api/shitlist", require("./routes/shitList"));


mongoose.connect(config.db,
    { keepAlive: true, reconnectTries: Number.MAX_VALUE, useMongoClient: true },
    err => {
        if (err) throw err;
        console.log("Connected to the diary database");
    }
);

app.get(/\/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
});
