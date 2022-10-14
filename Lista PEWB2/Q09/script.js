function primo(){
    let numero = parseInt(prompt("Digite o numero"));
    let divisores=0;
  
    for(let count=1 ; count<=numero ; count++)
     if(numero % count == 0)
         divisores++;
    
    if(divisores==2)
        document.write('É primo');
    else
       document.write('Não é primo');
  }
  