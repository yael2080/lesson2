import React, { useState } from 'react'
import SelectCountryAndCity from './selectCountryAndCity'
import Login from './login'


export default function DetailsView(props) {
    const[name, setName]= useState()
    const[password, setPassword]= useState()
    const[country, setCountry]= useState(null)
    const[city, setCity]= useState(null)
    const[page, setPage]= useState(1)

    return(
        <>
        { page==1 ? <Login name={setName} password={setPassword} page={setPage}></Login> : 
        page==2? <SelectCountryAndCity country={setCountry} city={setCity} page={setPage}></SelectCountryAndCity>: 
        <div>
            <h1>Hello {name}</h1>
            <p>Your password is: {password}</p>
            <h3> you live in {country} {city}</h3>
        </div>

        }
        </>
    )
}



 
 
