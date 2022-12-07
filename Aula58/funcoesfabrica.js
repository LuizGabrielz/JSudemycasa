// Funções Fárica (Factory Functions)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome, 
        sobrenome,
        fala: function(assunto) {// Essa função tb pode receber parametro
            return `${this.nome} está ${assunto}`  
        },
        altura: a,
        peso: p,
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
} // Quando uma função está dentro de um objeto, a gente chama essa funão de método

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('Maria', 'Joaquina', 1.6, 42);
    console.log(p2.imc()); 
    console.log(p2.fala('falando sobre Js')); // O this vai chamar o p2 pq é onde está a função "fala"

// O this sempre vai se referir a pessoa que chamou o que vc estiver executando
// Quando a gente fala this.nome é a mesma coisa de falar p1.nome
// O this vai se referir ao objeto que está chamando ele, que n caso é o p2