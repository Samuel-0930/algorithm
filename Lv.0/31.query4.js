function solution(arr, queries) {
	const queriesLength = queries.length;

	for (let i = 0; i < queriesLength; i++) {
		for (let j = queries[i][0]; j <= queries[i][1]; j++) {
			if (j === 0) {
				arr[j]++;
			} else if (j >= queries[i][2] && j % queries[i][2] === 0) {
				arr[j]++;
			}
		}
	}

	return arr;
}
