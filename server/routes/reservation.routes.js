const express = require('express');
const router = express.Router();
const reservation = require('../controllers/reservation.controller')
router.get('/',reservation.getReservations);
router.post('/', reservation.createReservation);
router.get('/:id', reservation.getReservation);
router.put('/:id', reservation.editReservation);
router.delete('/:id', reservation.deleteReservation);


module.exports = router;