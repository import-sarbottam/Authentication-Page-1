import { Link } from 'react-router-dom';
import React, { useRef,useState } from 'react';
import '../cssfiles/forgot.css'

export const Forgotpass = () => {



    const mailpass = useRef('');
    const [warnmess2, setwarnmess2] = useState('');

    let fstyle={
        color:"red",
        fontSize:"13px"
    }

    const Fbtn=()=>{
        if(mailpass.current.value === ''){
            setwarnmess2('Please enter the email');
            mailpass.current.value ='';
        }
    }


    let btn3='Forgot Password';


    
    return (
        <div className="App">
        <div className="authentication-box">
        <div className="container">
        <p className="boxhead">{btn3}</p>


        <p className="Credentials1">Enter you email</p>
        <input type="email"  className="datainputs" onChange={(e)=>e.target.value} ref={mailpass} />

        <p style={fstyle}>{warnmess2}</p>

         <br />       
         <button   onClick={()=>Fbtn()} className="btn-1 btn5">Next</button>
         <p className="signup"> <Link className="linksign" to='/signin'>Back</Link></p>
            
        </div>
        </div>
        </div>
    )

}
