export class Reservation {
    constructor(_id='', idReservation='', idUser='', mes=0, importe=0){
        this._id = _id;
        this.idReservation = idReservation;
        this.idUser = idUser;
        this.numberTable = mes;
        this.hourBegin = importe;
        

    }

    _id: string;
    idReservation: string;
    idUser: string;
    numberTable: number;
    hourBegin: number;
}
