let anterior= parseInt(prompt("Dgitei dois numeros inteiros:"));
let atual=parseInt(prompt());
let resto=0;
resto = atual % anterior; 
  while (resto != 0) {
    resto = anterior % atual;
    anterior = atual;
    atual = resto;
  }
  
 document.write(anterior);