/*
Variaveis no TS:
Tipos primitivos: boolean, number, string
*/ 
// let ligado = false
let ligado: boolean = false //caso altere o valor da variavel irá dar erro. Pois indica boolean 
let nome: string = 'flavio' //caso altere o valor da variavel irá dar erro. Pois indica string
let idade: number = 42      //Pode receber number ou float
let altura: number = 1.87   //Pode receber number ou float

/*
Tipos especiais: null e undefined

null é um tipo que pode ser atribuido a uma variável, mas nunca deve ser usada como valor de verdade (exceto para nulos). É um tipo que pode ser atribuido a uma variavel, mas nao tem valor.

undefined é outro tipo que também não tem valor, porem é diferente de null
*/

//Null
let nulo: null = null        //Não pode ter outra coisa que não seja null

//undefined
let indefinido: undefined = undefined    //Não tem nada atribuido a ela

/*
Tipos abrangentes: any, void
any - qualquer coisa
void - vazio
*/

let retorno: void  //usados para ocasiões que não tenham retorno ou quando queremos dizer que um função não tem retorno.
let retornoView: any = true //aceita qualquer coisa: string ou number ou boolean

//Objeto - sem previsibilidade
let produto: object = {
  name: 'flavio',
  cidade: 'ssa',
  idade: 42
}

//Objeto tipado - com previsibilidade
type ProdutoLoja = {
  nome: string
  preco: number
  unidades: number
}

//Caso exclua uma das propriedades irá acusar erro, pois o objeto respeita uma tipagem. 
let meuProduto: ProdutoLoja = {
    nome: 'tenis',
    preco: 89.99,
    unidades: 5
}


/*
Arrays
*/
let dados: string[] = ["flavio", "julia", "paula"]             //Forma mais legivel e facil de ler. 
let dados2: Array<string> =  ['joao','maria']


//Array de MultiTipos: Consegue alterar a ordem dos valores, independente da propriedade.
let info: (string | number)[] = ["flavio", 40, "10"]  

//Tupla  - permite que um array tenha varios tipos de dados embutidos nele.
let paises: [number, string, string] = [10,"EUA", "10"]    //Não consegue alterar a ordem dos valores, pois foram formatados nas propriedades do array.


/*
Arrays - metodos
São usados os mesmos metodos do JS
*/

/*
Datas
*/
let aniversario: Date = new Date("2023-12-20 05:00")                     //Formato padrão para datas no TS é o AAAA-MM-DD
console.log(aniversario.toString())
console.log("-----------------------------")