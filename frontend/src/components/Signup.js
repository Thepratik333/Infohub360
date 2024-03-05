import React,{useContext, useState, useEffect} from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import "./login.css"
import { LoginContext } from '../context/notes/loginContext'
import info from '../img/IMG-20240117-WA0108.jpg'


const Signup = () => {
    const [Credentials, setCredentials] = useState({ name: "" ,email: "",cpassword: "", password: "" })
    const {name, email,cpassword, password} = Credentials;
    const context = useContext(LoginContext)
    let navigate = useNavigate()
    const location = useLocation();


    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/getuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, password: password })
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            navigate("/Login");
            context.showAlert("Account created successfully","success")
        }else{
            context.showAlert("Invalid details","danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value })
    }

    let Signup = location.pathname.startsWith("/Signup")
    useEffect(() => {
        if(Signup){
            document.body.style.backgroundImage = "url("+info+")"; 
            document.body.style.backgroundPosition = "bottom";
        }
    }, [Signup])

    return (
        <div className='login-container'>
        <div className="login-box">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Welcome</h1>
                <p>Please Signup to your account</p>
                <div className="input-group">
                    <input type="text" id="name" name="name" value={name} placeholder="Username" onChange={onChange} required />
                </div>
                <div className="input-group">
                    <input type="email" id="email" name="email" value={email} placeholder="Email" onChange={onChange} required />
                </div>
                <div className="input-group">
                    <input type="password" id="cpassword" name="cpassword" value={cpassword} minLength={5} placeholder="Confirm Password" onChange={onChange} required />
                </div>
                <div className="input-group">
                    <input type="password" id="password" name="password" value={password} placeholder="Password" onChange={onChange} required />
                </div>
                <button className="bn632-hover bn24" type="submit">Sign Up</button>
                <div className="bottom-text">
                <p>You have an account? <Link to="/Login">Login</Link></p>
            </div>
            </form>
        </div>
        </div>
    )
}
export default Signup
