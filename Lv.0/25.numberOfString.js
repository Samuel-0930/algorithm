function solution(num_list) {
	let total1 = [];
	let total2 = [];

	for (let value of num_list) {
		if (value % 2 === 0) {
			total1.push(value);
		} else {
			total2.push(value);
		}
	}

	total1 = parseInt(total1.join(''));
	total2 = parseInt(total2.join(''));

	return total1 + total2;
}
