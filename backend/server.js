const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Assuming this imports the database connection
const app = express();
const router = require('./routes/userRoutes.js');
dotenv.config();

connectDB();
app.use(express.json());  //jwt token

const chats = [];

app.get('/', (req, res) => {
  res.send('API request');
});
app.get('/api/user',router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
