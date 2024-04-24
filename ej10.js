function contarCaracteres(texto){
    let objeto={};
    for (let i=0;i<=texto.length;i++){
        const palabras=texto[i]
        if(objeto[palabras]){
            objeto[palabras]++;
        }else{
            objeto[palabras]=1
        }
    }
    for (let palabras in objeto){
console.log(`El caracter ${palabras} aparece ${objeto[palabras]} veces `);
}
return objeto
 
}
const Caracteres=`camion`;
const resultado=contarCaracteres(Caracteres);
console.log(resultado)