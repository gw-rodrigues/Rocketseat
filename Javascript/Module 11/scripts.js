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

-> my solution

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

-> rocketseat solution

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

-> my solution

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

-> rocketseat solution

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

/*

-> my solution

function tempConverter(temperature,format){
    let result = 0
    let resultText = 'the format its not valid!'

    if(format == 'F' || format == 'f'){
        result = (Number(temperature) -32) * 5/9
        resultText = `converted to ${result.toFixed(1)} C`
    }else if(format == 'C' || format == 'c'){
        result = Number(temperature) * 9/5 + 32
        resultText = `converted to ${result.toFixed(1)} F`
    }

    console.log(`${temperature} ${format} ${resultText}`)
}

tempConverter('-6','C')
tempConverter('13','c')
tempConverter('75','F')
tempConverter('75','f')
tempConverter('13','a')


## Solution 2

function degreeConverter(degree){

    const value = degree.slice(0, degree.length - 1)
    const format = degree[degree.length - 1]

    let result = 0
    let resultText = 'the format its not valid!'

    if(format == 'F' || format == 'f'){
        result = (Number(value) -32) * 5/9
        resultText = `converted to ${result.toFixed(1)}C`
    }else if(format == 'C' || format == 'c'){
        result = Number(value) * 9/5 + 32
        resultText = `converted to ${result.toFixed(1)}F`
    }

    console.log(`${value}${format} ${resultText}`)
}

degreeConverter('-6C')
degreeConverter('13c')
degreeConverter('75F')
degreeConverter('75f')
degreeConverter('13a')

*/

/* 

-> rocketseat solution

function transfomDegree(degree) {
    const celsiusExist = degree.toUpperCase().includes('C')
    const fahrenheitExist = degree.toUpperCase().includes('F')

    if(!celsiusExist && !fahrenheitExist) {
        throw new Error('Grau nao identificado')
    }

    let updatedDegree = Number(degree.toUpperCase().replace('F',''))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExist){
        updatedDegree = Number(degree.toUpperCase().replace('C',''))
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F'    
    }

    return formula(updatedDegree) + degreeSign
}

try{
    console.log(transfomDegree('13c'))
    console.log(transfomDegree('13C'))
    console.log(transfomDegree('80f'))
    console.log(transfomDegree('80F'))
    console.log(transfomDegree('65z'))
}catch(error){
    console.log(error.message)
}
*/

/* 
======================================================================================================
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/
/*

-> My Solution

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const books = {
    totalCategory: () => { 
        console.log(`Search by Category
    Total of category: ${booksByCategory.length}`)
    },
    totalBooksByCategory: () => {
        console.log('Search Total Books by Category')
        for(let category of booksByCategory){
            console.log(`   Category: ${category.category}, Books: ${category.books.length}`)
        }
    },
    totalAuthors: () => {
        let listOfAuthor = []
        for(let category of booksByCategory){
            for(let book of category.books){
                let author = book.author.toUpperCase()
                if(!listOfAuthor.includes(author)){
                    listOfAuthor.push(author)
                }
            }
        }
        console.log(`Search Total of Authors
    Total Authors: ${listOfAuthor.length}`)
    },
    booksByAuthor: (author) => {
        console.log(`Search Books by Author ( ${author} )`)
        let authorExist = false
        for(let category of booksByCategory) {
            for(let book of category.books){
                if(book.author.toUpperCase().includes(author.toUpperCase())){
                    console.log(`   Category: ${category.category}, Tittle: ${book.title}, Author: ${book.author}`)
                    authorExist = true
                }
            }
        }
        if(!authorExist){
            console.log('Author not found!')
        }
    }
}

books.totalCategory()
books.totalBooksByCategory()
books.totalAuthors()
books.booksByAuthor('Augusto Cury')
books.booksByAuthor('Sharon L. Lechter')
books.booksByAuthor('Clason')
books.booksByAuthor('stephen')

*/