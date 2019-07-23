//Autor:Nicole
//Dexripcion: Clase caballo
function Caballo(nombre,raza) {
    //Propiedades
    this.nombre = nombre;
    this.raza = raza;
    this.avance = [];
    //Métodos
    this.avanzar = avanzar;
    this.totalRecorrido = totalRecorrido;
}
function avanzar() {
    //var recorrido = Math.floor(Math.random() * 6) + 1;
    //this.avance.push(recorrido);
    //return recorrido;
    this.avance.push(Math.floor(Math.random() * 6) + 1);
    console.log(this.nombre + " corre " + this.avance[this.avance.length-1] + " metros.");
    return this.avance[this.avance.length-1];
}
function totalRecorrido() {
    //devuelve la suma d e lo avanzado
    return this.avance.reduce(sumar);
}
function sumar(sumaTotal,avance) {
    return sumaTotal + avance;
}
