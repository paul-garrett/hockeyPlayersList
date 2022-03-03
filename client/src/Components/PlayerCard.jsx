import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useHistory } from 'react-router-dom';
import dateFormat from 'dateformat'

const PlayerCard = (props) => {

    let history = useHistory();

    const [player, setPlayer] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/hockeyPlayers/` + id)
            .then(res => {
                console.log(res.data)
                setPlayer(res.data)
            })
            .catch(err => console.log(err));
    }, [id]);

    const deletePlayer = (deleteId) => {
        axios.delete("http://localhost:8000/api/hockeyPlayers/" + deleteId)
            .then(res => {
                console.log(res.data);
                history.push("/hockeyPlayers")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>{player.playerName}</h1>
            <h3>Team: {player.team}</h3>
            <h3>Date of Birth: {dateFormat(player.dateOfBirth, "dddd,mmmm dS, yyyy")}</h3>
            <h3>Nationality: {player.nationality}</h3>
            <h3>Shoots: {player.shoots}</h3>
            <Link to="/hockeyPlayers">Home</Link>
            <Link to={`/hockeyPlayers/update/${player._id}`}>Update</Link>
            <button onClick={() => { deletePlayer(player._id) }}>Delete</button>
        </div>
    )
}

export default PlayerCard;