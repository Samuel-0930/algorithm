function solution(a, b, c) {
	let score = 0;
	if (a !== b && b !== c && a !== c) {
		score += a + b + c;
	} else if (a === b && b === c) {
		score +=
			(a + b + c) *
			(Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
			(Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
	} else {
		score += (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
	}

	return score;
}
