const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Pets route: list of pets will be shown here.');
});

module.exports = router;
