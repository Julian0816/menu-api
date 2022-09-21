const {check} =require('express-validator')
const { Router } = require('express');
const { getOrders, addOrders, editOrders, deleteOrders } = require('../controllers/order');
import {validateInput } from '../middleware/validate-input'

const router = Router();

router.get('/', getOrders);

router.post('/add',[
    check('items', 'The items is required').not().isEmpty(),
    check('total', 'The total is required').not().isEmpty(), validateInput
], addOrders);

router.put('/edit/:id',[
    check('items', 'The items is required').not().isEmpty(),
    check('id', 'the id is mandatory').isUUID().not().isEmpty(),
    check('total', 'The total is required').not().isEmpty(), validateInput
], editOrders);

router.delete('/delete/:id',[
    check('id', 'The id of the order is required').isUUID().not().isEmpty(), validateInput
], deleteOrders);

module.exports = router;