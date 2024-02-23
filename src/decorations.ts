//Decorators 
function ExibirNome(target: any) {
  console.log(target)
}

console.log("---------------------")
@ExibirNome
class Funcionario {}


function apiVersion(version: string) {
  return(target: any) => {
    Object.assign(target.prototype, {__version: version, __name: "flavioSilva"})
  }
}

//atributo decorador 
//@apiVersion("1.10")

function minLength(length: number) {
  return (target: any, key: string) => {
    let _value = target[key]

    const getter = ()  => _value
    const setter = (value: string) => {
      if (value.length < length) {
        throw new Error (`Tamanho menor do que ${length}`)
      } else {
        _value = value
      }
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter
    }) 
 
  }
}

class Api{
  @minLength(3)
  name: string

  constructor(name: string){
    this.name = name
  }
}

const api = new Api("us")
console.log(api.name) 