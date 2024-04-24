function contarLetras(texto = "") {
    if ( typeof texto !== "string") return "el valor ingresado no es una cadena";
        if (texto === "") return "no ha ingresado ningun valor";
        return texto.length;  
}

console.log(contarLetras("jeremias"));