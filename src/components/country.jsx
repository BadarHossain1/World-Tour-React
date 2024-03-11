import  { useState } from 'react';


const Country = ({key,  country, handleVisitedCountry }) => {
    console.log(country);
    const { name, population, region, area, flags } = country;
    const { common } = name;

    const [Visited, setVisited] = useState(false);
    

    function handleVisit() {
        console.log('I am visiting', common);
        setVisited(!Visited);
    }

    function addVisit() {

        handleVisitedCountry(country);
    }




   
    


    return (
        
            <div className={`box ${Visited ? 'bg-color' : 'box'}`}
            >
                <img src={flags.png} alt="" />
                <h3>Name: {common}</h3>
                <h3>Population: {population}</h3>
                <h3>Region: {region}</h3>
                <h3>Area: {area}</h3>
                <button onClick={handleVisit}>{Visited ? 'Visited' : 'Yet to Visit'}</button>
                <button onClick={addVisit}>Add To List</button>
            </div>
        
    );
};


export default Country;