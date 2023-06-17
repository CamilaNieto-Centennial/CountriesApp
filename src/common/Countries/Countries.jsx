import React, { useState, useEffect } from 'react';
import { CountryPaper } from "../CountryPaper/CountryPaper";

import "./Countries.css";

export const Countries = () => {
    const [countries, setCountries] = useState([
        {
            name: "Spain",
            region: "Europe",
            area: 100
        },
        {
            name: "Switzerland",
            region: "Europe",
            area: 200
        },
    ])
    
    return (
        <div>
            {countries.length > 0 && 
                countries.map((country) => {
                    return (
                        <div key={country.name}>
                            <CountryPaper
                                countryName = {country.name}
                                region = {country.region}
                                area = {country.area}
                            />
                        </div>
                    );
                })
            }
        </div>
    )
}