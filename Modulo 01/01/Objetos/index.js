// Objeto literal:
const pessoa ={
    nome: 'Lara Costa',
    idade: 22,
    nacionalidade: 'Brasileira',
    descrever: function(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

// Classe(é uma definicao do que deveria ser aquele objeto):
class Pessoa{
    nome;
    idade;
    anoDeNascimento;
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2022 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }

}


// Instancia de pessoa(instancia é uma ocorrencia daquele objeto )
const aluno = new Pessoa();
aluno.nome = 'Ana Banana';
aluno.idade = 15;

aluno.descrever();



const luan = new Pessoa('Luan', 13);
console.log(luan)
const bernardo = new Pessoa();
// invocando a funcao:

pessoa.descrever();

// atribuir dinamicamente:
pessoa['nome']= 'Samila';

// é o mesmo que fizer assim:

pessoa.nome = 'Samila';
