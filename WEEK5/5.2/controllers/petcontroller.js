// Import the service
const petservice = require('../services/petservice');

// Controller uses the service to get data
exports.getAllPet = (req, res) => {
  const items = petservice.getAllPets();
  res.json({
    status: 200,
    data: items,
    message: 'Pet data retrieved using service'
  });
};