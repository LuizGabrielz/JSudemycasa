//Funções geradoras
//Essas funções geradoras elas tem um trabalho especifico e são bem diferentes das funções normais pq elas um recurso especial que seria quase que pausar um código em determinado local.

function* geradora1() {
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';// Se usa "yield ao inves de return, mas tb pode usar o return"
}
//Cada vez que eu executar uma função ele vai me retornar um valoe. Quando eu chamar a primeira vez, retorna o valor 1. Segunda vez o valor 2. terceira vez o valor 3.
const g1 = geradora1();// Aqui ela não vai me retorar o valor da função     
console.log(g1.next());// Para retornar precisa da palavara "next".

function geradora2() {
    let i = 0;

    while(true) {
        yield i;
        i++
    }
}
const g2 = geradora2();
console.log(g2.next().value); //Esse contador não tem fim. é infinito

function geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}
 
const g4 = geradora4();
for(let valor of g4) {
    console.log(valor);
}

function* geradora5() { // Não precisa ser apenas número, pode tb ser String
    yield function() {
        console.log('vim do y1');
    };    

    return function() {
        console.log('vim do return')// O return vai parar o código e não vai executar o que estiver em baixo.
    }                                  // Se mudassemos para yield ai sim continuaria o código.

    yield function() {
        console.log('vim do y2');
    };

}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();// Estão sendo chamadas la em cima 