// *** Aula 02 - Atividade 10 - Elaborar um Algoritmo para calcular a área de um Trapézio ***

let baseMaior = Number (prompt('Digite o valor da Base Maior (m):'));
let baseMenor = Number (prompt('Digite o valor da Base Menor (m):'));
let altura = Number (prompt('Digite o valor da Altura (m):'));
let area = Number((baseMaior + baseMenor) * altura / 2);
alert (`O valor da área do Trapézio com a Base Maior de ${baseMaior} m, com a Base Menor de ${baseMenor} e Altura com ${altura} é igual a ${area} m².`);