type heroi = {
  name: string
  vulgo: string
}

function printaObjeto(pessoa: heroi){
  console.log(pessoa)
  console.log("-----------------------------")
}

printaObjeto({
  name: "bruce wayne",
  vulgo: "batman"
})
//console.log("olá mundo!")

// Node entende JS e não TS.
