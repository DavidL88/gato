import { WINNER_COMBOS } from "../components/Constants"

export const checkWinner = (boardToCheck) => {
  //revisamos todas las combinaciones ganadoras pa ver si X u O ganó
 for(const combo of WINNER_COMBOS) {
   const [a, b, c] = combo
   if (
     boardToCheck[a] && // 0 --> x u o
     boardToCheck[a] === boardToCheck[b] &&
     boardToCheck[a] === boardToCheck[c] 
   ) {
     return boardToCheck[a]
   }
 }
  // si no hay ganador
  return null
}

export const checkEndGame = (newBoard) => {
  //revisamos si hay empate, sino hay espacios vacíos en el board
 return newBoard.every((square) => square !== null)
}