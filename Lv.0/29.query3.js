function solution(arr, queries) {
	for (let i = 0; i < queries.length; i++) {
		const firstIndex = queries[i][0];
		const secondIndex = queries[i][1];

		[arr[firstIndex], arr[secondIndex]] = [arr[secondIndex], arr[firstIndex]];
	}

	return arr;
}
