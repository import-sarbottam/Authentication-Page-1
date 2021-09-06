import './App.css';
import google  from './image/google.png'

function App() {


  let btn1='Sign in';

  return (
    <div className="App">

      
<div className="authentication-box">
        <div className="container">
        <p className="boxhead">{btn1}</p>
        <p className="Credentials1">Username</p>
        <input type="email"  className="datainputs" />
         <p className="Credentials2">Password</p>
         <input type="password"  className="datainputs" />
         <br />       
         <button className="btn-1">{btn1}</button>
         <p className="signup">Don't have an account? <a href="#">Sign up</a></p>

         
         <div className="Forgetpass">
            <a href="#">Forgot  password?</a>
          </div>

         <button className="googlebtn"> <img src={google} alt="" width="25px"  className="googleimg"/> <p className="loginwithg">login with Google</p></button>
         </div>

      </div>
     
  
    </div>
  );
}

export default App;
