import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

function Home() {
  return <h2> Halaman Baru </h2>
}

function ListView() {
  return (
    <div>
    <h2> Semua User </h2>
    <ul>
        <Link to='user/ilham'>Ilham</Link>
        <br />
        <Link to='user/ucok'>Ucok</Link>
    </ul>
    </div>
  )
}

function DetailView({ match }) {
  return <h2> Ini Halaman {match.params.name} </h2>
}

function NoMatch() {
  return <h2> 404, halaman tidak ditemukan </h2>
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
              <nav>
                  <li> <Link to='/'> Home </Link> </li>
                  <li> <Link to='/users'> User </Link> </li>
              </nav>

              <main>
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/users' exact component={ListView} />
                  <Route path='/user/:name' exact component={DetailView} />
                  <Route component={NoMatch} />
                </Switch>
              </main>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
