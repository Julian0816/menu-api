const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');


const server = express();

require('dotenv').config();

server.use(morgan('dev'));
server.use(cors());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(express.static(path.join(__dirname, '../dist')));



// api router
server.use('/api/menu', require('../routers/menu-item-list'));



export default server;
