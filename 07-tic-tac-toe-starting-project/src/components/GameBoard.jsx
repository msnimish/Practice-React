export default function GameBoard({onSquareSelect, board}) {
    return (
    <ol id="game-board">
        {board.map((row, rowIndex) => 
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