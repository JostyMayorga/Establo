export class Employee {
    constructor(_id='', idEmployee=0, name='', lastName='', nif='', social='', department='', position=''){
        this._id = _id;
        this.idEmployee = idEmployee;
        this.name = name;
        this.lastName = lastName;
        this.nif = nif;
        this.social = social;
        this.department = department;
        this.position = position;
    }

    _id: string;
    idEmployee: Number;
    name: string;
    lastName: string;
    nif: string;
    social: string;
    department: string;
    position: string;
}
