import React, {useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import '../css/Login.css'

import { useUserContext } from './Context/UserContext'

export default function Login() {
    const history=useNavigate() 
    const {setLogin}=useUserContext()
    const [user,setUser]=useState({email:"",password:""})
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response=await fetch('https://notebook-backend-2qmz.vercel.app/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':"application/json"
            },
            body:JSON.stringify(user)
        })
        const json=await response.json();
        console.log(json);
        if(json.success){
            setLogin(true);
            localStorage.setItem('token',json.authtoken);
            history("/home");
        }
        else{
            alert("incorrect value")
        }
    }
    const Onchange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    return (
        <div className="login">
            <div className="login-content">
                <h1>Note Book</h1>
            <div className="email">
                <label for="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" onChange={Onchange} placeholder="Email" />
            </div>
            <div className="password">
                <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                <input type="password" className="form-control" onChange={Onchange} id="password" name="password" placeholder="Password" />
            </div>
            <div className="login-button">
            <button type="button" className="btn btn-outline-primary" onClick={handleSubmit}>Login</button>
            </div>
            <div className="signup-button">
            <button type="button" className="btn btn-outline-primary"><Link to="/signup">Sign Up</Link></button>
            </div>
            </div>
        </div>
    )
}
