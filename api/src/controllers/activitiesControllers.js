const { Country, Activity } = require('../db');

const createActivity = async (name, difficulty, duration, season, countries) => {
    if(!name || !difficulty || !duration || !season || !countries)
    throw Error("Debe rellenar todos los campos");

    if(difficulty > 5 || difficulty < 1)
    throw Error("La dificultad ingresada debe ser de 1 a 5");

    if(
        season !== "Summer" &&
        season !== "Autumn" &&
        season !== "Winter" &&
        season !== "Spring" 
    )
        throw Error("La temporada debe ingresada puede ser: Summer, Autumn, Winter, Spring");

    
    if(!countries.length) throw Error("Debe vincular al menos un País a las actividades ingresadas");

    try {
        const [activity, created] = await Activity.findOrCreate({
            where: { name: name },
            defaults: { difficulty, duration, season, },
        });
        // await activity.addCountries(countries);
        // let response = {};
        // if(created){
        //     (response = {message: `La actividad ${name} fue creada`, ...activity.dataValues, })    
        // }else (response = { message: `La actividad ${name} ya existe`});

        // return response;
        await activity.addCountries(countries);
    let response = {};
    created
      ? (response = {
          message: `La actividad ${name} creada satisfactoriamente`,
          ...activity.dataValues,
        })
      : (response = { message: `La actividad ${name} ya existe` });
    return response;
    } catch (error) {
        return error;
    }
      
} 

const getAllActivities = async () => {
    try {
      let allActivities = await Activity.findAll({
        include: [
          {
            model: Country,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
      return allActivities;
    } catch (error) {
      return error;
    }
  };


module.exports = { createActivity, getAllActivities };