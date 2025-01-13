import React, { use, useState } from "react";

const Login = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const checkLoginInfo = (event) => {
        event.preventDefault();
        if (!emailValue || !passwordValue) {
            return;
        }
        
    }

    const redirectSignup = (event) => {
        window.location.href = "http://localhost:5173/signup";
    }

    return(
        <div className="LoginContainer">
            <form onSubmit={checkLoginInfo}>
                <div>
                    Email: 
                    <input type="text" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></input>
                </div>
                <div>
                    Password: 
                    <input type="text" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}></input>
                </div>
                <button>Login</button>
                <button onClick={redirectSignup}>Sign up</button>
            </form>
        </div>
    )

};

export default Login;