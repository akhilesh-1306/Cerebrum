import { useState } from "react";
import { Link,useNavigate } from "react-router-dom"
import axios from "axios"

export default function Login() {

    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:3000/login",{username,password})
        .then((result)=>{
            console.log(result);
            if(result.data == "Success"){
                navigate("/");
            }
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
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" onChange={(event)=> setPassword(event.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-dark">Submit</button>
                </form>
                <Link to="/signup">
                    <button type="submit" class="btn btn-dark">Signup</button>
                </Link>
        </div>
    )
}