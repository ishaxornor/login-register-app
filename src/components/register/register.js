import React , { useState }from "react"
import "./register.css"

const Register = () => {

    const[ user , setUser] = useState({
        name:"",
        email:"",
        password: "",
        returnPassword: ""
    })

    const handleChange = e =>{
        const { name , value} = e.target
        setUser({
            ...user,
            [name]:value
        })
        
    }

    return (
        <div className="register">
            {/* {console.log("User",user)} */}
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your name" onChange={handleChange} ></input>
            <input type="text" name="email" value={user.name} placeholder="Your email" onChange={handleChange} ></input>
            <input type="password" name="password" value={user.name} placeholder="Your Password" onChange={handleChange} ></input>
            <input type="password"  name="returnPassword" value={user.name} placeholder="Re-enter Password" onChange={handleChange}></input>
            <div className="button">Register</div>
            <div>or</div>
            <div className="button">Login</div>
        </div>
    )
}

export default Register