let minimo = 4;
let maximo = 60;
let divisor = 6;

function encontrarDivisores(minimo, maximo, divisor) {
    let divisores = [];
    for (let numero = minimo; numero <= maximo; numero++) {
        if (numero % divisor === 0) {
            divisores.push(numero);
        }
    }
    return divisores;
}
let resultado = encontrarDivisores(minimo, maximo, divisor);
console.log(`Divisores de ${divisor} en el rango ${minimo} a ${maximo}:`, resultado);
