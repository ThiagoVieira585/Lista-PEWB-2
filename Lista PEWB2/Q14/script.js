let cigarro = parseFloat(prompt("Digite o numero de cigarros que fuma por dia:"));
let anos = parseFloat(prompt("Digite o numero de anos que fuma:"));
let preco = parseFloat(prompt("Digite o preço do maço de cigarro: "));

anos= anos*365;
cigarro = cigarro*anos;
preco = preco*(cigarro/20);
document.write("Total gasto é:", preco);