//  Funções imediatas
// IIFE -> Imemediately invoked function expression - expressão de função invocada imediatamente

(function(idade, peso, altura) {
    const sobrenome  = 'Miranda';
    function criaNome(nome) {
        return nome + ' ' + sobrenome 
    }
    function falaNome() {
        console.log(criaNome('Luiz'));
    }

    falaNome();
    console.log(idade, peso, altura)
})(30, 80, 1.80);// Parametros da função sendo recebida aqui. 
    
// Função protegida do meu escopo 
// A difereça da função normal é que a anonima precisa estar entre () e fora dos parenteses vc chama os parenteses dnv, pq se vc não chamar da um erro de sintaxe
