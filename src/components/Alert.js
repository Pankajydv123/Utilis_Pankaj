import React from 'react'

function Alert(props) {
  return (
    <div style={{height:"50px"}}>
    {props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.Alert.msg}</strong>
    </div>}
    </div>
  )
}

export default Alert
