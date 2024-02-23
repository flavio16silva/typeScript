/*
funções - Nas funções podemos inserir a tipagem das variaveis de acordo os valores que irão receber
*/
function addNumber(x:number, y:number): number {
  return x + y
}
let soma: number = addNumber(4,8)
console.log(soma)

function addToHello(name: string): string{
  return `Hello ${name}`
}
console.log("-----------------------------")
console.log(addToHello("Flavio"))

/*
funções Multi Tipos
Permite que uma função possa ser utilizada com vários tipos de dados.
*/
function CallToPhone(phone: number | string): number | string {
  return phone
}
console.log(CallToPhone(111111111))

/*
Funções Assincrona - Async
A palavra chave "async" é usada para declarar uma função assíncrona, ou seja, ela retorna um Promise.
O async permite que o JavaScript espere alguma coisa acontecer e assim continuar a execução do código.

Promise é um objeto que representa eventual resultado de uma operação assíncrona.
Uma Promise tem 3 estados: Pending (aguardando), Fulfilled (concluído com sucesso), Rejected (com falha).
Para manipular esses estados, precisamos usar then() e catch(). Entretanto, as promises são mais úteis quando combinadas com await.
Quando uma Promise está em estado Pending, você pode adicionar callbacks para quando essa Promessa for resolvida ou rejeitada.
*/
async function getDatabase(id: number): Promise<string> {
  return "flavio"
}