function solution(arr, queries) {
	const result = [];
	let temp = [];
	const queriesLength = queries.length;

	for (let i = 0; i < queriesLength; i++) {
		for (let j = queries[i][0]; j <= queries[i][1]; j++) {
			if (arr[j] > queries[i][2]) {
				temp.push(arr[j]);
			}
		}
		if (temp.length === 0) result.push(-1);
		else result.push(Math.min(...temp));
		temp = [];
	}
	return result;
}
