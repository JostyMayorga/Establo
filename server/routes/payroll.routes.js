const express = require('express');
const router = express.Router();
const payroll = require('../controllers/payroll.controller')
router.get('/',payroll.getPayrolls);
router.post('/', payroll.createPayroll);
router.get('/:id', payroll.getPayroll);
router.put('/:id', payroll.editPayroll);
router.delete('/:id', payroll.deletePayroll);


module.exports = router;