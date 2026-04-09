const express = require("express");
const router = express.Router();
const db = require("../db");

// Add vote
router.post("/", async (req, res) => {
  const { vote } = req.body;

  if (!vote) return res.status(400).send("Vote required");

  await db.query("INSERT INTO votes (vote_type) VALUES (?)", [vote]);

  res.send({ message: "Vote recorded" });
});

// Get totals
router.get("/summary", async (req, res) => {
  const [rows] = await db.query(`
    SELECT 
      vote_type,
      COUNT(*) as count
    FROM votes
    GROUP BY vote_type
  `);

  res.send(rows);
});

// Votes over time (grouped by minute)
router.get("/timeline", async (req, res) => {
  const [rows] = await db.query(`
    SELECT 
      DATE_FORMAT(created_at, '%Y-%m-%d %H:%i') as time,
      vote_type,
      COUNT(*) as count
    FROM votes
    GROUP BY time, vote_type
    ORDER BY time
  `);

  res.send(rows);
});

module.exports = router;