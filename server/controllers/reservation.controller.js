const Reservation = require('../models/reservation')

const reservationCtrl = {};

reservationCtrl.getReservations = async (req, res) => {
    const reservations = await Reservation.find();
    res.json(reservations);
}

reservationCtrl.createReservation = async (req, res) => {
    const reservation = new Reservation({
        idReservation: req.body.idReservation,
        idUser: req.body.idUser,
        numberTable: req.body.numberTable,
        hourBegin: req.body.hourBegin
    })
    await reservation.save();
    res.json({
        'status':"Reservation saved"
    });

}

reservationCtrl.getReservation = async (req, res) => {
    const reservation = await Reservation.findById(req.params.id)
    res.json(reservation);
}

reservationCtrl.editReservation = async (req, res) => {
    const {id} = req.params;
    const reservation = {
        idReservation: req.body.idReservation,
        idUser: req.body.idUser,
        numberTable: req.body.numberTable,
        hourBegin: req.body.hourBegin
    }
    await Reservation.findByIdAndUpdate(id, {$set:reservation}, {new:true});
    res.json({status: 'Reservation Updated'})
}

reservationCtrl.deleteReservation = async (req, res) => {
    await Reservation.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Reservation Deleted'
    })
}
module.exports = reservationCtrl;