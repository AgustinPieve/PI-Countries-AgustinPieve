const { Country, Activity } = require('../db');
const { reqDbData } = require('./reqDbData');
const { Op } = require("sequelize");

const getAllCountries = async () => {
    try {
        let AllCountries = await Country.findAll(); //traigo los datos de la db a esta variable

        if (!AllCountries.length) { 
            const arr = await reqDbData();
            await Country.bulkCreate(arr);
        }

        AllCountries = await Country.findAll({
            attributes: ["name", "flags", "continents", "id", "population"],
            include: [{
                model: Activity,
                attributes: ["name"],
                through: { attributes: [] },
            }]
        })

        return AllCountries;

    } catch (error) {
        return error;
    } 
    
}

const countryByName = async (name) => {
    const countryName = await Country.findAll({
    where: {
        name: { [Op.iLike]: `%${name}%` },
    },
    attributes: ["name", "flags", "continents", "id", "population"],
});
    if(!countryName.length){
        throw Error("No se encontraron coincidencias");
    }

    return countryName;
};

const countryById = async (id) => {
    const countryId = await Country.findOne({
        where: { id },
        include: {
            model: Activity,
            through: {
                attributes: [],
            },
        },
    });
    
    if(!countryId) throw Error(`El ID:${id} no le pertenece a ningún País`);

    return countryId;
};


module.exports = { getAllCountries, countryById, countryByName  }; 