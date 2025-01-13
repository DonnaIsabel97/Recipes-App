import React, { use, useState } from "react";

const Signup = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const saveSignupInfo = (event) => {
        event.preventDefault();
        if (!usernameValue || !passwordValue) {
            return;
        }
        window.location.href = "http://localhost:5173";
    }

    return(
        <div className="SignupContainer">
            <form onSubmit={saveSignupInfo}>
                <div>
                    Username: 
                    <input type="text" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)}></input>
                </div>
                <div>
                    Password: 
                    <input type="text" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)}></input>
                </div>
                <button>Sign up</button>
            </form>
        </div>
    )

};

export default Signup;