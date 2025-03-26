/*
    Crie uma função que verifica se você é maior de idade.
*/

function verificarIdade(idade){
    if (idade >=18){
        console.log(idade + ' - Você é maior de idade');
    } else {
        console.log(idade + ' - Você é menor de idade');
    }
}

verificarIdade(11);