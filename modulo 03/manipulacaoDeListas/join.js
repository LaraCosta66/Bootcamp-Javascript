const lista = [{nome: 'Lara'},{nome: 'Luan'},{nome: 'Sam'},{nome: 'Santos'}]
console.log(
    lista.map(e => e.nome)
    .filter((e)=> e.startsWith('S'))
    .join(', ')
)
// juncao