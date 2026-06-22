async function loadWord() {
  const res = await fetch("http://localhost:3001/word");
  const data = await res.json();
  document.getElementById("hint").innerText = "Dica: " + data.hint;
}

async function check() {
  const guess = document.getElementById("guess").value;

  const res = await fetch("http://localhost:3001/check", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ guess })
  });

  const data = await res.json();

  document.getElementById("result").innerText =
    data.correct ? "✔ Correto!" : "❌ Tenta novamente";
}

loadWord();
