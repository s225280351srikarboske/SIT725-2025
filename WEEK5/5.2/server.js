const express = require('express');
const app = express();
const PORT = 3000;

// Import route file
const petRoutes = require('./routes/petsroutes');

app.use('/api/pets', petRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Pets Home Page!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});