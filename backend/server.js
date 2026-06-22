const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// === 300 PALAVRAS PT-PT ===
const words = [
  // <-- ВСТАВИШЬ ПОЛНЫЙ JSON ТУТ
];

// GET palavra
app.get("/word", (req, res) => {
  const chosen = words[Math.floor(Math.random() * words.length)];
  res.json({
    hint: chosen.hint,
    wordLength: chosen.word.length
  });
});

// POST verificação
app.post("/check", (req, res) => {
  const { guess } = req.body;
  const found = words.find(w => w.word === guess.toLowerCase());
  res.json({ correct: !!found });
});

app.listen(3001, () => console.log("Backend running on port 3001"));
