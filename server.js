require('dotenv').config()

const express = require('express');
const app = express();
const createDatabase = require("./database/createDatabase").createDb;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

createDatabase();
app.listen(5000, () => console.log('Server Started'));


const catchRouter = require('./routes/catch');
app.use('/catch', catchRouter);

const fishRouter = require('./routes/fish');
app.use('/fish', fishRouter);

const riverRouter = require('./routes/rivers');
app.use('/river', riverRouter);

const riverSectionRouter = require('./routes/riverSections');
app.use('/riverSection', riverSectionRouter);