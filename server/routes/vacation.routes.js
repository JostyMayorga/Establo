const express = require('express');
const router = express.Router();
const vacation = require('../controllers/vacation.controller')
router.get('/',vacation.getVacations);
router.post('/', vacation.createVacation);
router.get('/:id', vacation.getVacation);
router.put('/:id', vacation.editVacation);
router.delete('/:id', vacation.deleteVacation);


module.exports = router;