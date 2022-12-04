// As várias maneiras de declarar Funções em js
// Decalaração de função é quando utilizamos assim:
function falaOi() {
    console.log('oie'); 
} // Function Hoisting isso seria criando uma função em baixo, elas vão ser executadas antes ou depois de delarar elas.

// First-class objects entao as funções são objetos (objetos de primeira classe). Isso quer dizer que essa função é tratada em js ou em outras linguagens com um dado
const nome = 'Luiz';
//function expression seria jogar uma função em uma variável da maneira como está abaixo.
const souUmDado = function() {
    console.log('Sou um dado.');    
};
souUmDado(); // Agora eu posso jogar essa variável como o parametro dessa função e fazer essa função executar a minha função.
// Parametro é a variável que eu vou receber em uma função

function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);

// Também podemos fazer uma arrow function, que é um recurso mais novo que seria uma function expression só que bem mais curta
const funcaoArrow = () => {
    console.log('Sou uma arrow function');

}; 

// Dentro de um objeto eu posso ter uma função 
const obj = {
    falar: function() {
        console.log('Estou falando...');
    }
};
obj.falar(); // Executar a função que está dentro de um objeto