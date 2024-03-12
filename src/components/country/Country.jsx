import { useState } from 'react';
import './country.css'
const Country = ({country,handleAddVisited,handleVisitedFlag}) => {
    const {name,flags,area,population,cca3
    } = country;
    
    const [visited,setVisited] = useState(false);
    
    const handleVisited = ()=>{
        setVisited(!visited)
    }

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>code: {cca3}</p>
            <button onClick={()=> handleVisitedFlag(country)} >Add Flag</button>
            <br />
            <button onClick={()=>handleAddVisited(country)} >Add Visited</button>
            <br />
            <button onClick={handleVisited} >{visited ? 'visited' : 'Going' } </button>
            {visited ? 'I have visited this country': ' Not visited'}
        </div>
    );
};

export default Country;