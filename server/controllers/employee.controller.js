const Employee = require('../models/employee')

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee({
        idEmployee: req.body.idEmployee,
        name: req.body.name,
        lastName: req.body.lastName,
        nif: req.body.nif,
        social: req.body.social,
        department: req.body.department,
        position: req.body.position
    })
    await employee.save();
    res.json({
        'status':"Employee saved"
    });

}
employeeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id)
    res.json(employee);
}
employeeCtrl.editEmployee = async (req, res) => {
    const {id} = req.params;
    const employee = {
        idEmployee: req.body.idEmployee,
        name: req.body.name,
        lastName: req.body.lastName,
        nif: req.body.nif,
        social: req.body.social,
        department: req.body.department,
        position: req.body.position
    }
    await Employee.findByIdAndUpdate(id, {$set:employee}, {new:true});
    res.json({status: 'Employee Updated'})
}

employeeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Employee Deleted'
    })
}
module.exports = employeeCtrl;