import React from 'react'

function Alert(props) {
    return(
        <div style={{height: '50px', zIndex: "1"}}>
        {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert.msg}</strong> You should check in on some of those fields below.
        </div>}
        </div>
    )
}

export default Alert