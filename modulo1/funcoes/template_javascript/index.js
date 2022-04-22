/*


function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))


//1.RESPOSTA : 
//a) O que vai ser impresso no console?
//              10
//              50
//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função 
//minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
//
// A impressão do resultado não aparece no console

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//2.RESPOSTA :
// a. Explique o que essa função faz e qual é sua utilidade
//
// Essa função converte o texto para minuscula e verifica se há cenoura na entrada prompt
//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//     i.   Eu gosto de cenoura
//     ii.  CENOURA é bom pra vista
//     iii. Cenouras crescem na terra
// todas elas serão true pois possuem cenoura
*/

//Exercícios de escrita de código
//1. Escreva as funções explicadas abaixo:
//a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
//informações sobre você, como: 
//"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
//Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando 
//que a função não possui entradas, apenas imprime essa mensagem.
//INÍCIO
/*
function apresentacao() {
    console.log("Eu sou Gustavo, tenho 35 anos, moro em Minas Gerais e sou estudante.");
}
apresentacao()
//FIM
*/
//b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: 
//o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma 
//string que unifique todas as informações da pessoa em uma só mensagem com o template:
//Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
