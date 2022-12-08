// Funções Recursivas
// Funções recursivas são funções que chamam ela mesmo de volta 
// Muito similar a o que as estruturas de repetição fazem

function recursiva(max) {
    if (max >= 10) return;
    max++ 
    console.log(max);
    recursiva(max);
} // Aqui temos uma função recursiva, ou seja ela executa o código dela e se chama de volta

recursiva(0);
//A unica coisa que vc tem que se preocupar é quando ela tem que parar de se chamar de volta
// Tem um limite. Então quando chegar a um determinado limite, ele vai parar 