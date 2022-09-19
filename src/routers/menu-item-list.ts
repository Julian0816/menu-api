const { Router } = require('express');
const { getMenu, addItem } = require('../controllers/menu-items')

const router = Router();

router.get('/items', getMenu);

router.post('/addItem', addItem);

module.exports = router;