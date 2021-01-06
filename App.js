import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Nav from './Components/nav.js';
import Home from './Components/home.js';
import Footer from './Components/footer.js';

function App() {
  return (
    <div className="app">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
