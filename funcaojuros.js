function aplicarDesconto(valorProduto, desconto) {
    return (valorProduto - (valorProduto * (desconto / 100)));

}

function aplicarJuros (valorProduto, juros){
    return ((valorProduto * (juros / 100)) + valorProduto);
}

const valorProduto = 100;
const formaDePagamento = 8;


if (formaDePagamento === 1) {
    console.log('O valor do produto é: ' + aplicarDesconto(valorProduto, 10));
} else if (formaDePagamento === 2) {
    console.log('O valor do produto é: ' + aplicarDesconto(valorProduto, 15));
} else if (formaDePagamento === 3) {
    console.log('O valor do produto é: ' + valorProduto.toFixed(2));
} else if (formaDePagamento === 4) {
    console.log('O valor do produto é: ' + aplicarJuros(valorProduto, 10));
} else {
    console.log('Forma de pagamento inválida.');
}