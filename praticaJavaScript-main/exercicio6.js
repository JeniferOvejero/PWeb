function inverteString(){
    let entrada = prompt("digite a string: ");
    let invertido = entrada.split('').reverse().join('');
    console.log("a string invertida é: ", invertido);
}