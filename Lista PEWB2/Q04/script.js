let n = parseInt(prompt("Dgitei um numero inteiro e não negativo :"));
let contador = 2;
let fatorial = 1;

while (contador <= n) {
    fatorial = fatorial * contador;
    contador = contador + 1;
  }
document.write(fatorial);