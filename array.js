// vetores
//arrays são como caixas com outras caixas dentro que podem ser acessadas através do seu índice entre colchetes. O primeiro índice sempre começa do 0.

//push adiciona valores
//unshift adiciona valor do primeiro para o final
//pop remove ultimo item
//shift remove primeiro valor



//pushArray.shift()
//console.log(pushArray)

//FILTER

const filterArray = [100, 200, 20, 55, 900000]
console.log(filterArray)

const novoArray = filterArray.filter((qualquerCoisa) => {

    return qualquerCoisa > 150
})
console.log (novoArray)