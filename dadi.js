let tiridadi = 3;
let player1 = 0;
let player2 = 0;
let result;
let random = Math.floor(Math.random() * (6 - 1 + 1) + 1);

for (let i = 1; i <= tiridadi; i++) {
  player1 += Math.floor(Math.random() * (6 - 1 + 1) + 1);
  player2 += Math.floor(Math.random() * (6 - 1 + 1) + 1);
}

if (player1 > player2) {
  result = `Dopo il lancio di ${tiridadi} tiri di dadi ha vinto Paolo con un totale di ${player1}  punti`;
} else if (player1 < player2) {
  result = `Dopo il lancio di ${tiridadi} tiri di dadi ha vinto Luca con un totale di ${player2}  punti`;
} else {
  result = `Dopo il lancio di ${tiridadi} tiri di dadi la sfida è terminata in un pareggio poiché entrambi i giocatori hanno totalizzato ${player1} punti`;
}

console.log(result);
