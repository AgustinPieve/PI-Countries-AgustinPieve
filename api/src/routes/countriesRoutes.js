const { Router } = require('express');
const { getAllCountries, countryByName, countryById } = require('../controllers/countriesControllers')

const countriesRoutes = Router();


countriesRoutes.get("/", async (req, res) => {
    const { name } = req.query;
    try {
      if (name) {
        countryQuery = await countryByName(name);
        res.status(200).json(countryQuery);
      } else {
        const listCountries = await getAllCountries();
        res.status(200).json(listCountries);
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


  countriesRoutes.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const countryId = await countryById(id);
      res.status(200).json(countryId);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });


module.exports = countriesRoutes;
