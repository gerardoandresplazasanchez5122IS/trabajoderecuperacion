var SuperHeroes=[];
var Villanos=[];

//La función SelecSuperHeroes() se encarga de crear opciones para el elemento de selección de HTML con el id "SuperHeroe", utilizando los elementos almacenados en el arreglo SuperHeroes.

function SelecSuperHeroes(){
    cont='<option selected disabled>Selecionar</option>';
    select=document.getElementById('SuperHeroe');
    for(let i=0;i<SuperHeroes.length;i++){
        cont+=`<option value="${i}">${SuperHeroes[i].Id}-${SuperHeroes[i].Nombre}</option>`;
    }

    select.innerHTML=cont;
}
//La función guardarSuperHeroe() se encarga de obtener los valores ingresados por el usuario para crear un objeto SuperHeroe y almacenarlo en el arreglo SuperHeroes.

function guardarSuperHeroe(){
    let nombre=document.getElementById('HName').value;
    let edad=document.getElementById('HEdad').value;
    let universo=document.getElementById('HUniverso').value;
    let poder=document.getElementById('HPoder').value;
    let dano=document.getElementById('HDano').value;
    let valentia=document.getElementById('HValentia').value;
    let reconocimiento=document.getElementById('HReconicimiento').value;

    
    let objetc=new SuperHeroe(nombre,edad,universo,poder,dano,valentia,reconocimiento);
    objetc.Id=objetc.crearId();
    SuperHeroes.push(objetc);
//método de la clase Tool para guardar los objetos SuperHeroe en el almacenamiento local del navegador.
    Tool.SetheroeToLocalStorage("SuperHeroes",SuperHeroes);

    alert("Super Heroe guardado exitosamente");
    
    document.getElementById('HName').value=null;
    document.getElementById('HEdad').value=null;
    document.getElementById('HUniverso').value=null;
    document.getElementById('HPoder').value=null;
    document.getElementById('HDano').value=null;
    document.getElementById('HValentia').value=null;
    document.getElementById('HReconicimiento').value=null;

//estas funcion es para actualizar la tabla de la interfas de usuario.
    SelecSuperHeroes();
    tablaSuperHeroe();
   
}
//La función guardarVillano() se encarga de obtener los valores ingresados por el usuario para crear un objeto Villano y almacenarlo en el arreglo Villanos.

function guardarVillano(){
    let nombre=document.getElementById('VName').value;
    let edad=document.getElementById('VEdad').value;
    let universo=document.getElementById('VUniverso').value;
    let reputacion = document.getElementById('VReputacion').value;
    let nivelbusqueda=document.getElementById('VBusqueda').value;
    let SuperHeroe=document.getElementById('SuperHeroe').value;
    
    let objetc=new Villano(nombre,edad,universo,reputacion,nivelbusqueda);
    objetc.Id=objetc.crearId();
//utilizo el método setSuperHeroe() de la clase Villano para establecer la relación entre el villano y el superhéroe seleccionado por el usuario.
    objetc.setSuperHeroe(SuperHeroes[SuperHeroe]);
    Villanos.push(objetc);
    SuperHeroes[SuperHeroe].setVillano(objetc);
//método de la clase Tool para guardar los objetos SuperHeroe en el almacenamiento local del navegador.
    Tool.SetVillanosToLocalStorage("Villanos",Villanos);
    
    alert("Villano guardado exitosamente");
    
    document.getElementById('VName').value=null;
    document.getElementById('VEdad').value=null;
    document.getElementById('VUniverso').value=null;
    document.getElementById('VReputacion').value=null;
    document.getElementById('VBusqueda').value=null;
////estas funcion es para actualizar la tabla de la interfas de usuario-
    SelecSuperHeroes();
    Villanos=Tool.getVillanosToLocalStore();
    Tool.establecerAsociaciones(Villanos,SuperHeroes);
    tablaVillano();
    
}

//Las funciones tablaSuperHeroe() y tablaVillano() se encargan de crear tablas HTML que muestran los objetos SuperHeroe y Villano, respectivamente, utilizando los datos almacenados en los arreglos SuperHeroes y Villanos. 

function tablaSuperHeroe() {
    cont='';
    table=document.getElementById('tHero');
    for(let i=0;i<SuperHeroes.length;i++){
        cont+=`<tr><td>${SuperHeroes[i].Id}</td> <td>${SuperHeroes[i].Nombre}</td><td>${SuperHeroes[i].Edad}</td><td>${SuperHeroes[i].Universo}</td><td>${SuperHeroes[i].Poder}</td><td>${SuperHeroes[i].Dano}</td><td>${SuperHeroes[i].NivelDeValentia}</td><td>${SuperHeroes[i].Reconocimiento}</td></tr>`;
    } 
    table.innerHTML=cont;

}
function tablaVillano() {
    cont='';
    table=document.getElementById('tVillano');
    for(let i=0;i<Villanos.length;i++){
        cont+=`<tr><td>${Villanos[i].Id}</td> <td>${Villanos[i].Nombre}</td><td>${Villanos[i].Edad}</td><td>${Villanos[i].Universo}</td><td>${Villanos[i].Reputacion}</td><td>${Villanos[i].NivelBusqueda}</td><td>${Villanos[i].SuperHeroe.Nombre}</td></tr>`;
    } 
    table.innerHTML=cont;

}