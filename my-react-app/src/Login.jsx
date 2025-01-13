import React, { use, useState } from "react";

const Login = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const saveLoginInfo = (event) => {
        event.preventDefault();
        if (!usernameValue || !passwordValue) {
            return;
        }
        
    }

    const redirectSignup = (event) => {
        window.location.href = "http://localhost:5173/signup";
    }

    return(
        <div className="LoginContainer">
            <form onSubmit={saveLoginInfo}>
                <div>
                    Username: 
                    <input type="text" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)}></input>
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