export const saveGameToStorage = ({ board, turn}) => {
  //guardar el yogo
  window.localStorage.setItem('board',JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}