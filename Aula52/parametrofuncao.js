// Parametros da Função
// Eu posso enviar um paramentro para ser executado dentro da função, ou um ou vários separados por vírgula
// Quando vc coloca parametros na chamada da função, ele não retora se vc colcoar em cima, mas sde vc colcoar a palavra arguments no se3u código, ele retorna os parametros com um array, objeto e etc..
function funcao() {
    console.log(arguments[0]);
}
funcao('valor', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao() {
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }
    console.log(total);
}
funcao(1,2,3,4,5,6,7); // Função para somar todos esses números, utilizando o let para mudar os números e o for para pecorrer todos e somar. O agumento tb para pegar os valores que estão nos valores em baixo.
// Da pra usar for e if else nas funções sem problema. 
// A função definida com a palavra funcion tem o argumento que sustenta todos os argumentos enviados

function funcao(a, b) {
    console.log(a + b);
}
funcao(2); // Funcao para somar os valores de A e B.
// Mas digamos que por algum motivo eu só tenha colocado o valor de A, vai dar undefined no B. E vai dar NaN pq não é um número

function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2); // Agora os valores de A e B, C estão declarados e podem ser somados pq são números. O resultado da soma da função vai dar 8
// Se eu colocasse 10 na chamada da função depois do 2, o B ia assumir o valor de 10 e ia esquecer o valor 2. O resultado seria 16.

function funcao({nome, sobrenome, idade}) { // E aqui dentro estou fazendo a desestruturação e retirando as variáveis dessa chave do objeto
    console.log(nome, sobrenome, idade);
}
funcao({nome: 'Luiz', sobrenome: 'Gabriel', idade: 28}) // Entao fazendo isso aqui eu estou fazendo um objeto como argumento da minha função

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
    if (operador === '+') acumulador += numero;
    if (operador === '-') acumulador += numero;
    if (operador === '/') acumulador += numero;
    if (operador === '*') acumulador += numero;
    }
    console.log(acumulador); 
} 
conta('-', 0, 20, 30, 40, 50); // A cada volta desse laço eu vou contar meu acumulador
// Colocar o sinal da conta que vc quer fazer no retorno da função