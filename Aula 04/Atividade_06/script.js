// Aula 04 - Atividade 06
// Para os números de 1 a 20, imprima: "Número X é menor que 
// 10", "igual a 10" ou "maior que 10".

let classe
console.log ('*** Para os números de 1 a 20, imprima: "Número X é menor que 10", "igual a 10" ou "maior que 10" ***')
for (let i = 1; i<=20; i++) {

    if (i < 10) {
        classe = 'menor'
        console.log (`O número ${i} é ${classe} do que o número 10`)
        }
            else if (i == 10) {
            classe = 'igual'
                console.log (`O número ${i} é ${classe} do que o número 10`)
            }

    else {
    classe = 'maior'
        console.log (`O número ${i} é ${classe} do que o número 10`)
    }
}

