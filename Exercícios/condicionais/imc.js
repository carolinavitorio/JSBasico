/*
    Crie um código que leia seu peso e altura e determine o seu IMC e sua categoria conforme resultado.
    IMC = peso / (altura * altura)
    Abaixo do peso: IMC menor que 18,5
    Peso normal: IMC entre 18,5 e 25
    Sobrepeso: IMC entre 25 e 30
    Obesidade: IMC entre 30 e 40
    Obesidade grave: IMC maior que 40
 */

const peso = 40;
const altura = 1.60;
const imc = peso / (altura * altura);

console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log('Você esta abaixo do peso.');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Você esta com peso normal.');
} else if (imc >= 25 && imc < 30) {
    console.log('Você esta acima do peso.');
} else if (imc >= 30 && imc < 40) {
    console.log('Você esta com obesidade.');
} else {
    console.log('Você esta com obesidade grave');
}