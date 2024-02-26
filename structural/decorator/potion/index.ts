const potion = new BasePotion("Merlin");
console.log(`${potion.effect()} - Price: ${potion.price()} coins - [Alchemist: ${potion.getAlchemist()}].`);

const potionStrength = new WithStrengthIncrease(potion);
console.log(`${potionStrength.effect()} - Price: ${potionStrength.price()} coins.`);

const potionStrengthIncrease = new WithStrengthIncrease(potionStrength);
console.log(`${potionStrengthIncrease.effect()} - Price: ${potionStrengthIncrease.price()} coins.`);