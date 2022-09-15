//  faca um programa que receba a média de um aluno.
// caso a média seja < 5 imprima "Reprovado"
//  caso  media seja >=5 e < 7 imprima "recuperacao"
//  caso a media seja >= 7 imprima "aprovado"

//  Exemplo:
// entrada: 
// 5.5
// saida:
// recuperacao

const {gets, print} = require('./funcoes-auxiliares')

const media = gets();
if(media < 5){
    print('Reprovado');
}else if (media >= 5 && media < 7){
    print("recuperacao");
} else{
    print('aprovado');
}