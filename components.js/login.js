import React, { useRef } from 'react'



export default function Login(props) {
    const {name, password, page}= props
  const nameRef=useRef(null)
  const passwordRef=useRef(null)

    function saveNameAndPassword(){
        name(nameRef.current.value)
        password(passwordRef.current.value)
        page(2)
    }
    return(
        <>
        <input type="text" className="form-control" placeholder="enter user name" ref={nameRef}></input>
        <br></br>
        <input type="password" className="form-control" placeholder="enter password" ref={passwordRef}></input>
        <br></br>
        <button onClick={saveNameAndPassword} className="btn btn-outline-secondary">ok</button>
        </>
    )
}



 
 
