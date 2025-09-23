import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { useState } from "react";
import Log from "./components/Log.jsx";

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
  const [gameTurns, setGameTurns] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurns, XSymbol, OSymbol);

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
          <Player name="Player 1" symbol = {XSymbol} isActive={activePlayer === XSymbol}/>
          <Player name="Player 2" symbol = {OSymbol} isActive={activePlayer === OSymbol}/>
        </ol>
        <GameBoard onSquareSelect={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App;
