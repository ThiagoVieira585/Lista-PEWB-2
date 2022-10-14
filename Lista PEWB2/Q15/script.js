let numero = parseInt(prompt("Digite o numero para saber os divisores:"));
let qtdDivisores =0 ;
for(let i=1; i<= numero;i++){
    if(numero%i==0){
        document.write("<br>",i);
        qtdDivisores++;
    }
}
document.write("<br>Numero de divisores:",qtdDivisores);
