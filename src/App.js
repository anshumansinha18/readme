import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Route } from 'react-router-dom';
import Articles from './components/pages/Articles';
import Wotd from './components/pages/Wotd';
import SignUp from './components/pages/SignUp';
import React from 'react';

function App() {

  return (

    <>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/articles'>
        <Articles />
      </Route>
      <Route path='/wotd' >
        <Wotd />
      </Route>
      <Route path='/sign-up' >
        <SignUp />
      </Route>

    </>
  );
}

export default App;
