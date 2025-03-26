/*
    Crie uma função que verifica a forma de pagamento e calcule o desconto a ser aplicado sendo 10% para opção 1 15% 
    para opção 2, valor fixo para opção 3 ou o juros a ser aplicado de 10% opção 4).
*/

function aplicarDesconto(valorProduto, desconto) {
    return (valorProduto - (valorProduto * (desconto / 100)));

}

function aplicarJuros (valorProduto, juros){
    return ((valorProduto * (juros / 100)) + valorProduto);
}

const valorProduto = 100;
const formaDePagamento = 2;


if (formaDePagamento === 1) {
    console.log('O valor do produto é: R$' + aplicarDesconto(valorProduto.toFixed(2), 10));
} else if (formaDePagamento === 2) {
    console.log('O valor do produto é: R$' + aplicarDesconto(valorProduto.toFixed(2), 15));
} else if (formaDePagamento === 3) {
    console.log('O valor do produto é: R$' + valorProduto.toFixed(2));
} else if (formaDePagamento === 4) {
    console.log('O valor do produto é: R$' + aplicarJuros(valorProduto.toFixed(2), 10));
} else {
    console.log('Forma de pagamento inválida.');
}