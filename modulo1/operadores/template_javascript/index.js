/*
/*

1.

    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

a-
    let resultado = bool1 && bool2
    console.log("a. ", resultado)


        bool1 && bool2
  
        true && false

        false
  
        resultado = false

b-
    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 


        bool1 && bool2 && bool3 
        true && false && bool3
        false && bool3
        false && !bool2
        false && true
        false
        resultado = false

c.
    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

        !resultado && (bool1 || bool2)
        !resultado && true
        !false && true
        true
        resultado = true

d.
    console.log("d. ", typeof resultado)
        
        resultado = true 
        typeofe = booleano 

RESPOSTAS
a.  false 
b.  false 
c.  true 
d.  booleano

2.

    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")
    const soma = primeiroNumero + segundoNumero
    console.log(soma) 

RESPOSTA

        As variáveis primeiroNumero e segundoNumero terão atribuição tipo strings
        A variavel soma será o resuldado  da concatenação dos caracteres inseridos
        nas caixas prompt

3.
    
let primeiroNumero = prompt("Digite um Número")
let segundoNumero =  prompt ("Digite outro Número")
const soma = Number(primeiroNumero) +  Number(segundoNumero)
console.log ( soma )

        ou

let primeiroNumero = Number (prompt ("Primeiro Número"))
let segundoNumero = Number (prompt("Segundo Número"))
console.log(  primeiroNumero + segundoNumero )
//      

*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO 
//1
//
//
/*
//      INÍCIO
//      VARIÁVEIS:
//      idadeDoUsuario, idadeMelhorAmige, maiorIdade, maisVelho
//
//       
    let idadeDoUsuario = Number(prompt ("Qual sua idade? ") )
    let idadeMelhorAmige = Number(prompt ("Qual idade do su melhor amigu@? ") )
    const maiorIdade = (idadeMelhorAmige - idadeDoUsuario)
    let maisVelho = Boolean (idadeDoUsuario > idadeMelhorAmige)
    console.log("Sua idade é maior do que a do seu melhor amigo? "+(maisVelho )+ (maiorIdade )  )
//
//      FIM
*/ 
//
//2
//
//
//      INÍCIO
/*
//      VARIÁVEIS:
//      numeroPar, sobraDivisao
//a) Peça ao usuário que insira um número par
    let numeroPar = Number(prompt("Insira um Número Par"))
//b) Imprima na console o resto da divisão desse número por 2.
    let sobraDivisao = Number(numeroPar) % 2
    console.log (sobraDivisao)
//c) Teste o programa com diversos números pares. Você notou um
// padrão? Escreva em um comentário de código.
// numero par dividído por 2 sempre terá resto zero 
//d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código
// número ímpar dividido por 2 sempre terá resto 1
//      FIM
*/
//3 Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
//a) A idade do usuário em meses
//b) A idade do usuário em dias
//c) A idade do usuário em horas
//      INÍCIO
/*
//      VARIÁVEIS
//      idadeDoUsuario, idadeEmMeses, idadeEmDias, idadeEmHoras
    let idadeDoUsuario = Number(prompt("Quantos Anos Você tem?"))
    console.log("IDADE EM ANOS"+idadeDoUsuario)
    const idadeEmMeses = Number(idadeDoUsuario * 12)
    console.log("IDADE EM MESES" + idadeEmMeses)
    const idadeEmDias = (idadeDoUsuario * 365)
    console.log("IDADE EM DIAS" + idadeEmDias)
    const idadeEmHoras = (idadeEmDias * 24)
    console.log("IDADE EM HORAS " + idadeEmHoras)
//
//      FIM
*/
//
//4
//
//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima
//no console as seguintes mensagens seguidas pelo TRUE OU FALSE
//
//      INÍCIO 
/*
//          VARIÁVEIS
//  primeiroNumero, segundoNumero, primeiroMaiorSegundo, primeiroIgualSegundo
// primeiroDivisivelSegundo, segundoDivisivelPrimeiro
//
    const primeiroNumero = Number(prompt("Digíte um Número"))
    const segundoNumero = Number(prompt("Digíte outro Número"))
    const primeiroMaiorSegundo = Boolean(primeiroNumero > segundoNumero)
    console.log("O primeiro numero é maior que segundo?  " + primeiroMaiorSegundo)
//O primeiro numero é maior que segundo? 
const primeiroIgualSegundo = Boolean(primeiroNumero == segundoNumero )
console.log("O primeiro numero é igual ao segundo?  "+ primeiroIgualSegundo)
//O primeiro numero é igual ao segundo? 
let primeiroDivisivelSegundo = Boolean ((primeiroNumero * 2) >= (segundoNumero) )
console.log("O primeiro numero é divisível pelo segundo ?  " + primeiroDivisivelSegundo)
//O primeiro numero é divisível pelo segundo? 
let segundoDivisivelPrimeiro = Boolean( (segundoNumero*2) >= (primeiroNumero) )
console.log("O segundo numero é divisível pelo primeiro?  " + segundoDivisivelPrimeiro )
//O segundo numero é divisível pelo primeiro? 
//
//obs: O true ou false vai depender dos números inseridos e do resultado das operações.
//      FIM
*/
//
//      INÍCIO
/*
//      VARIAVEIS
// celsiusFahrenheit, fahrenheitKelvin, celciusFahrenheitK, cFahrenheitKelvin, CelciusConvert
// converFahrenheit, converterKelvin 
//
    const fahrenheitKelvin = ((77 - 32)*(5/9) + 273.15)
    console.log("77 Graus Fahrenheit (°F)----> "+fahrenheitKelvin+", (°K) Gaus Kelvin")
//a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.
    const celsiusFahrenheit = ((80)*(9/5) + 32)
    console.log("80 Graus Celcius (°C)-----> "+celsiusFahrenheit+",(°F) Graus Fahrenheit")
//b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também
    const celciusFahrenheitK = ((30)*(9/5)+32)
    const cFahrenheitKelvin = (((celciusFahrenheitK)-32)*(5/9)+273.15)
    console.log( "30 Graus Celcius (°C)-----> "+celciusFahrenheitK+"(°F), Graus Fahrenheit"+",----> "+cFahrenheitKelvin+"(°K), graus Kelvin "  )
//c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também
    const CelciusConvert = Number(prompt( "Digite a Temperatua em graus Celsius (°C)" ))
    let converFahrenheit = ((CelciusConvert)*(9/5)+32)
    let converterKelvin = ((converFahrenheit - 32)*(5/9)+273.15)
    console.log(CelciusConvert+"(°C)----->"+converFahrenheit+"(°F), Graus Fahrenheit---->"+converterKelvin+"(°K), Graus kelvin" )
//d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja 
// converter
//      FIM
*/
//
//      INÍCIO
/*
//2
//Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de 
//energia elétrica em residências. Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um 
//programa que receba a quantidade de quilowatts consumida por uma residência.
//      VARIÁVEIS
//      totalPagar, custoConsumo, custoDesconto, totalDesconto
//
    const totalPagar = Number(prompt("Consumo Quilowatt/hora (kW/h)"))
    let custoConsumo = Number((totalPagar)*(0.05))
    console.log( "R$ "+custoConsumo)
//
    const custoDesconto = Number(prompt("Qual a Porcentagem de Desconto") ) 
    let totalDesconto = Number(((100-custoDesconto)*0.01)*(custoConsumo))
    console.log("R$ "+totalDesconto+"<---com desconto")
//a) 
//Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
//b)
//Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o
//valor a ser pago pela mesma residência acima considerando 15% de desconto
//
//      FIM
*/
//
//3.
//
//
//      INÍCIO
/*
//      VARIÁVEIS
//     libraQuilo, libraConv
    let libraConv = Number(prompt("Digite o Peso em libras (lb)"))
    const libraQuilo = Number((0.53592)*libraConv)
    console.log("20 lb equivalem à--->"+(0.453592*20)+"Kg ,  "+libraQuilo+"<----SUA CONVERSÃO" ) 
//
//a) 
//Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 
//20lb para kg. Imprima  a resposta no console da seguinte forma:20lb equivalem a X kg
//FIM
*/
//
//      INÍCIO
/*
//      VARIÁVEIS
//      oncaConv, oncaQuilo, int    
//
const int = Number (10.5)
const oncaConv = Number (0.0283495)
let oncaQuilo = (int * oncaConv )
console.log ("10.5oz equivalem a x kg---->"+oncaQuilo)
//
//b) 
//Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que 
//converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma:
//      FIM
*/
//
//   
//
/*
//       INÍCIO
//      milhaMetro, cemMilhas
    const milhaMetro = Number(100/ 0.000621371)
    let cemMilhas = ("100mi equivalem a X m"+milhaMetro)
    console.log(cemMilhas)
//c)
//Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 
//100mi para m. Imprima  a resposta no console da seguinte forma: 100mi equivalem a X m
//
//      FIM
*/
//
//      INICIO
//      VARIÁVEIS
//      pesMetro, cinquentaPes
//const pesMetro = Number ( 0,3048)




/*


d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft 
para m. Imprima  a resposta no console da seguinte forma: 

e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta
103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
 
f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 
450xic para litro. Imprima  a resposta no console da seguinte forma:

450 xic equivalem a X l

g) Escolha ao menos um dos itens anteriores e modifique o programa para que ele peça ao usuário o
 valor da unidade original antes de converter

*/



