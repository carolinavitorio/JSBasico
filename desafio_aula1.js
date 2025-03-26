const precoCombustivel = 4.59;
const KmPorLitro = 12;
const distanciaKm = 4580;

const valorViagem = (distanciaKm / KmPorLitro) * precoCombustivel;

console.log(valorViagem.toFixed(2));


