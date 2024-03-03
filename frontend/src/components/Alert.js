import React ,{useContext} from 'react'
import {LoginContext} from '../context/notes/loginContext'


function Alert() {
  const context = useContext(LoginContext)
    return(
        <div style={{height: '50px'}}>
        {context.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{context.alert.msg}</strong> You should check in on some of those fields below.
        </div>}
        </div>
    )
}

export default Alert