const { Router } = require('express');

const { createActivity, getAllActivities } = require("../controllers/activitiesControllers");

const activitiesRoutes = Router();

activitiesRoutes.get("/", async (req, res) => {
    
    try {
        const allActivities = await getAllActivities();
        res.status(200).json(allActivities);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

// activitiesRoutes.get("/", (req, res) => {
//     getAllActivities()
//     .then((allActivities) => {
//     res.status(200).json(allActivities);
//     })
//     .catch((error) => {
//     res.status(400).json({ error: error.message });
//     });
//     });

activitiesRoutes.post("/", async (req, res) => {
    try {
        const { name, difficulty, duration, season, countries} = req.body;
        const activity = await createActivity(
            name,
            difficulty,
            duration,
            season,
            countries,
        );
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = activitiesRoutes;