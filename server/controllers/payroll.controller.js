const Payroll = require('../models/payroll')

const payrollCtrl = {};

payrollCtrl.getPayrolls = async (req, res) => {
    const payrolls = await Payroll.find();
    res.json(payrolls);
}

payrollCtrl.createPayroll = async (req, res) => {
    const payroll = new Payroll({
        idEmployee: req.body.idEmployee,
        mes: req.body.mes,
        importe: req.body.importe,
        irpf: req.body.irpf
    })
    await payroll.save();
    res.json({
        'status':"Payroll saved"
    });

}
payrollCtrl.getPayroll = async (req, res) => {
    const payroll = await Payroll.findById(req.params.id)
    res.json(payroll);
}
payrollCtrl.editPayroll = async (req, res) => {
    const {id} = req.params;
    const payroll = {
        idEmployee: req.body.idEmployee,
        mes: req.body.mes,
        importe: req.body.importe,
        irpf: req.body.irpf
    }
    await Payroll.findByIdAndUpdate(id, {$set:payroll}, {new:true});
    res.json({status: 'Payroll Updated'})
}

payrollCtrl.deletePayroll = async (req, res) => {
    await Payroll.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Payroll Deleted'
    })
}
module.exports = payrollCtrl;