import axios from 'axios';

export const bringCountries = async () => {
    return await axios.get("https://restcountries.com/v3.1/all?fields=name,region,area");
}