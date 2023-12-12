function solution(code) {
	const arr = [...code];
	let mode = false;
	let ret = [];

	arr.forEach((value, index) => {
		if (mode === false) {
			if (value !== '1') {
				if (index % 2 === 0) {
					ret.push(value);
				}
			} else {
				mode = !mode;
			}
		} else {
			if (value !== '1') {
				if (index % 2 === 1) {
					ret.push(value);
				}
			} else {
				mode = !mode;
			}
		}
	});

	ret = ret.join('');

	if (ret === '') {
		return 'EMPTY';
	} else {
		return ret;
	}
}
