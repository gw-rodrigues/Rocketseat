/* 

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima -   A
* entre 80 - 89   -   B
* entre 70 - 79   -   C
* entre 60 - 69   -   D
* menor que 60    -   F

*/
/*
let score = Math.floor(Math.random(100) * 100)

let scoreA = score >= 90 && score <= 100
let scoreB = score >= 80 && score < 90
let scoreC = score >= 70 && score < 80
let scoreD = score >= 60 && score < 70
let scoreF = score >= 0 && score < 60

console.log(`nota: ${score}`)

let scoreFinal;

if(scoreA){
    scoreFinal = 'A'
}else if(scoreB){
    scoreFinal = 'B'
}else if(scoreC){
    scoreFinal = 'C'
}else if(scoreD){
    scoreFinal = 'D'
}else if(scoreF) {
    scoreFinal = 'F'
}else{
    scoreFinal = 'Nota Invalida.'
}

console.log(scoreFinal)
*/
/*
let score = Math.floor(Math.random(100) * 100)

function getScore(score){

    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 90
    let scoreC = score >= 70 && score < 80
    let scoreD = score >= 60 && score < 70
    let scoreF = score >= 0 && score < 60

    console.log(`nota: ${score}`)

    let scoreFinal;

    if(scoreA){
        scoreFinal = 'A'
    }else if(scoreB){
        scoreFinal = 'B'
    }else if(scoreC){
        scoreFinal = 'C'
    }else if(scoreD){
        scoreFinal = 'D'
    }else if(scoreF) {
        scoreFinal = 'F'
    }else{
        scoreFinal = 'Nota Invalida.'
    }

    return scoreFinal
}

console.log(getScore(-1))
console.log(getScore(101))
console.log(getScore(score))
*/


/*
============================================================================================

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

/*
const family = {
    incomes: [111,200,4000,45,798,5],
    outcomes : [4000,300,200,11.09099]
}

function sum(array) {
    let total = 0
    for(let value of array){
        total += value
    }
    return total
}
function calcBalance (family) {

    let incomesTotal = sum(family.incomes)
    let outcomesTotal = sum(family.outcomes)
    
    let familyBalance = incomesTotal - outcomesTotal
    let itsPositive =  familyBalance >= 0

    if(itsPositive){
        console.log(`saldo positivo, saldo:${familyBalance}`)
    }else{
        console.log(`saldo negativo, saldo:${familyBalance}`)
    }
}

calcBalance(family)
*/
/*
let family = {
    incomes: [111,200,4000,45,798,5],
    outcomes : [4000,300,200,11.09099]
}

function sum(array) {
    let total = 0
    for(let value of array){
        total += value
    }
    return total
}
function calcBalance () {

    const incomesTotal = sum(family.incomes)
    const outcomesTotal = sum(family.outcomes)
    
    const familyBalance = incomesTotal - outcomesTotal
    const itsPositive =  familyBalance >= 0

    let balanceText = 'negativo'

    if(itsPositive){
        balanceText = 'positivo'
    }
    
    console.log(`saldo ${balanceText}:${familyBalance.toFixed(2)} R$`)
}

calcBalance()
*/

/*
============================================================================================

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

