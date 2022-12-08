//Funções construtoras (constructor functions)
// Funções construtoras criam novos objetos e ela ja faz automaticamente muita coisa pra vc, ela ja cria um objeto, retorna um objeto a unica coisa que vc precisa fazer é criar ela
// Na Função construtora a gente precisa criar sempre a primeira letra com a letra maiuscula ex: Pessoa
// Por que na função consturtora a gente tem que obrigatoriamente usar a palara "New"

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(this.nome + ': sou um método');
    };
}// Como sabemos que ela é uma função construtora, pq colocamos a primeira letra maiuscula, o js ja vai criar como um objeto

const P1 = new Pessoa('Luiz', 'Gabriel');
const p2 = new Pessoa('Mariza', 'Pinheiro'); 
p2.metodo();
//Não podemos esquecer de usar a palavra "new"
// A palavra new cria um novo objeto vazio, faz o "this" apontar para o objeto que esta sendo utilizado.
// Não precisamos da palavra "return" 
//Escrever um método que é uma função dentro do objeto