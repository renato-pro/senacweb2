// Aula 04 - Atividade 02
// Conte de 0 a 50 e diga se cada número é par ou ímpar.

let classe
for (let i = 0; i<=50; i++) {
    if (i%2 == 0)
        classe = 'par'
    else
        classe = 'ímpar'
    console.log(`O número ${i} é ${classe}.`)   
}

