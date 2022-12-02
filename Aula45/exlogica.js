// Escreva uma função que recebe um número e 
// Retorne o seguinte:
// Número é divisivel por 3 = Fizz
// Número é divisivel por 5 = buzz
// Número é divisivel por 3 e 5 = FizzBuzz
// Número não é divisivel por 3 e 5 = Retorne o própio número
// Checar se o número é realmente um número
// Use  função com números de 0 a 100

function fizzBuzz(numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizBuzz';
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizBuzz';
    if (numero % 5 ===0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'))
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i))
} 