import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Main = (props) => {

    const [hockeyPlayers, setHockeyPlayers] = useState([]);
    const deletePlayerFromDB = id => {
        setHockeyPlayers(hockeyPlayers.filter((hockeyPlayers) => hockeyPlayers._id !== id))
    }

    useEffect(() => {
        getPlayersFromDB();
    }, [])

    const getPlayersFromDB = () => {
        axios.get("http://localhost:8000/api/hockeyPlayers")
            .then(res => {
                console.log(res.data);
                setHockeyPlayers(res.data)
            })
    }

    const deletePlayer = (deleteId) => {
        axios.delete(`http://localhost:8000/api/hockeyPlayers/${deleteId}`)
            .then(res => {
                console.log(res.data);
                deletePlayerFromDB(deleteId)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Hockey Players</h1>
            <div>
                {hockeyPlayers.map((player, _idx) => {
                    return (
                        <div key={player._id}>
                            <p>Name: {player.playerName}</p>
                            <p>Team: {player.team}</p>
                            <p>Nationality: {player.nationality}</p>
                            <p>Action: <Link to={`/hockeyPlayers/${player._id}`}>view</Link></p>
                        </div>
                    )
                })}
            </div>
            <Link to="/hockeyPlayers/new/create">Add New Player</Link>
        </div>
    )

}

export default Main;