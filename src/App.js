import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { Route } from 'react-router-dom';
import Services from './components/pages/Articles';
import Products from './components/pages/Wotd';
import SignUp from './components/pages/SignUp';
import React from 'react';

function App() {

  return (

    <>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/services'>
        <Services />
      </Route>
      <Route path='/products' >
        <Products />
      </Route>
      <Route path='/sign-up' >
        <SignUp />
      </Route>

    </>
  );
}

export default App;
