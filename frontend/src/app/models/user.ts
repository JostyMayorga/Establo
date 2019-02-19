export class User {
    constructor(_id='', idUser='', name='', lastName='', email='', password='', type=0){
        this._id = _id;
        this.idUser = idUser;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.type = type;
    }

    _id: string;
    idUser: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
    type: number;
}
