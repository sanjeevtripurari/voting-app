require("dotenv").config();
const express = require("express");
const cors = require("cors");

const voteRoutes = require("./routes/vote");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/vote", voteRoutes);

app.get("/", (req, res) => {
  res.send("Voting API running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});