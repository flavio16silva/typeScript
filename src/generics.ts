//generics  - T é uma palavra reservada para indicar que pode ser qualquer tipo de dado.
/*
function concatArray(...itens:any[]): any[]{
  return new Array().concat(...itens)
}

const numArray = concatArray([1,5], [3])
const stgArray = concatArray(["flavio", "goku"], ["vegeta"])

console.log(numArray)
console.log(stgArray)
*/

//---- Pegando a função acima e inserido o T
function concatArray<T>(...itens:T[]): T[]{
  return new Array().concat(...itens)
}

const numArray = concatArray<number[]>([1,5], [3])
const stgArray = concatArray<string[]>(["flavio", "goku"], ["vegeta"])
//numArray.push("saitama")

console.log(numArray)
console.log(stgArray)


//TS no NODE Dev
let dado: string = "flavio"
console.log("---------------------")
console.log(dado)