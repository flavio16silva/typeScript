//Classes

/*
  data modifiers
  public
  private
  protected
*/

class Persona {
  private nome?: string               //ao inserir interrogação o nome fica opcional. Não precisa declarar no metodo constructor
  stregth: number
  skill: number

  constructor(nome: string, stregth: number, skill: number){
    this.nome =  nome
    this.stregth = stregth
    this.skill = skill
  }

  //private attack(): void { - posso deixar um metodo privado.
  attack(): void {
    console.log(`Attack with ${this.stregth} points`)     
  }

}

const p1 = new Persona("ryu", 10 ,80)
//console.log(p1.attack())
p1.attack()

/*
Data Modifiers - Modificadores de Acesso
- Public (get/set): Sem restrições, acessível em todo o escopo do objeto.
- Private  (get/set): Somente acessíveis dentro da própria class, usando um getter e setter.
- Protected (get/set): Acessível apenas na própria class ou nas classes filhas.
*/

//Subclasses ou classe filha
class Magia extends Persona {
  magicPoints: number
  constructor(nome: string, stregth: number, skill: number, magicPoints: number){
    super(nome, stregth, skill)
    this.magicPoints = magicPoints
  }
}

const p2 = new Magia("Mago", 9, 30, 100)