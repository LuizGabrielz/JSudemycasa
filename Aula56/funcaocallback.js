// Funções de callback são funções que ocorrem quando uma ação finaliza, executa a função.

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) +
    min;
    return Math.floor(num);
} // Função para criar número aleatório entre mil e tres mil.

function f1(callback) {// Vamos receber um parametro de callback em todas as funções
    setTimeout(function() {
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2() { // Callback é uma função que pode ou não ser recebida, se eu quiser executar depois do f2, preciso saber se o callback existe
    setTimeout(function() {
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3() {
    setTimeout(function() {
        console.log('f3');
        if (callback) callback();
    }, rand());   
}

f1(function() {
f2(function() {
f3(function() {
    console.log('Ola Mundo');
});
});
});
// Essa funçã vai chamar cada um dos fs 
