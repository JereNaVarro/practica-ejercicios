//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos. 
let a = 1;
let b = 100;

while (a <= b){
    if(a %3 === 0){
        console.log(a + ",");
    }
    a = a + 1
}