const board = [
  [null, null, null], 
  [null, null, null], 
  [null, null, null]
];

export default function GameBoard({onSquareSelect, turns}) {
  let gameBoard = board;

  for(let turn of turns) {
    let {square, player} = turn;
    let {row, col} = square;
    gameBoard[row][col] = player;
  }
    // const [gameBoard, setGameBoard] = useState(board);

    // function handleSelectSquare(rowIndex, cellIndex) {
    //     setGameBoard(prevBoard => {
    //         const newBoard = [...prevBoard.map(row => [...row])];
    //         newBoard[rowIndex][cellIndex] = activePlayerSymbol;
    //         return newBoard;
    //     });
    //     onSquareSelect();
    // }
  
    return (
    <ol id="game-board">
        {gameBoard.map((row, rowIndex) => 
        <li key={rowIndex}>
            <ol>
                {row.map((playerSymbol, cellIndex) => 
                <li key={cellIndex}>
                    <button onClick={()=>onSquareSelect(rowIndex,cellIndex)} disabled={!!playerSymbol}>{playerSymbol}</button>
                </li>)}
            </ol>
        </li>)}
    </ol>
    )
};