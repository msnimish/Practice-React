import React from 'react'

const Player = ({ name, symbol }) => {
    const [playerName, setPlayerName] = React.useState(name);
    const [isEditing, setIsEditing] = React.useState(false);
    const handleEditClick = () => {
        setIsEditing(editing => !editing);
    };

    const handleChange = (event) => {
        setPlayerName(() => event.target.value);
    }

    let nameComponent;
    if (isEditing) {
        nameComponent = <input type="text" value={playerName} onChange={handleChange}/>;
    } else {
        nameComponent = <span className="player-name">{playerName}</span>;
    }

    let editButtonName = isEditing ? "Save" : "Edit";
  return (
    <li>
        <span className="player">
            {nameComponent}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{editButtonName}</button>
    </li>
  )
}

export default Player;