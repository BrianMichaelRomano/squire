import Utils from './Utils.js';

export default class Combat {
  static attack(state, attackerString, defenderString) {
    const attacker = state[attackerString];
    const defender = state[defenderString];

    const attackResult = {};
    attackResult.attackRoll = this.rollOff(attacker.attack, defender.defense);
    attackResult.damageRoll = this.rollOff(attacker.damage, defender.armor);

    return attackResult;
  }

  static rollOff(attackerAttr, defenderAttr) {
    let attackerRolls = {};
    let defenderRolls = {};

    attackerRolls.allDiceRolls = Utils.rollDice(attackerAttr, 1, 6);
    attackerRolls.highest = this.returnHighest(attackerRolls.allDiceRolls);

    defenderRolls.allDiceRolls = Utils.rollDice(defenderAttr, 1, 6);
    defenderRolls.highest = this.returnHighest(defenderRolls.allDiceRolls);

    let rollOffResult = {};
    rollOffResult.attackerRolls = attackerRolls;
    rollOffResult.defenderRolls = defenderRolls;

    return rollOffResult;
  }

  static returnHighest(arr) {
    let highest = 0;
    arr.forEach(num => {
      highest = num > highest ? num : highest;
    });
    return highest;
  }
}
