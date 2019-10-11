import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import LoginPage from './components/login'
import RegisterPage from './components/register'
const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))
















//import React from 'react';
//import ReactDOM from 'react-dom';
//import'antd/dist/antd.css';
//import 'tachyons';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
