import React, { use, useState } from "react";

const Signup = () => {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const saveSignupInfo = async (event) => {
        event.preventDefault();
        if (!emailValue || !passwordValue) {
            return;
        }
        const userData = {
            emailValue,
            passwordValue,
        }
        try {
            const response = await fetch('http://localhost:8080/createUsers', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(userData),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error('Failed to create user');
            }
        }
        catch (error) {
            console.error('Signup failed:', error);
        }
        window.location.href = "http://localhost:5173";
    }

    return (
        <div className="SignupContainer">
            <form onSubmit={saveSignupInfo}>
                <div>
                    Username: 
                    <input type="text" value={emailValue} onChange={(e) => setEmailValue(e.target.value)}></input>
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