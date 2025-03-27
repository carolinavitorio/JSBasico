/*
    Crie um código que calcule o valor de uma viagem.

    Varaveis
    Preço combustivel;
    Gasto medio de combustivel por Km rodado;
    Distancia em Km da viagem;
    Tipo de combustível;
    Tipo que foi abastecido;

    Imprima o valor que será gasto de combustivel para realizar a viagem.
*/

const precoEtanol = 4.13;
const precoGasolina = 6.14;
const tipoAbastecido = 'Gasolina';
const KmPorLitro = 12;
const distanciaKm = 480;

if (tipoAbastecido === 'Etanol') {
    valorViagem = (distanciaKm / KmPorLitro) * precoEtanol;
} else {
    valorViagem = (distanciaKm / KmPorLitro) * precoGasolina;
}

console.log(`O valor gasto reais de será de R$` + valorViagem.toFixed(2));
