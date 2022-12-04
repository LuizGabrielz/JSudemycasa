// Escopo Léxico
// Ela reconhece o que foi delcarada, tudo que está declarado dentro dela e o que está nos vizinhos dela

const nome = 'Luiz';

function falaNome() {
    const nome = 'Otavio'; 
    console.log(nome);
} // Aqui ele pegou a variável que está dentro da função e executou

function usaFalaNome() {
    falaNome()
}

usaFalaNome();