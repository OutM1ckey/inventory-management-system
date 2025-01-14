require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL)
    .then(() => console.log('Database Connected'))
    .catch((error) => console.error('Database connection error:', error));

const app = express();
app.use(express.json());

const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;
