const {check} =require('express-validator')
const { Router } = require('express');
const { getMenu, addItem } = require('../controllers/menu-items');
import {validateInput } from '../middleware/validate-input'

const router = Router();

router.get('/items', getMenu);

router.post('/addItem',[
    check('name', 'The item name is required').not().isEmpty(),
    check('price', 'The item name is required').not().isEmpty(),
    check('description', 'The item name is required').not().isEmpty(),
    check('imagen', 'The item name is required').not().isEmpty(), validateInput
], addItem);

module.exports = router;