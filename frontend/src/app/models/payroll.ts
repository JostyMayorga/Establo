export class Payroll {
    constructor(_id='', idEmployee='', mes=0, importe=0, irpf=0){
        this._id = _id;
        this.idEmployee = idEmployee;
        this.mes = mes;
        this.importe = importe;
        this.irpf = irpf;

    }

    _id: string;
    idEmployee: string;
    mes: number;
    importe: number;
    irpf: number;
}
