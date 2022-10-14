let n1 = parseInt(prompt("Digite 3 numeros para colocar em ordem crescente:")); 
let n2 = parseInt(prompt());
let n3 = parseInt(prompt());
if (n3 > n1)
    if (n1 > n2)
      document.write("A ordem crescente: \n", n2,"", n1,"", n3);
    else if (n2 < n3)
    document.write("A ordem crescente: \n", n1, "",n2,"", n3);
  if (n1 > n2)
    if (n2 > n3)
    document.write("A ordem crescente: \n", n3,"", n2,"", n1);
    else if (n3 < n1)
    document.write("A ordem crescente: \n", n2, "",n3, "",n1);
  if (n1 < n2)
    if (n3 < n1)
    document.write("A ordem crescente: \n", n3, "",n1,"", n2);
    else if (n3 < n2)
    document.write("A ordem crescente: \n", n1, "",n3,"", n2);