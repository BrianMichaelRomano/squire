import Entity from './Entity.js';
import Combat from './combat.js';
import State from './State.js';
import View from './View.js';
import Listeners from './Listeners.js';

export default class controller {
  static spawnEnemy() {
    const enemy = Entity.spawnEnemy();
    const state = { ...State.getState() };
    state.enemy = enemy;
    State.setState(state);
    this.renderView();
  }

  static renderView() {
    View.renderView({ ...State.getState() });
  }

  static initGame() {
    Listeners.registerListeners();
    this.renderView();
  }

  static attack(attacker, defender) {
    const attackResult = Combat.attack(
      { ...State.getState() },
      attacker,
      defender
    );
    console.log(attackResult.attackRoll);
    console.log(attackResult.attackRoll.attackerRolls.highest);
    console.log(attackResult.attackRoll.defenderRolls.highest);

    console.log(attackResult.damageRoll);
    console.log(attackResult.damageRoll.attackerRolls.highest);
    console.log(attackResult.damageRoll.defenderRolls.highest);
    this.resolveTurn();
  }

  static resolveTurn() {
    console.log('Turn Resolved');
  }
}
