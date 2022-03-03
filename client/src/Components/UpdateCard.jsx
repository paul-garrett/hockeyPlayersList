import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';

const options = ['Right', 'Left'];

const Update = (props) => {

    let history = useHistory();
    const { id } = useParams();

    const [playerName, setPlayerName] = useState("");
    const [team, setTeam] = useState("");
    const [nationality, setNationality] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [shoots, setShoots] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/hockeyPlayers/${id}`)
            .then(res => {
                console.log(res.data);
                setPlayerName(res.data.playerName);
                setTeam(res.data.team);
                setNationality(res.data.nationality);
                setDateOfBirth(res.data.dateOfBirth);
                setShoots(res.data.shoots);
            })
            .catch()
    }, [id])

    const updateForm = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/hockeyPlayers/${id}`, { playerName, team, nationality, dateOfBirth, shoots })
            .then(res => {
                console.log(res.data);
                history.push(`/hockeyPlayers/${id}`)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Edit Player</h1>
            <Link to="/hockeyPlayers">Home</Link>
            <div>
                <form onSubmit={updateForm}>
                    Player Name:
                    <input type="text" onChange={(e) => setPlayerName(e.target.value)} value={playerName} /> <br />

                    Team:
                    <input type="text" onChange={(e) => setTeam(e.target.value)} value={team} /> <br />

                    Nationality:
                    <input type="text" onChange={(e) => setNationality(e.target.value)} value={nationality} /> <br />

                    Date of Birth:
                    <input type="date" onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth}></input>
                    <br />
                    {JSON.stringify(dateOfBirth)}

                    <label>Shoots:</label>
                    <select onChange={e => setShoots(e.target.value)} value={shoots}>
                        {options.map((option, idx) =>
                            <option key={idx} value={option}>{option}</option>
                        )}
                    </select>
                    <br />

                    <button>Update Player</button>
                </form>
            </div>

        </div>
    )


}

export default Update;