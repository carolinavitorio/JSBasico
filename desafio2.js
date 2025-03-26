const precoEtanol = 4.13;
const precoGasolina = 6.14;
const tipoAbastecido = 'Gasolina';
const KmPorLitro = 12;
const distanciaKm = 480;
let valorViagem = 0;

if (tipoAbastecido === 'Etanol') {
    valorViagem = (distanciaKm / KmPorLitro) * precoEtanol;
} else {
    valorViagem = (distanciaKm / KmPorLitro) * precoGasolina;
}

console.log(valorViagem.toFixed(2));
