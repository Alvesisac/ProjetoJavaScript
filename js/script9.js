/*Funções em Javascript */

/* alert()
console.log()
prompt()

Existem 2 tipos de funções:
- Reservadas pela linguagem

alert()
prompt()
console.log()

- Personalizadas
Criadas pelo usuário, é necessário que sejam construídas
utilizando a estrutura:
function nomeDaFuncao() {

}
e em seguidos chamadas para serem executadas 

Em cada função há a presença do parênteses () que podem estar vazio ou não.
Os parênteses recebem um argumento. Quando este argumento é uma variável, dizemos que ele 
recebe um parâmetro.
*/

// Função personalizada com PARÂMETRO, pois se trata de uma variável
// previamente declarada e que será utilizada no bloco de código//

function saudacao() {
    console.log("Olá mundo!");
}

saudacao();

var nome;

function despedida(nome){
    console.log("Tchau, " + nome);
}

despedida("João");

var a, b;     
function soma(a, b){
    return a + b;
}
var resultado = soma(5, 3);
console.log(resultado);


