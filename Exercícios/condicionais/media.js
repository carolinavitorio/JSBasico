/*
    Crie um código que leia 3 notas, calcule sua média e informe se o aluno esta Reprovado, em Recuperação e Aprovado.
    Media = (x + Y + z)/3
    Reprovado = media menor que 5
    Recuperação = media entre 5 e 7
    Aprovado = media maior que 7
 */

const nota1 = 5;
const nota2 = 5;
const nota3 = 4;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado para o próximo semestre');
}