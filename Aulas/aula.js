/*
Aula Array
.push adiciona
.pop exclui a ultima posição
.shift exclui a primeira
*/

const notas = []; 

notas.push(5);
notas.push(8);
notas.push(7);
notas.push(4);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;        
}

const media = soma / notas.length;
console.log(media);