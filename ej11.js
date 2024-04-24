let edadprom = 26 + 16 + 25 + 27
edadprom = edadprom / 4
edadpromM = 16 + 27
let personaD = {
    nombre: "Mauro",
    apellido: "Lombardo",
    edad:"26",
    sexo:"Hombre",
    mostrarNombre1: function(){
        return; "Mauro Lombardo";
    }   
}
let personaA = {
    nombre: "Antonella",
    apellido: "Cuggino",
    edad: "16",
    sexo:"Mujer",
    mostrarNombre2: function(){
        return; "Antonella Cuggino";
    }   
}
let personaY = {
    nombre: "Alejo",
    apellido: "Acosta",
    edad: "25",
    sexo:"Hombre",
    mostrarNombre3: function(){
        return; "Alejo Acosta";
}
}
let personaE = {
    nombre: "Emilia",
    apellido: "Mernes",
    edad: "27",
    sexo:"Mujer",
    mostrarNombre4: function(){
        return; "Emilia Mernes";
}
}
let edadpromH = 25 + 26
edadpromH = edadpromH / 2
edadpromM = edadpromM / 2


console.log("La edad promedio es: " + edadprom)
console.log("La edad de hombres promedio es: " + edadpromH)
console.log("El nombre de la mujer con mayor edad es: Emilia") 
console.log("El nombre del hombre con menor edad es: Alejo")
console.log("La edad promedio de las mujeres es: " + edadpromM)