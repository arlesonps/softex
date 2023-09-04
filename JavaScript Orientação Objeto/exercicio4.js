var nota1 = parseFloat(prompt("Digite a primeira nota (entre 0 e 10): "));
var nota2 = parseFloat(prompt("Digite a segunda nota (entre 0 e 10): "));
var nota3 = parseFloat(prompt("Digite a terceira nota (entre 0 e 10): "));

if (nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2  <= 10 && nota3 >= 0 && nota3 <= 10){
    var media = (nota1 + nota2 + nota3) / 3;;

console.log(" A Média das notas é: " + media);
} else {
    console.log("Por favor, insira notas válidas entre 0 e 10. ");
}