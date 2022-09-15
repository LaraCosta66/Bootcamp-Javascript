
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

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);

    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const lara = new Pessoa('Lara', 24);
const samila = new Pessoa('Samila', 23);

compararPessoas(lara, samila);