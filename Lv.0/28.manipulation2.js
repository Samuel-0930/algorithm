function solution(numLog) {
	const arr = [];
	const lengthOfArray = numLog.length;

	for (i = 0; i < lengthOfArray - 1; i++) {
		if (numLog[i] - numLog[i + 1] === 1) {
			arr.push('s');
		} else if (numLog[i] - numLog[i + 1] === -1) {
			arr.push('w');
		} else if (numLog[i] - numLog[i + 1] === 10) {
			arr.push('a');
		} else if (numLog[i] - numLog[i + 1] === -10) {
			arr.push('d');
		}
	}

	return arr.join('');
}
