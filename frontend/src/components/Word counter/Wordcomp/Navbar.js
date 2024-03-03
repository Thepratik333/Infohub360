import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
      <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} text-${props.mode==='light'?'dark':'white'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.main}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/About">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link actve" to="/About">About</Link>
        </li>
      </ul>
    <div className="radio">
         <div className="red">
            <input name="group1" type="radio" id="test1" onClick={props.red}/>
         <label htmlFor="test1">Red</label>
         </div>
            <div className="green">
            <input name="group1" type="radio" id="test2" onClick={props.green} />
         <label htmlFor="test2">green</label>
         </div>
            <div className="white">
         <input name="group1" type="radio" id="test3" onClick={props.white} defaultChecked/>
         <label htmlFor="test3">white</label>
        </div>
      </div> 
    </div>
  </div>
</nav>

  
    </>
    )
  }
  
  Navbar.propTypes = {
    main: PropTypes.string
  }