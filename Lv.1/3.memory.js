function solution(name, yearning, photo) {
	const result = [];
	let score = 0;
	for (let i = 0; i < photo.length; i++) {
		for (let j = 0; j < photo[i].length; j++) {
			if (name.indexOf(photo[i][j]) !== -1) {
				score += yearning[name.indexOf(photo[i][j])];
			}
		}
		result.push(score);
		score = 0;
	}
	return result;
}
