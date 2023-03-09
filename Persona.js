class Persona{
    Id
    Nombre;
    Edad;
    Universo;

    /**
     * 
     * @param {String} Nombre 
     * @param {Int} Edad
     * @param {String} Universo 
     */
    constructor(nombre,edad,universo){
        this.Edad=edad;
        this.Nombre=nombre;
        this.Universo=universo;
    }

    crearId(){
        //random numero
        return Math.floor(Math.random()*10000);
    }
}