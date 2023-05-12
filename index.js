const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: '*',
  })
);

app.use(express.json({ extended: false }));

app.get('/api/goals', (req, res) => {
  res.json({ message: 'Hello' });
});

connectDB();

// hail signal
app.get('/', (req, res) => res.send(`Server is running on port ${PORT}`));
app.use('/api/curated', require('./routes/api/curatedRecipe'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
