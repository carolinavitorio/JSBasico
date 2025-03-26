/*
    Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e a altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (peso / (altura * altura)).
    Instancie uma pessoa chamada José que tenha 70kg e 1,75 de altura e peça para Jose dizer o valor 
    do seu IMC
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc(peso, altura) {
        return (this.peso / (this.altura * this.altura));
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'estou abaixo do peso.';
        } else if (imc >= 18.5 && imc < 25) {
            return 'estou com peso normal.';
        } else if (imc >= 25 && imc < 30) {
            return 'estou acima do peso.';
        } else if (imc >= 30 && imc < 40) {
            return 'estou com obesidade.';
        } else {
            return 'estou com obesidade grave';
        }
    }
}

const jose = new Pessoa('Jose', 70, 1.75);
console.log(`Meu nome é ${jose.nome} e meu IMC é de: ${jose.calcularImc().toFixed(2)} e ${jose.classificarImc()}`);

const carolina = new Pessoa('Carolina', 89, 1.60);
console.log(`Meu nome é ${carolina.nome} e meu IMC é de: ${carolina.calcularImc().toFixed(2)} e ${carolina.classificarImc()}`);