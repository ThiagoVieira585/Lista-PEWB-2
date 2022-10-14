let n1 = parseInt(prompt("Digite 3 numeros diferentes para somar os maiores:"));
let n2 = parseInt(prompt());
let n3 = parseInt(prompt())

if ((n1 > n2 && n1 > n3) && n2 > n3) {
   soma = n1 + n2;
}
if ((n1 > n2 && n1 > n3) && n3 > n2) {
   soma = n1 + n3;
}
if ((n2 > n1 && n2 > n3) && n1 > n3) {
   soma = n2 + n1;
}
if ((n2 > n1 && n2 > n3) && n3 > n1) {
   soma = n2 + n3;
}
if ((n3 > n1 && n3 > n2) && n1 > n2) {
   soma = n3 + n1;
}
if ((n3 > n1 && n3 > n2) && n2 > n1) {
   soma = n3 + n2;
}
document.write(soma); 