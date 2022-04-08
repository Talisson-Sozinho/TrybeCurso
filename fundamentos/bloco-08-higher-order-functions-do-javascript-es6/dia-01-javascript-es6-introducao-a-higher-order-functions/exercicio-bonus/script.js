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

const generateDamage = (minDamage, maxDamage) => Math.floor(Math.random() * (maxDamage - minDamage) + minDamage);

function generateDragonDamage() {
  const minDamage = 15;
  const maxDamage = battleMembers.dragon.strength;

  const dragonDamage = generateDamage(minDamage, maxDamage);

  return dragonDamage;
}

function generateWarriorDamage() {
  const minDamage = battleMembers.warrior.strength;
  const maxDamage = battleMembers.warrior.strength * battleMembers.warrior.weaponDmg;

  const warriorDamage = generateDamage(minDamage, maxDamage);

  return warriorDamage;
}

function generateMageDamage() {
  const haveMana = battleMembers.mage.mana >= 15 ;

  const mageCost = {};
  const minDamage = battleMembers.mage.intelligence;
  const maxDamage = battleMembers.mage.intelligence * 2;

  mageCost.damage = haveMana ? generateDamage(minDamage, maxDamage) : "Não possui mana suficiente";
  mageCost.spentMana = haveMana ? 15 : 0;

  return mageCost;
}

const gameActions = {
  warriorTurn: (action) => {
    warrior.damage = action();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (action) => {
    mage.damage = action().damage;
    mage.mana -= action().spentMana;
    dragon.healthPoints -= mage.damage;
  },
};
