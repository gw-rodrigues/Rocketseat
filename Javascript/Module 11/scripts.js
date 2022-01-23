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


