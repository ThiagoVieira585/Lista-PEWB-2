let numero = parseInt(prompt("Digite o numero para saber se ele é um numero triangular:"))
let i;
for (i = 1; i*(i+1)*(i+2) < numero; i++)
    ;

if (i*(i+1)*(i+2) == numero)
    document.write("É triangular");
  else
    document.write("Não é triangular\n");