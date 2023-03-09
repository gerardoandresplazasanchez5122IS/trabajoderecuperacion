class Villano extends Persona {
    Reputacion;
    NivelBusqueda;
    SuperHeroe;

    /**
     * 
     * @param {String} nombre 
     * @param {Int} edad 
     * @param {String} universo 
     * @param {String} reputacion 
     * @param {String} nivelbusqueda 
     */
    constructor(nombre, edad, universo, reputacion, nivelbusqueda) {
        super(nombre, edad,universo);

        this.Reputacion = reputacion;
        this.NivelBusqueda = nivelbusqueda;
    }
    /**
     * 
     * @param {SuperHeroe} SuperHeroe 
     */

    setSuperHeroe = function (superHeroe) {

        this.SuperHeroe = superHeroe;
    }




}