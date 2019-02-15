const Vacation = require('../models/vacation')

const vacationCtrl = {};

vacationCtrl.getVacations = async (req, res) => {
    const vacations = await Vacation.find();
    res.json(vacations);
}

vacationCtrl.createVacation = async (req, res) => {
    const vacation = new Vacation({
        idEmployee: req.body.idEmployee,
        start: req.body.start,
        finish: req.body.finish,
        days: req.body.days
    })
    await vacation.save();
    res.json({
        'status':"Vacation saved"
    });

}
vacationCtrl.getVacation = async (req, res) => {
    const vacation = await Vacation.findById(req.params.id)
    res.json(vacation);
}
vacationCtrl.editVacation = async (req, res) => {
    const {id} = req.params;
    const vacation = {
        idEmployee: req.body.idEmployee,
        start: req.body.start,
        finish: req.body.finish,
        days: req.body.days
    }
    await Vacation.findByIdAndUpdate(id, {$set:vacation}, {new:true});
    res.json({status: 'Vacation Updated'})
}

vacationCtrl.deleteVacation = async (req, res) => {
    await Vacation.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Vacation Deleted'
    })
}
module.exports = vacationCtrl;