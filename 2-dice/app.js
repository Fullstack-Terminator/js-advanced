/* Сделать функцию для настольных игр, которая принимает тип 
dice, который надо бросить: d4, d6, d8, d10, d12, d16, d20 и 
возвращает случайное целое число на этом интервале с
включенными границами:
    - d6 - возможные значения - 1, 2, 3, 4, 5, 6
*/

function castDice(dice) {
    const diceNumber = Number(dice.slice(1, Infinity));
    const diceArr = [4, 6, 8, 10, 12, 16, 20].filter((num) => num === diceNumber);
    if (diceArr.length === 1) {
        return Math.floor(Math.random() * (diceNumber) + 1);
    }
    return `Значения ${dice} не существует`;
}

console.log(castDice('d4'));