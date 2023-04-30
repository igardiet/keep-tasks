require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/user');
const app = express();

// app middleware
app.use(express.json()); // This gives access to req.body
app.use(cors());

app.use((req, res, next) => {
  next();
});

// routes
app.use('/api/tasks', taskRoutes);
app.use('/api/user', userRoutes);

// db connection
mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log('Connection to database successfull!');

    // requests listen
    app.listen(process.env.PORT, () => {
      console.log('Listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.warn(error);
  });
