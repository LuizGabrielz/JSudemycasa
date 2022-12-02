// Tratando e lançando erros (try, cacth, throw)

try {
    console.log(naoExisto);// Tentar achar o erro
} catch(err) {// Pegar 
    console.log('naoExisto não existe.');
    console.log(err);
} // Não é interessante exibir o erro
// Qaulquer bloco que possa ter erro vai cair no bloco 'try' e se o erro ocorrer vai cair no bloco 'cacth'

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser números.');

    }
    return x + y;
}

try {
console.log(soma(1, 2));
console.log(soma('1', 2));
} catch(error) {
    console.log(error) {
        console.log(error);
    }
}
