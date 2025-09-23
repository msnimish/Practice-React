export default function Log({turns}){
    return <ol id="log">
        {turns.map((turn) => {
            let {square, player} = turn;
            let {row, col} = square;
            return <li key={`${row}${col}`}>Player {player} selected row {row + 1}, column {col + 1}</li>
        })}
    </ol>
}