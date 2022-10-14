let numero = parseInt(prompt("Digite o Nésimo numero da sequencia de fibonacci:"))
let fant = 0;
let fatual = 1;
let contador = 1;

while (contador < numero) {
    fprox = fatual + fant;  /* proximo numero de Fibonacci */
    fant = fatual;
    fatual = fprox;
    contador = contador + 1;
}
document.write(fatual)