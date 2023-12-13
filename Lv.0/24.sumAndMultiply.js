function solution(num_list) {
	let total1 = 1;
	let total2 = 0;

	for (let value of num_list) {
		total1 *= value;
		total2 += value;
	}

	total2 = Math.pow(total2, 2);

	if (total1 < total2) return 1;
	else return 0;
}
