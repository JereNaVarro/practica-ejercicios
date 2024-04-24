const listaH = [25, 26]
const listaM = [personaA, personaE]
const listaEdad = [16, 25, 26, 27]
const sumaProm = [...listaH,...listaM]


let personaD = {
    nombre: "Mauro",
    apellido: "Lombardo",
    edad:"26",
    sexo:"Hombre",
    mostrarNombre1: function(){
        return; "Mauro Lombardo";
    }   
}
const personaA = {
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

function suma(n1, n2, n3, n4){
    const resultadoEdades = n1 + n2 + n3 + n4
    console.log(resultadoEdades);
} 
suma(listaEdad[0], listaEdad[1], listaEdad[2], listaEdad[3])
    let edadprom = 94 / 4
    console.log(edadprom)
function promedioEdades (suma){
    let promedioEdades = suma / 4
    console.log (promedioEdades)
}




