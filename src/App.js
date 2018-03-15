import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom'

import Welcome from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/' name='dude'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Welcome} />
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>

        </div>
      </Router>

    );
  }
}

export default App;
