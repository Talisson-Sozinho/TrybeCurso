const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

function getDragonDamage() {
  const minDamage = 15;
  const maxDamage = battleMembers.dragon.strength;
  const dragonDamage = Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);
  return dragonDamage;
}
