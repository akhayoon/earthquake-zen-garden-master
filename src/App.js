import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import Header from './common/components/Header';
import EarthQuakeList from './earthquakes/components/EarthQuakeList';
import EarthQuakeDetail from './earthquakes/components/EarthQuakeDetail';
import Profile from './profile/Profile';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <EarthQuakeList />
          </Route>
          <Route path="/earthquakes/:id">
            <EarthQuakeDetail />
          </Route>
          <Route exact path="/earthquakes">
            <EarthQuakeList />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
