function solution(bandage, health, attacks) {
	let duration = bandage[0];
	let healingSeconds = bandage[1];
	let plusHealing = bandage[2];
	const maxHealth = health;
	let healCount = 0;
	let attackIndex = 0;

	for (let i = 0; i <= attacks[attacks.length - 1][0]; i++) {
		if (i === attacks[attackIndex][0]) {
			health = health - attacks[attackIndex][1];
			healCount = 0;
			attackIndex++;
		} else {
			healCount++;

			if (healCount === duration) {
				health = health + plusHealing;
				healCount = 0;
			}

			health = health + healingSeconds;

			if (health >= maxHealth) {
				health = maxHealth;
			}
		}

		if (health <= 0) return -1;
	}
	return health;
}
