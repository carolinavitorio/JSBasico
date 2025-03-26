const valorProduto = 150;
const formaDePagamento = 4;


if (formaDePagamento === 1) {
    console.log('O valor do produto é: ' + (valorProduto - (valorProduto * 0.1)));
} else if (formaDePagamento === 2) {
    console.log('O valor do produto é: ' + (valorProduto - (valorProduto * 0.15)));
} else if (formaDePagamento === 3) {
    console.log('O valor do produto é: ' + valorProduto.toFixed(2));
} else {
    console.log('O valor do produto é: ' + ((valorProduto * 0.1) + valorProduto));
}



