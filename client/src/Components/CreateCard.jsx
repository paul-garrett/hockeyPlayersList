import React, { useState } from 'react';
import axios from 'axios';
import { useHistory, useParams, Link } from 'react-router-dom';

const options = ['Right', 'Left'];

const Create = (props) => {

    let history = useHistory();
    const { id } = useParams();

    const [playerName, setPlayerName] = useState("");
    const [team, setTeam] = useState("");
    const [nationality, setNationality] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [shoots, setShoots] = useState(options[0]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [playerNameError, setPlayerNameError] = useState("");
    const [teamError, setTeamError] = useState("");
    const [nationalityError, setNationalityError] = useState("");

    const createPlayer = (e) => {
        e.preventDefault();
        console.log("Player submitted!", playerName, team, nationality, dateOfBirth, shoots);

        const newPlayer = {
            playerName: playerName,
            team,
            nationality,
            dateOfBirth,
            shoots
        }
        axios.post("http://localhost:8000/api/hockeyPlayers", newPlayer)
            .then(res => {
                console.log(res.data);
                if (res.data.message === "error") {
                    setError(true)
                    setErrorMessage(res.data.error.message)
                    if (res.data.error.errors.playerName) {
                        setPlayerNameError(res.data.error.errors.playerName.message)
                    }
                    if (res.data.error.errors.team) {
                        setTeamError(res.data.error.errors.team.message)
                    }
                    if (res.data.error.errors.nationality) {
                        setNationalityError(res.data.error.errors.nationality.message)
                    }
                    console.log("error")
                } else {
                    history.push("/")
                    console.log("Success adding Player to DB!");
                }
            })
            .catch(err => console.log("Error adding Player", err))
    }

    return (
        <div>
            <h1>Add New Player</h1>
            <Link to="/hockeyPlayers">Home</Link>
            <div>
                <form onSubmit={createPlayer}>
                    Player Name:
                    <input type="text" onChange={(e) => setPlayerName(e.target.value)} value={playerName} /> <br />
                    {error && <p>{playerNameError}</p>}

                    Team:
                    <input type="text" onChange={(e) => setTeam(e.target.value)} value={team} /> <br />
                    {error && <p>{teamError}</p>}

                    Nationality:
                    <input type="text" onChange={(e) => setNationality(e.target.value)} value={nationality} /> <br />
                    {error && <p>{nationalityError}</p>}

                    Date of Birth:
                    <input type="date" onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth}></input>
                    <br />

                    <label>Shoots:</label>
                    <select onChange={e => setShoots(e.target.value)} value={shoots}>
                        {options.map((option, idx) =>
                            <option key={idx} value={option}>{option}</option>
                        )}
                    </select>
                    <br />

                    <button>Add Player</button>
                </form>
            </div>
        </div>
    )

}

export default Create;