const alunos = ['Lara', 'João', 'Marina'];


alunos.push('Luan'); // Adicionar diretamente na lista
alunos[4] = 'Luan'; // Adicionar de forma dinamica


alunos.pop; // Remove o ultimo item na lista
alunos.shift // remove o primeiro da lista



console.log(alunos[0])

const notas = [];

notas.push(7);
notas.push(5);
notas.push(8);
notas.push(9);
notas.push(3);


let soma = 0;


for (let i = 0; i < notas.length; i++) {
   const nota = notas[i];
   soma = soma + nota;
}
const media = soma / notas.length;
console.log (media)
