import { Link } from 'react-router-dom'
import google  from '../image/google.png';
import React, { useRef,useState } from 'react';
import '../cssfiles/signin.css';


export const Signin = () => {

    const userid1 = useRef('');
    const pass1 = useRef('');


    const [warnmess1, setwarnmess1] = useState('');
    
    let Stylesheet1={
      color:"red",
      fontSize:"13px"
    }


    const checksign=()=>{
      if(pass1.current.value === '' || userid1.current.value === ''){
        setwarnmess1('Both fields are mandatory');
        pass1.current.value='';
        userid1.current.value='';
      }
      

    }

  

    let btn1='Sign in';

    



    return (
        <div className="App">
             
        <div className="authentication-box">
        <div className="container">
        <p className="boxhead">{btn1}</p>


        <p className="Credentials1">Email</p>
        <input type="email"  className="datainputs" ref={userid1}/>

         <p className="Credentials2">Password</p>
         <input type="password"  className="datainputs" ref={pass1}/>
         <p className="warnimess" style={Stylesheet1}>{warnmess1}</p>


         <br />       
         <button onClick={()=> checksign()} className="btn-1">{btn1}</button>
         <p className="signup">Don't have an account? <Link className="linksign" to='/signup'>Sign up</Link></p>

         
         <div className="Forgetpass">
            <Link className="forgottext" to="/forgot">Forgot password?</Link>
          </div>
         <div className="googlecont">
         <button className="googlebtn"> <img src={google} alt="" width="25px"  className="googleimg"/> <p className="loginwithg">login with Google</p></button>
         </div>
         </div>

      </div>
            
        </div>
    )
}
