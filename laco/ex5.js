// Extração de Propriedades: Você tem uma lista de usuários: [{nome: "Ana", idade: 25}, {nome: "Beto", idade: 30}]. Use o map para retornar um novo array contendo apenas os nomes




let usuarios = [{
  
    nome:"daniel",
    idade:17,
    sexo:"masculino"
  },
{
    nome:"yago",
    idade:17,
    sexo:"masculino"
  },
 {
    nome:"ana",
    idade:15,
    sexo:"feminino"
  }


]


const nomes = usuarios.map(function(usuario) {
    return usuario.nome
}) 

console.log(nomes)