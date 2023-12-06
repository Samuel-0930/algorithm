function solution(a, b) {
	let firstCase = parseInt(String(a) + String(b));
	let SecondCase = 2 * a * b;

	if (firstCase >= SecondCase) return firstCase;
	else return SecondCase;
}
