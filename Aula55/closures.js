// Closures
// O Closures esta muito relacionado ao Escopo Léxico da função 
// É a habilidade dessa função de acessar o Escopo Léxico

function retornaFuncao() {
    const nome = 'Luiz';
    return function() {
        return nome;
    };
}

const funcao = retornaFuncao();
console.log(funcao)// Vi receber uma função anonima pq a função de cima está retornando a funcção anonima e essa função de cima vai para a de baixo

