//Mostrar los multiplos de 2 y 5 menores a 100.
let a = 1
let b = 100


while (a <= b){
    if(a %2 === 0 && a %5 === 0){
        console.log(a + ",");
    }
    a = a + 1
}