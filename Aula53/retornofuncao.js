// Retorno da Função
// Quando a gente usa a palavra return a gente sabe que retorna um valor e termina a função

function soma(a, b) {
    return a + b 
} // Essa função por enquanto não está retornando nada pq não tem valor nenhum 

function soma(a, b) {
    return a + b;
}
console.log(soma(5+2)); // Agora ela vai retornar pq tem dois valores para A e B

// Podemos tambem criar pessoas com objetos na função

function criaPessoa(nome, sobrenome) {
    return {nome, sobrenome} ; 
}

const p1 = criaPessoa('Luiz', 'Otavio');
const p2 = {
    nome : 'João',
    sobrenome : 'Oliveira'
};

console.log(p1);
console.log(p2); // Função para criar pessoas com os valores em um objeto


function duplica(n) { // Funcão para multiplciar por 2
    return n * 2;
} 

function triplica(n) { // Função para multiplicar por 3
    return n * 3;
}

function quadriplica(n) { // Função para multiplicar por 4
    return n * 4;
}

console.log(duplica(2));
console.log(triplica(3));
console.log(quadriplica(4)); 


function criaMultiplicador(multiplicador) { // Uma função mais fácil para fazer tudo que está na função acima 
    return function(n) {
        return n * multiplicador
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4); 


