import React, { useState, useEffect } from 'react';
import { CountryPaper } from "../CountryPaper/CountryPaper";
import { bringCountries } from "../../services/apiCalls";

import "./Countries.css";

export const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        if(countries.length === 0) {
            bringCountries()
                .then((response) => {
                    setCountries(response.data);
                })
                .catch((error) => console.log(error));
        }
    }, [countries]);

    return (
        <div>
            {countries.length > 0 && 
                countries.map((country) => {
                    return (
                        <div key={country.name.official}>
                            <CountryPaper
                                flag = {country.flags.png}
                                alt = {country.flags.alt}
                                countryName = {country.name.common}
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