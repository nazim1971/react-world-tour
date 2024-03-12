import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import './allCountries.css'

const AllCountries = () =>  {
    const[countries,setCountries] =useState([]);
    const [countryVisited,setVisitedCountry] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=>setCountries(data) )
    },[])

    const handleAddVisited = element =>{
        const addName = [...countryVisited,element];
        setVisitedCountry(addName);
    }
    const handleVisitedFlag = element =>{
        const addFlag = [...visitedFlag,element];
        setVisitedFlag(addFlag)
    }

    return (
        <div>
           <h2>Countries: {countries.length}</h2> 
           <div >
            {
                visitedFlag.map(element=> <img className="image-container" key={element.cca3} src={element.flags.png}  /> )
            }
           </div>
           <div>
           <h3>Visited Countries</h3>
           <ul> 
            {
                countryVisited.map(element=> <li key={element.cca3} >{element.name.common}</li> )
            }
           </ul>
           </div>
           
          <div className="country-countainer">
          {
            countries.map(element=> <Country handleVisitedFlag={handleVisitedFlag} country={element} key={element.cca3} handleAddVisited= {handleAddVisited} ></Country>)
           }
          </div>
        </div>
    );
};

export default AllCountries;