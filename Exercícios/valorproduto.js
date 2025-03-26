/*
    Crie um código que verifica a forma de pagamento e valor do produto, e calcule o desconto a ser aplicado 
    sendo 10% para opção 1 15% para opção 2, valor fixo para opção 3 ou o juros a ser aplicado de 10% opção 4).
*/

const valorProduto = 150;
const formaDePagamento = 4;


if (formaDePagamento === 1) {
    console.log('O valor do produto é: ' + (valorProduto - (valorProduto * 0.1)));
} else if (formaDePagamento === 2) {
    console.log('O valor do produto é: ' + (valorProduto - (valorProduto * 0.15)));
} else if (formaDePagamento === 3) {
    console.log('O valor do produto é: ' + valorProduto.toFixed(2));
}else if (formaDePagamento === 4) {
    console.log('O valor do produto é: ' + aplicarJuros(valorProduto, 10));
} else {
    console.log('Forma de pagamento inválida.');
}



