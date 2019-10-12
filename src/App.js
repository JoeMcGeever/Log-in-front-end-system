import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'


const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))

//exact is so that when register is rendered, login isnt also rendered (the slash makes this behaviour)


//class App extends Component {
//  render() {
//   return (
//      <Login />
//    )
//  }
//}


//export default App;

//https://www.youtube.com/watch?v=LXGYUN5_Nb4
//<Link to="/">Login</Link>
//<Link to="/register">Register</Link>
//https://blog.pshrmn.com/simple-react-router-v4-tutorial/