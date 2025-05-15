/* Сделать функцию для настольных игр, которая принимает тип 
dice, который надо бросить: d4, d6, d8, d10, d12, d16, d20 и 
возвращает случайное целое число на этом интервале с
включенными границами:
    - d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

function castDice(dice) {
    const diceNumber = Number(dice.slice(1, Infinity));
    return Math.floor(Math.random() * (diceNumber) + 1);
}

console.log(castDice('d4'));