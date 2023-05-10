const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use('/api/recipes', require('./routes/recipeRoutes'));

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server strated on port ${port}`)
})
