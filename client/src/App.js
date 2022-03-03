import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from './Components/Main';
import PlayerCard from './Components/PlayerCard';
import Create from './Components/CreateCard';
import Update from './Components/UpdateCard'



function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/hockeyPlayers/update/:id">
          <Update />
        </Route>

        <Route path="/hockeyPlayers/new/create">
          <Create />
        </Route>

        <Route path="/hockeyPlayers/:id">
          <PlayerCard />
        </Route>

        <Route path="/hockeyPlayers">
          <Main />
        </Route>

        <Route path="/">
          <Redirect to="/hockeyPlayers" />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
