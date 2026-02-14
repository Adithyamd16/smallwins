let wins = JSON.parse(localStorage.getItem("wins")) || [];

function addWin() {
  const input = document.getElementById("winInput");
  const winText = input.value.trim();

  if (winText === "") return;

  wins.push(winText);
  localStorage.setItem("wins", JSON.stringify(wins));

  input.value = "";
  updateUI();
}

function updateUI() {
  const list = document.getElementById("winList");
  list.innerHTML = "";

  wins.forEach((win) => {
    const li = document.createElement("li");
    li.textContent = "✅ " + win;
    list.appendChild(li);
  });

  const totalPoints = wins.length * 10;
  document.getElementById("points").textContent = totalPoints;

  let progressPercent = Math.min(totalPoints, 100);
  document.getElementById("progress").style.width = progressPercent + "%";
}

updateUI();
