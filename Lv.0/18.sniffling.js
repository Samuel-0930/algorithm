function solution(n) {
	let total = 0;
	if (n % 2 === 1) {
		for (let i = 1; i <= n; i += 2) {
			total += i;
		}
	} else {
		for (let i = 2; i <= n; i += 2) {
			total += Math.pow(i, 2);
		}
	}
	return total;
}
