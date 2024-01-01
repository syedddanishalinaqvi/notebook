import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import '../css/Login.css'

export default function SignUp() {
    const history = useNavigate();
    const [user, setUser] = useState({ name: "", email: "", password: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://notebook-backend-2qmz.vercel.app/api/auth/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(user)
        })
        const json = await response.json();
        console.log(json);
        history("/");
        alert("Signed up successfully");
    }
    const Onchange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <div className="login">
            <div className="login-content">
                <h1>Note Book</h1>
                <div className="name">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="email" name="name" onChange={Onchange} placeholder="Name" />
                </div>
                <div className="email">
                    <label for="exampleFormControlInput1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={Onchange} placeholder="Email" />
                </div>
                <div className="password">
                    <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                    <input type="password" className="form-control" onChange={Onchange} id="password" name="password" placeholder="Password" />
                </div>
                <div className="signup-button">
                    <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>Sign Up</button>
                </div>
                <div className="login-button">
            <button type="button" className="btn btn-outline-primary" onClick={()=>{history('/home')}} >Login</button>
            </div>
            </div>
        </div>
    )
}