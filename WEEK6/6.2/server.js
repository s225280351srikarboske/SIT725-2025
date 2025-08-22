const express = require('express');
const petRoutes = require('./routes/petsroutes');

const app = express();
const PORT = 3000;

// Mount pet routes
app.use('/api/pets', petRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Pets Home Page!');
});

// Add route (for calculator)
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid input");
  }
  const sum = a + b;
  res.send(`The sum of ${a} and ${b} is: ${sum}`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
