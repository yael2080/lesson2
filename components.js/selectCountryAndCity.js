import React, { useState } from 'react'

const SelectCountry=(props)=>{
    const {selectCountry, setSelectCountry, countries}= props
     return(
         <select className="form-select form-select-sm" onChange={(e)=>setSelectCountry(e.target.value)}>
             <option disabled selected value>Please select a country </option>
    {countries.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
    </select>
     )
    
}
const SelectCity=(props)=>{
 const {selectCity, setSelectCity, cities,count}= props
  return(
      <select className="form-select form-select-sm" key={count} onChange={(e)=>setSelectCity(e.target.value)}>
              <option disabled selected value>Please select a city</option>
 {cities.map((item,index)=>(<option key={index} value={item}>{item}</option>))}
 </select>
  )
}

export default function SelectCountryAndCity(props) {
   const countriesAndCities={
       Israel:[ 'Jerusalem', 'Bne-Brak', 'Tel-Aviv'],
       Usa: ['New-York', 'Mishigen', 'Shicago'],
       Canada: ['Otava', 'Toronto','Winnipeg']


   }
   const {country, city, page}=props
   const [selectCountry,setSelectCountry ]= useState(null)
   const [selectCity,setSelectCity ]= useState(null)
   const [count, setCount]= useState(0)

   const countries= Object.keys(countriesAndCities)
   const cities= countriesAndCities[selectCountry]

  
   function replaceCountry(newCountry){
       setSelectCountry(newCountry)
       setSelectCity(null)
       setCount(count+1)
   }
   function sendCityAndCountry(){
       country(selectCountry)
       city(selectCity)
       page(3)
   }

    return(
        <div>
        <p>You Select {selectCountry} / {selectCity}</p>
         
              <SelectCountry
              countries={countries}
              selectCountry={selectCountry}
              setSelectCountry={replaceCountry}
              ></SelectCountry>
         
              {cities && <SelectCity
              cities={cities}
              count={count}
              selectCity={selectCity}
              setSelectCity={setSelectCity}
              
              ></SelectCity>}
              <br></br> <br></br>
              <button onClick={sendCityAndCountry} class="btn btn-outline-secondary">ok</button>
          
        </div>
    )
}



 
 
