class Tool {

//El método "SetheroeToLocalStorage" se encarga de recibir un parámetro y un conjunto de datos, y reemplazar la propiedad "Villano" en cada uno de los objetos de datos con un array vacío. Luego, los datos actualizados se almacenan en el "localStorage".

    static SetheroeToLocalStorage(parameter, data) {
        
        for (let i = 0; i < data.length; i++) {
            data[i].Villano = [];
        }
        localStorage.setItem(parameter, JSON.stringify(data));
    }

//El método "SetVillanosToLocalStorage" también recibe un parámetro y un conjunto de datos. Este método actualiza la propiedad "SuperHeroe" en cada uno de los objetos de datos de Villanos, estableciéndola en el valor del Id del objeto de SuperHeroe correspondiente. Luego, los datos actualizados se almacenan en el "localStorage".

    static SetVillanosToLocalStorage(parameter = "Villanos", data) {
        let array = data;
        for (let i = 0; i < array.length; i++) {
            array[i].SuperHeroe = data[i].SuperHeroe.Id;
        }

        localStorage.setItem(parameter, JSON.stringify(array));
    }
    /**
     * 
     * @param {superHeroes} parameter 
     * @returns array
     */

    //El método "getSupertToLocalStorage" recibe un parámetro y devuelve un array de objetos de SuperHeroe. Este método obtiene los datos de SuperHeroe del "localStorage" y los convierte en objetos de SuperHeroe, utilizando los valores de las propiedades almacenadas en el "localStorage".

    static getSupertToLocalStorage(parameter = "SuperHeroes") {
        let array = [];
        let superHeroes = JSON.parse(localStorage.getItem(parameter));
        if (superHeroes != undefined) {
            for (let i = 0; i < superHeroes.length; i++) {
                let object = new SuperHeroe();
                object.Id = superHeroes[i].Id;
                object.Nombre = superHeroes[i].Nombre;
                object.Edad = superHeroes[i].Edad;
                object.Universo = superHeroes[i].Universo;
                object.Poder = superHeroes[i].Poder;
                object.Dano = superHeroes[i].Dano;
                object.NivelDeValentia = superHeroes[i].NivelDeValentia;
                object.Reconocimiento = superHeroes[i].Reconocimiento;
                array.push(object);
            }
        }
        return array;

    }

//El método "buscarObjeto" recibe un array y un Id y devuelve el objeto correspondiente en el array con el Id proporcionado.

    static buscarObjeto(array, id) {
        let object ;
        for (let i = 0; i < array.length; i++) {
            if(array[i].Id==id){
                object=array[i];
            }
        }
        return object;
    }

//El método "getVillanosToLocalStore" recibe un parámetro y devuelve un array de objetos de Villano. Este método obtiene los datos de Villano del "localStorage" y los convierte en objetos de Villano, utilizando los valores de las propiedades almacenadas en el "localStorage".

    static getVillanosToLocalStore(parameter = "Villanos") {
        let array = [];
        let villanos = JSON.parse(localStorage.getItem(parameter));

        if (villanos != undefined) {
            for (let i = 0; i < villanos.length; i++) {
                let object = new Villano();
                object.Id = villanos[i].Id;
                object.Nombre = villanos[i].Nombre;
                object.Edad = villanos[i].Edad;
                object.Universo = villanos[i].Universo;
                object.Reputacion = villanos[i].Reputacion;
                object.NivelBusqueda = villanos[i].NivelBusqueda;
//utiliza el método "buscarObjeto" para obtener el objeto de SuperHeroe correspondiente al objeto de Villano, y lo establece como valor de la propiedad "SuperHeroe" del objeto de Villano.
                let Super = this.buscarObjeto(SuperHeroes,villanos[i].SuperHeroe);
                object.SuperHeroe = Super;    
                array.push(object);
            }

        }
        return array;
    }

//El método "establecerAsociaciones" recibe dos arrays de objetos de Villano y SuperHeroe. Este método establece la propiedad "SuperHeroe" en cada objeto de Villano con el Id correspondiente del objeto de SuperHeroe.

    static establecerAsociaciones(Villanos,SuperHeroes) {
        
        for(let i = 0; i<Villanos.length; i++) {
            Villanos[i].SuperHeroe=Villanos[i].SuperHeroe.Id;
        }    
        for(let i = 0; i<SuperHeroes.length; i++) {
            SuperHeroes[i].Villano=[];
        }    
//recorre cada objeto de Villano y utiliza el método "buscarObjeto" para obtener el objeto de SuperHeroe correspondiente, y establece los objetos de Villano y SuperHeroe como asociados entre sí.
        for(let i = 0; i < Villanos.length; i++) {
           let Super = this.buscarObjeto(SuperHeroes,Villanos[i].SuperHeroe); 
           Super.setVillano(Villanos[i]);
           Villanos[i].setSuperHeroe(Super);
        }


    }




}