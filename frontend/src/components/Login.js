import React, { useContext, useState, useEffect, } from 'react'
import "./login.css";
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/notes/loginContext';
import info from '../img/IMG-20240117-WA0108.jpg'
// import Api from './weatherApp/Api';

const Login = () => {
    const [Credentials, setCredentials] = useState({ email: "", password: "" })
    const context = useContext(LoginContext);

    let navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: Credentials.email, password: Credentials.password })
        });
        const json = await response.json();
        console.log(json)
        if (json.success) {
            localStorage.setItem('token', json.authToken);
            //    console.log(localStorage.getItem('token'));
            context.showAlert("Login Successfuly", "success");
            navigate("/");
        } else {
            context.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...Credentials, [e.target.name]: e.target.value })
    }

    const mediaQuery = window.matchMedia('(max-width: 430px)');

    useEffect(() => {

        if (mediaQuery.matches) {
            document.body.style.backgroundImage = 'none'; // Remove background image
        } else {
            document.body.style.backgroundImage = "url(" + info + ")";
            document.body.style.backgroundPosition = 'bottom';
        }
        // eslint-disable-next-line
    }, [mediaQuery])


    return (
        <div className="login-container">
        <div className="login-box">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Welcome Back</h1>
                <p>Please login to your account</p>
                <div className="input-group">
                    <input type="email" id="email" name="email" value={Credentials.email} placeholder="Username" onChange={onChange} required />
                </div>
                <div className="input-group">
                    <input type="password" id="password" name="password" value={Credentials.password} placeholder="Password" onChange={onChange} required />
                </div>
                <button className="bn632-hover bn24" type="submit">Login</button>
                <div className="bottom-text">
                    <p>Don't have an account? <Link to="/Signup">Sign Up</Link></p>
                    <p><Link to="/">Forgot password?</Link></p>
                </div>
            </form>
        </div>
        </div>
    )
}

export default Login
