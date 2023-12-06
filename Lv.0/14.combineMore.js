function solution(a, b) {
	let firstCase = parseInt(String(a) + String(b));
	let secondCase = parseInt(String(b) + String(a));

	if (firstCase >= secondCase) return firstCase;
	else return secondCase;
}
