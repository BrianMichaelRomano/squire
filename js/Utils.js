export default class Utils {
  static randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static rollDice(numDice, min, max) {
    let diceRollResults = [];
    for (let i = 0; i < numDice; i++) {
      var min = Math.ceil(min);
      var max = Math.floor(max);
      var roll = this.randomNumber(min, max);
      diceRollResults.push(roll);
    }
    return diceRollResults;
  }
}
