// *** Aula 02 - Atividade 09 - Elaborar um Algoritmo para calcular a área de um Círculo ***

const PI = Number (3.1415927);
let diametro = Number (prompt('Digite o valor do diâmetro (m):'));
let area = Number(PI * diametro ** 2 / 4);
alert (`O valor da área de um círculo com diâmetro de ${diametro} m é igual a ${area} m².`)

