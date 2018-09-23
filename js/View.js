export default class View {
  static renderView(state) {
    this.renderSquire(state.squire);
    this.renderEnemy(state.enemy);
  }

  static renderSquire(squire) {
    const squireName = document.querySelector('#squireName');
    const squireHealth = document.querySelector('#squireHealth');
    const squireAttack = document.querySelector('#squireAttack');
    const squireDefense = document.querySelector('#squireDefense');
    const squireArmor = document.querySelector('#squireArmor');
    const squireDamage = document.querySelector('#squireDamage');
    squireName.textContent = squire.name;
    squireHealth.textContent = squire.health;
    squireAttack.textContent = squire.attack;
    squireDefense.textContent = squire.defense;
    squireDamage.textContent = squire.damage;
    squireArmor.textContent = squire.armor;
  }

  static renderEnemy(enemy) {
    if (enemy === null) {
      document.querySelector('#enemyUnknown').style.display = 'block';
      document.querySelector('#enemy').style.display = 'none';
    } else {
      document.querySelector('#enemyUnknown').style.display = 'none';
      document.querySelector('#enemy').style.display = 'block';

      const enemyName = document.querySelector('#enemyName');
      const enemyHealth = document.querySelector('#enemyHealth');
      const enemyAttack = document.querySelector('#enemyAttack');
      const enemyDefense = document.querySelector('#enemyDefense');
      const enemyArmor = document.querySelector('#enemyArmor');
      const enemyDamage = document.querySelector('#enemyDamage');
      enemyName.textContent = enemy.name;
      enemyHealth.textContent = enemy.health;
      enemyAttack.textContent = enemy.attack;
      enemyDefense.textContent = enemy.defense;
      enemyDamage.textContent = enemy.damage;
      enemyArmor.textContent = enemy.armor;
    }
  }
}
