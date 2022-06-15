interface _Actor {
    nombre: string,
    apellido: string,
    _id: string,
}

interface _Director {
    nombre: string,
    apellido: string,
    _id: string,
}


export class Pelicula {

    constructor(
        public nombre:string,
        public genero: string,
        public duracion: number,
        public _id?:string,
        public actor?: _Actor,
        public director?: _Director
    ){}

}