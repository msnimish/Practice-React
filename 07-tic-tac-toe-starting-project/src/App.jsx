import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";
import {WINNING_COMBINATIONS} from "./winning-combinations.js";
import GameOver from "./components/GameOver.jsx"

const board = [
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];

function deriveActivePlayer(turns, XSymbol, OSymbol) {
  if (turns.length === 0) {
    return XSymbol;
  }
  const lastTurn = turns[0];
  return lastTurn.player === XSymbol ? OSymbol : XSymbol;
}


function App() {
  const XSymbol = "X";
  const OSymbol = "O";
  const [players, setPlayers] = useState({
    "X":"Player 1",
    "O":"Player 2"
  })
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns, XSymbol, OSymbol);
  
  let winner;
  let winnerName;
  let gameBoard = [...board.map(arr => [...arr])];
  const hasDraw = gameTurns.length == 9 && !winner;
  
  for(let turn of gameTurns) {
    let {square, player} = turn;
    let {row, col} = square;
    gameBoard[row][col] = player;
  }

  for (const combinations of WINNING_COMBINATIONS){
    const firstSquaresymbol = gameBoard[combinations[0].row][combinations[0].column];
    const secondSquaresymbol = gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquaresymbol = gameBoard[combinations[2].row][combinations[2].column];
    if(firstSquaresymbol && firstSquaresymbol === secondSquaresymbol && firstSquaresymbol === thirdSquaresymbol){
      winner= players[winfirstSquaresymbolner];
      // alert(`Player ${firstSquaresymbol} has won!`);
      // setGameTurns([]);
      // gameBoard = board;
      // break;
    }
  }

  function handleRestart(){
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName){
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    });
  }
    

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      let playerSymbol = deriveActivePlayer(prevGameTurns, XSymbol, OSymbol);
      let updatedGameTurns = [{square: {row: rowIndex, col: colIndex}, player:playerSymbol} , ...prevGameTurns ];
      return updatedGameTurns;
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol = {XSymbol} isActive={activePlayer === XSymbol} onNameChange={handlePlayerNameChange}/>
          <Player name="Player 2" symbol = {OSymbol} isActive={activePlayer === OSymbol} onNameChange={handlePlayerNameChange}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRestart}/>}
        <GameBoard onSquareSelect={handleSelectSquare} board={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App;
