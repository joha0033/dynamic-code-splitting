import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Welcome from './components/home/home'
import About from './components/about/about'
import DynamicImport from './components/dynamicImport/dynamicImport'

//dynamic loading with routes
const Contact = (props) => (
  <DynamicImport load={() => import('./components/contact/contact')}>
    {(Component) => Component === null
      ? <h1>Loading...</h1>
      : <Component {...props} />
    }
  </DynamicImport>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thanks: null
    }
  }

  //dynamic loading with components
  loadComponent = () => {
    //import someting
    import('./components/thanks/thanks')
      .then((mod) => this.setState(() => ({
        thanks: mod.default
      })))
  }

  unloadComponent = () => {
    this.setState(() => ({ thanks: null }))
  }

  render() {
    const { thanks: Thanks } = this.state
    return (
      <div className='padding'>
        <Router >
          <div>
            <h1>This is a code sliptting demo for routes and components</h1>
            <ul>
              <li><Link onClick={this.unloadComponent} to='/' name='dude'>Home</Link></li>
              <li><Link onClick={this.unloadComponent} to='/about'>About</Link></li>
              <li><Link onClick={this.unloadComponent} to='/contact'>Contact (dynamic code splitting route)</Link></li>
              <li><Link onClick={this.unloadComponent} to='/thanks'>Thanks </Link></li>
            </ul>
            <hr />
            <Route exact path='/' render={(props) => {
              return (<Welcome name='Dude' />)
            }} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />

            <Route path='/thanks' render={() => {
              return Thanks === null
                ? <button onClick={this.loadComponent}>
                  Click to load Thanks component
            </button>
                : <Thanks />
            }
            } />

          </div>
        </Router>

      </div>

    );
  }
}

export default App;
