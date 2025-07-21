let tabuada = Number (prompt('Digite qual a Tabuada deseja...'))
let resultado = 0
console.log (`Veja a Tabuada do ${tabuada}:`)
for (let i=0 ; i<=10; i++) {
    resultado = (tabuada * i)
    console.log (`${tabuada} x ${i} = ${resultado}`)
}


