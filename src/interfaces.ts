/* 
Interfaces - 
Uma interface é um contrato que descreve um objeto, ou seja, ela define uma estrutura de dados.
As interfaces são usadas para definir como deve ser construido um objeto, mas não implementam funcionalidades.
As interfaces são baseadas em classes abstratas e não herdam de nenhum outro tipo de classe.
Elas servem como um esqueleto para definir a estrutura dos dados de um objeto.

Type - tipa uma varivel para que as propriedades sempre sejam as mesmas.  
*/
type robot = {
  readonly id: number | string
  name: string
}

//inteface - posso alterar a consta abaixo para robot2 e devido  ter as mesmas propriedades ele vai funcionar normalmente. Uso em classe(MOLDE).
interface robot2 {
  readonly id: number | string      //propriedades do tipo leitura
  name: string
  sayHello(): string
}

const bot1: robot = {
  id: "1",
  name:"giga"
}

const bot2: robot2 = {
  id: 1,
  name: "giga",
  sayHello: function (): string {
    throw new Error("Function not implemented.")
  }
}

console.log("---------------------")
//console.log(bot1.id = "10"        //erro pois ele é somente leitura. Não aceita passagem de valores. 
//console.log(bot1)        
//console.log(bot2)


class Pessoa implements robot2 {
  id: string | number
  name: string

  constructor(id: string | number, name: string){
    this.id = id
    this.name = name
  }
  sayHello(): string {
   return `hello i'm  ${this.name}`
  }
}  

const p = new Pessoa(1, "titan")
console.log(p.sayHello())