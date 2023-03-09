class SuperHeroe extends Persona {
    Poder;
    Dano;
    NivelDeValentia;
    Reconocimiento;
    Villano = [];

    /**
     * 
     * @param {String} nombre 
     * @param {Int} edad 
     * @param {String} universo 
     * @param {String} poder  
     * @param {String} danyo 
     * @param {String} efecto 
     */

    constructor(nombre, edad, universo, poder,dano,nivelDeValentia,reconocimiento) {
        super(nombre, edad,universo);
        this.Universo = universo;
        this.Poder = poder;
        this.Dano = dano;
        this.NivelDeValentia=nivelDeValentia;
        this.Reconocimiento=reconocimiento;    
    
    }
    /**
     * 
     * @param {Villano} villano 
     */
    setVillano = function (villano) {

        this.Villano.push(villano);

    }
}