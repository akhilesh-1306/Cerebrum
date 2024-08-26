import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function Signup() {

    const [username,setUserName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/signup",{username,email,password})
        .then((result)=>{
            console.log(result);
            navigate("/login");
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="container">
            <form className="mb-3" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="username" class="form-label">Username</label>
                    <input type="text" class="form-control" id="username" onChange={(event)=> setUserName(event.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(event)=> setEmail(event.target.value)} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" onChange={(event)=> setPassword(event.target.value)} />
                </div>
                <button type="submit" class="btn btn-dark">Submit</button>
            </form>
            <Link to="/login">
                <button type="submit" class="btn btn-dark">Login</button>
            </Link>
        </div>
    )
}