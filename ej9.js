//Sumar solo los elementos pares de un array.

let array = [2, 2, 2, 2]
let suma = 0

for (let i = 0 ; i < array.length; i++)
    if ( i % 2 === 0){
    suma = suma + array[i]
} 
console.log(suma)