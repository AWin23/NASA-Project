const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res){
    return res.status(200).json(await getAllPlanets()); 
}

// function getAllPlanets(req, res) {
// return res.status(200).json(planets);
// }

module.exports = {
httpGetAllPlanets,
};

//if anything bad happens, call getAllPlanets()!!