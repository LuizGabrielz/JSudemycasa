// setInterval e setTimeout

function mostraHora() {
    let data = new Date();

    return data.toLocaleDateString('pt-BR', {

    hour12: false
});

}

setInterval(); // Vai configurar o intervalo de tempo para que alguma função seja execuado em um determinado momento.

function funcaDoInterval() {
    console.log(mostraHora());
}

setInterval(funcaDoInterval) 

const timer = setInterval(funtion() {
    console.log(mostraHora())
}, 10000);

// setTimeOut executa uma cunção apenas uma vez

