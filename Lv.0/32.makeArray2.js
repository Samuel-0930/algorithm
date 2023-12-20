function solution(l, r) {
	const arr = [];
	for (let i = l; i <= r; i++) {
		const temp = String(i).split('');
		let check = true;
		for (let j = 0; j < temp.length; j++) {
			if (temp[j] !== '0' && temp[j] !== '5') {
				check = !check;
				break;
			}
		}
		if (check === true) arr.push(i);
	}

	if (arr.length === 0) {
		arr.push(-1);
		return arr;
	}

	return arr;
}
