let sobreMim = {
    nome: "Ryan",
    idade: 16,
    esporte: "futebol"
}

// // Adicione uma nova propriedade sem alterar seu objeto inicial.
sobreMim.time = "Flamengo";
console.log(sobreMim);

// // Remova uma propriedade desse objeto.
delete sobreMim.esporte;
console.log(sobreMim);

// //Mostre no console todas as propriedades desse objeto.
console.log(sobreMim);

// // Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// //Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// //Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "Daniel",
        idade: 17,
        telefone: 1234567,
        amigos: ["isaque", "junior", "luan", "Paulo"]
    }, 
    {
        nome: "Paulo",
        idade: 22,
        telefone: 1234567,
        amigos: ["isaque", "junior", "luan", "Paulo"]
    }, 
    {
        nome: "Gabriel",
        idade: 18,
        telefone: 1234567,
        amigos: ["isaque", "junior", "luan", "Paulo"]
    }, 
    {
        nome: "Matheus",
        idade: 23,
        telefone: 1234567,
        amigos: ["isaque", "junior", "luan", "Paulo"]
    }, 
    {
        nome: "Pedro",
        idade: 19,
        telefone: 1234567,
        amigos: ["isaque", "junior", "luan", "Paulo"]
    }
];

// // Mostre no console o nome de um amigo de cada lista.
for(let contador = 0; contador < cadastro.length; contador++ ){
    console.log(cadastro[contador].amigos[contador])
}
