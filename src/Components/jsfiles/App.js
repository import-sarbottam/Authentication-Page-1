import '../cssfiles/App.css';
import google from '../image/google.png'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
  Link
} from 'react-router-dom';
import { Signup } from './Signup';
import { Signin } from './Signin';
import { Forgotpass } from './Forgotpass';


function App() {


  return (
    <>
      <Router>
        <Switch>
        <Route exact path='/signin'>
            <Signin />
          </Route>
          
          <Route exact path='/signup'>
            <Signup />
          </Route>

          <Route exact path='/forgot'>
            <Forgotpass/>
          </Route>
        </Switch>
      </Router>


    </>
  );
}

export default App;
