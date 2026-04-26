let moeda = "Reais";
let simboloMoeda = "R$";
let messageTimeout;

const botoes = document.querySelectorAll('.nav-btn');

botoes.forEach(btn => {
	btn.addEventListener('click', () => {

		botoes.forEach(b => b.classList.remove('active'));

		btn.classList.add('active');
	});
});

const itensNav = document.querySelectorAll('.nav-btn');

// ativa o primeiro ao carregar
window.addEventListener('DOMContentLoaded', () => {
  itensNav[0].classList.add('active');
});

// clique
itensNav.forEach(item => {
  item.addEventListener('click', () => {
    // remove active de todos
    itensNav.forEach(i => i.classList.remove('active'));
    
    // adiciona no clicado
    item.classList.add('active');
  });
});



/*
  window.addEventListener('load', () => {
 
						document.querySelectorAll('.reveal').forEach(el => {
						el.classList.add('show');
						});
					});	*/


function setMoedaR() {
	  moeda = "Reais";
	  simboloMoeda = "R$";
}
function setMoedaT() {
	  moeda = "Thaisinhas";
	  simboloMoeda = "T$";
}

if (window.innerWidth > 768) {
  document.body.innerHTML = `
    <div style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: black;
      color: white;
      font-family: sans-serif;
      text-align: center;
      padding: 20px;
    ">
      <div>
        <h1>📱 Apenas celular</h1>
        <p>App bloqueado para computadores. Utilize uma resolução de 768px ou um telefone.</p>
      </div>
    </div>
  `;
}

const gameContainer = document.getElementById("game-container");

const rows = 10;
const cols = 10;
const bombCount = 15;

let gameOver = false;
let currentPlayer = 1;

// 🔥 cria o tabuleiro
function createBoard() {
  const cells = [];

  for (let i = 0; i < rows * cols; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.id = i;

    gameContainer.appendChild(cell);
    cells.push(cell);
  }

  // 💣 coloca bombas
  let bombsPlaced = 0;
  while (bombsPlaced < bombCount) {
    const randomIndex = Math.floor(Math.random() * cells.length);

    if (!cells[randomIndex].classList.contains("bomb")) {
      cells[randomIndex].classList.add("bomb");
      bombsPlaced++;
    }
  }

  return cells;
}

const cells = createBoard();
showTurnMessage(currentPlayer);

// 💥 clique / toque
function handleCellClick(event) {
	
	  
  if (gameOver) return;

  const cell = event.target;
  if (cell.classList.contains("revealed")) return;

  const player = currentPlayer;

  cell.classList.add("revealed");
  cell.classList.add("player-" + player);

  if (cell.classList.contains("bomb")) {
    cell.innerHTML = "💣";
  	  navigator.vibrate(1500);
  	document.body.classList.add("shake");

setTimeout(() => {
  document.body.classList.remove("shake");
}, 300);
    revealAllBombs();
  	
    gameOver = true;

    setTimeout(() => {
      alert(`💀 Player ${player} perdeu`);
    }, 100);

  } else {
    const adjacentBombs = getAdjacentBombs(Number(cell.dataset.id));
    cell.innerHTML = adjacentBombs || "";
  }
	const msg = document.querySelector(".turn-message");
if (msg) {
  clearTimeout(messageTimeout);
  removeMessage(msg);
}
	// alterna corretamente
currentPlayer = player === 1 ? 2 : 1;

setTimeout(() => {
  showTurnMessage(currentPlayer);
}, 100);
}

// 💣 revela tudo
function revealAllBombs() {
  cells.forEach((cell) => {
    if (cell.classList.contains("bomb")) {
      cell.classList.add("revealed");
      cell.innerHTML = "💣";
    }
  });
}

// 🔢 conta bombas ao redor
function getAdjacentBombs(index) {
  const row = Math.floor(index / cols);
  const col = index % cols;

  let count = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = col - 1; c <= col + 1; c++) {
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        const neighborIndex = r * cols + c;

        if (cells[neighborIndex].classList.contains("bomb")) {
          count++;
        }
      }
    }
  }

  return count;
}

// 👆 eventos (mobile + desktop)
cells.forEach((cell) => 
  cell.addEventListener("click", handleCellClick));

function gameBomb() {
	   window.location.href = "bomb.html"
}

function showTurnMessage(player) {
  const oldMsg = document.querySelector(".turn-message");
  if (oldMsg) oldMsg.remove();

  const msg = document.createElement("h1");
  msg.classList.add("turn-message", `player-${player}`);
  msg.textContent = `Jogador ${player}`;

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.classList.add("show");
  }, 10);

  messageTimeout = setTimeout(() => {
    removeMessage(msg);
  }, 2000);
}

function removeMessage(msg) {
  if (!msg) return;

  msg.classList.remove("show");
  msg.classList.add("hide");

  setTimeout(() => {
    msg.remove();
  }, 200);
}
function feedback() {
	   window.location.href = "feedback.html"
}

function home() {
	   
	   window.location.href = "index.html"
}