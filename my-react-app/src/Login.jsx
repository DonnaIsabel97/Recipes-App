import React, { use, useState } from "react";

const Login = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const saveLoginInfo = () => {
        if (!usernameValue || !passwordValue) {
            return;
        }
        
    }

    return(
        <form>
            <input type="text" value={usernameValue} onChange={(e) => setUsernameValue(e.target.value)} ></input>
            <input type="text" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} ></input>
            <button onClick={saveLoginInfo} >Login</button> 
        </form>
    )

};