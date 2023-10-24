// Ctrl + A seleciona tudo 
// Ctrl + ; comenta

// Variável -> Local onde armazena informações (qualquer dado, como n°...).
// Exemplos: 
// N° -> Number.
// Texto -> String (sempre dentro de "ASPAS").
// Boolean -> True or False (0 - 1).
// Objetos -> Dados que estarão dentro de {CHAVES}.
// Arrays -> Listas de informações, dentro de [COLCHETES].

// Estrutura de uma variável:
// tipo da variável (var, let ou const) + nome da variável (CamelCase ou _) = valor;

// 1° var (não muito utilizada~recomendada)
// Pode-se reatribuir o valor.
var diaDaSemana = "Terça";
var diaDaSemana = "Quarta";
console.log(diaDaSemana)

// 2° let (mais usual)
// Reatribui um valor.
let nome = "Ester";
nome = "Carol"; // Redeclarando a variável "nome".
// let nome = "Carol"; -> Não é possível fazer isso. Só pode chamar a variável "let" uma só vez.
console.log(nome)

// 3° const (variável _const_ante)
// Não conseguimos reatribuir o valor, ela é imutável.
const fruta = "Abacaxi";
// fruta = "Melancia"; -> Não é possível redeclarar os valores (é imutável).
console.log(fruta)

// Condições: Tomadas de decisão (if-> se, else -> se não)
// Estrutura de uma Condição:
// variável + valor 
// if(condição - se a condição for verdadeira) {
//     executa esse cód  
// } else(se não){
//     executa esse cód 
// }

// Loop: É uma estrutura de repetição.
// Estrutura de um Loop For (executa o loop enquanto for true, quando for false, ele para):
// for(variável;condição;incremento/decremento) {
//      console.log(variável)
// }
for(let i = 1;i <= 10; i++) {
    console.log(i)
}

// Operadores:
// === -> Estritamente igual.


// 01 - crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
let dia = false;
if(dia) {
    console.log("claro")
} else {
    console.log("noite")
}

let cor = "Bege"
if(cor === "Laranja") {
    console.log("É minha cor favorita.")
} else if(cor === "Pink") {
    console.log("É a cor favorita da Carol.")
} else {
    console.log("Não é nossa cor favorita.")
}

// 02 - Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for(let i=0; i <=20; i +=2) {
    console.log(i)
}

//Retorne n°s de 10 em 10, até 100:
for(let i=0; i <=100; i +=10) {
    console.log(i)
}

// Diminuindo...
// for(let i=100; i >10; i -=10) {
//     console.log(i)
// }

for(let i=1; i <10; i +=2) {
    console.log(i)
}

for(let i=100; i >=0; i -=10) {
    console.log(i)
}

for(let i=200; i >=0; i -=20) {
    console.log(i)
}

// 03 - crie uma função que exiba uma mensagem no console

// 04 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

// 05 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

// 06 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

// 07 - crie uma função que retorne o triplo do número recebido no parâmetro da função

// 08 - crie uma função que  verifique se uma  variável é true ou false

// 09 - Crie um array que receba 5 itens e exiba no console.


// 10 - Utilize um método para adicionar um nome ao inicio do array.


// 11 - Utilize um método para remover o último nome do array.


// 12 - Utilize um método para adicionar dois nomes ao fim do array.


// 13 - Utilize um método para remover o primeiro nome do array.


// 14 - Utilize um método para organizar em ordem crescente o seguinte array:
//  let numbers = [7,5,6,3,8,9,2,1,4]


// 15 - Crie um objeto que receba ao menos três propriedades sobre você.


// 16 - Adicione uma nova propriedade sem alterar seu objeto inicial.


// 17 - Remova uma propriedade desse objeto.


// 18 - Mostre no console todas as propriedades desse objeto.


// 19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
// Na propriedade amigos, adicione ao menos 4 amigos.


// 20 - Mostre no console o nome de um amigo de cada lista.