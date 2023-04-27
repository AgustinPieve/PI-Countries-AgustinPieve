const axios = require('axios');

//Creo función para traer la data desde la API hacia mi BDD
const reqDbData = async () => {
    API = 'https://restcountries.com/v3/all';

    try {
        const allCountries = await axios.get(API);
        const result = allCountries.data.map((pais) => {
            return {
                id: pais.cca3,
                name: pais.name.common,
                flags: pais.flags,
                continents: pais.continents,
                capital: pais.capital,
                subregion: pais.subregion,
                area: pais.area,
                population: pais.population,
            };
        });
        return result;
    }
    catch(error){
        return error;
    }
};

module.exports = { reqDbData };