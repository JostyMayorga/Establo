const express = require('express');
const router = express.Router();
const table = require('../controllers/table.controller')
router.get('/',table.getTables);
router.post('/', table.createTable);
router.get('/:id', table.getTable);
router.put('/:id', table.editTable);
router.delete('/:id', table.deleteTable);


module.exports = router;