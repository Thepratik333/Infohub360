import React, { useContext} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/notes/loginContext';

const Navbar = () => {
  const context = useContext(LoginContext)
  // console.log(context)
  let location = useLocation();
  const navigate = useNavigate();
  // const [date, setDate] = useState({
  //   from:"",
  //   to:""
  // })

  const handleDate = (e) =>{
    e.preventDefault()
    console.log(context.date)
  }

  const handlelogout = () => {
    localStorage.removeItem('token')
    navigate('/Login')
  }

  // console.log(isNewsRoute);
  let isNewsRoute = location.pathname.startsWith('/news');
  let islogin = location.pathname.startsWith('/Login');
  let isignup = location.pathname.startsWith('/Signup');
  let isword = location.pathname.startsWith('/word');
  let isweather = location.pathname.startsWith('/weather');
  let iscurrency = location.pathname.startsWith('/currency');
  
  return (
    <>
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid fsize">
          <div className="title fsize">
            <Link className="navbar-brand" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}} to="/"><span>InfoHub</span><span>360</span></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          {isNewsRoute ? <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>Home </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="/news/business" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>Business</Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="/news/entertainment" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>Entertainment</Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="/news/health" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>Health</Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="/news/science" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>Science</Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="/news/sports" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>Sports</Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="/news/technology" style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}}>Technology</Link>
              </li>
            </ul>
            <form onSubmit={handleDate}>
            <div className="reservation-box">
              <div className="top">
                <div className="static">
                  <div className="input-container" id="date-picker-container">
                    <label htmlFor="date-from">FROM</label>
                    <input onChange={(e)=>context.setDate({...context.date, from:e.target.value})} type="date" id="date-checkin" className="date-field" name="date-from" />
                  </div>
                </div>
                <div className="flex">
                  <div className="input-container" id="date-picker-container">
                    <label htmlFor="date-from">TO</label>
                    <input onChange={(e)=>context.setDate({...context.date, to:e.target.value})} type="date" id="date-checkout" className="date-field" name="" />
                  </div>
                  <div className="button-container">
                    <button type='submit' className="button ok">Set</button>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div> :
            <div className="items fsize">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}} className={`nav-link ${location.pathname === "/" ? "" : ""}`} aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}} className={`nav-link ${location.pathname === "/todo" ? "active" : ""}`} aria-current="page" to="/todo">ToDos</Link>
                  </li>
                  <li className="nav-item">
                    <Link style={isNewsRoute || islogin || isignup || isword || isweather || iscurrency? {color: "black"}: {color:'white'}} className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>}

          <div className="button fsize">
            {localStorage.getItem('token') ? <button className='btn btn-primary btn-sm' onClick={handlelogout}>Logout</button> : <form>
              <Link className="btn btn-primary btn-sm mx-1" to="/Login" role="button">Login</Link>
              <Link className="btn btn-primary btn-sm" to="/Signup" role="button">Signup</Link>
            </form>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
