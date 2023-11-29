// const quantV = 100;
// const quantD = 20;

// let elo = '';

function definirElo(quantV, quantD){
const saldoPartidas = (quantV - quantD)
let elo = '';

if(saldoPartidas < 10){
  elo = "Ferro"
}else if(saldoPartidas > 10 && saldoPartidas <= 20){
  elo = "Bronze"
}if(saldoPartidas > 20 && saldoPartidas <= 50){
  elo = "Prata"
}if(saldoPartidas > 50 && saldoPartidas <= 80){
  elo = "Ouro"
}if(saldoPartidas > 80 && saldoPartidas <= 90){
  elo = "Diamante"
}if(saldoPartidas > 90 && saldoPartidas < 100){
  elo = "Lendário"
}if(saldoPartidas >= 101){
  elo = "Imortal"
}
return console.log(`O Herói tem de saldo de ${saldoPartidas} e está no nível de ${elo}`)
}
definirElo(100,20)
// console.log(`O Herói tem de saldo de ${saldoPartidas} e está no nível de ${elo}`)