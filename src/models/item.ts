import { Sequelize, Model } from "sequelize";

const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/config');

/* Define the model!  Here are the details:

Create a new Item file in the models directory
The Item model should have name and image properties, both of which are strings
The Item model should also have price (number) and vegetarian (boolean) properties */

const Item: any = sequelize.define('Item', {
    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.INTEGER
    },
    imagen: {
        type: DataTypes.STRING
    }
})

module.exports = {Item}