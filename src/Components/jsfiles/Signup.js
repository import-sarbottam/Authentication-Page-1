import '../cssfiles/signup.css'
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';




export const Signup = () => {

    let Stylesheet = {
        color: "red",
        fontSize: "13px",
    }




    const pass = useRef('');
    const confirmpass = useRef('');
    const mail = useRef('');
    const userid = useRef('');


    const [warnmessage, setwarnmessage] = useState('');




    const Check = () => {
        if (pass.current.value === '' || confirmpass.current.value === '' || mail.current.value === '' || userid.current.value === '') {
            setwarnmessage('All fields are *mandatory');
        }
        else {

            if (userid.current.value.length < 4) {
                setwarnmessage('Username not less than 4 characters');
                userid.current.value='';
                pass.current.value = '';
                confirmpass.current.value = '';
                mail.current.value='';

            }
            else {
                if (pass.current.value.length < 8) {
                    setwarnmessage('Password not less than 8 characters');
                    pass.current.value = '';
                    confirmpass.current.value = '';
                }
                else {
                    if (pass.current.value === confirmpass.current.value) {
                        console.log("password accepted");
                        pass.current.value = '';
                        confirmpass.current.value = '';
                    }
                    else {
                        setwarnmessage('Both password fields didnot match')
                        pass.current.value = '';
                        confirmpass.current.value = '';

                    }
                }
            }
        }

    }


    let btn2 = "Sign up";


    return (
        <div className="App">
            <div className="authentication-box">
                <div className="container">
                    <p className="boxhead">{btn2}</p>



                    <p className="Credentials1">Username</p>
                    <input type="text" className="datainputs alpha" onChange={(e) => e.target.value} ref={userid} />

                    <p className="Credentials1">Email</p>
                    <input type="email" className="datainputs alpha" onChange={(e) => e.target.value} ref={mail} />

                    <p className="Credentials2" minlength="8">Password</p>
                    <input type="password" className="datainputs alpha" onChange={(e) => e.target.value} ref={pass} />

                    <p className="Credentials2">Confirm Password</p>
                    <input type="password" className="datainputs alpha" onChange={(e) => e.target.value} ref={confirmpass} />
                    <br />


                    <p className="warnimess" style={Stylesheet}>{warnmessage}</p>



                    <button className="btn-1" onClick={() => Check()}>{btn2}</button>
                    <p className="signup">Already have an account? <Link className="linksign" to='/signin'>Sign in</Link></p>




                </div>

            </div>


        </div>
    )
}

