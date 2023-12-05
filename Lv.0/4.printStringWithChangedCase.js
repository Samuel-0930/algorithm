const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
	input = [line];
}).on('close', function () {
	str = input[0];
	let arr = [];
	for (key of str) {
		if (key === key.toUpperCase()) {
			arr.push(key.toLowerCase());
		} else {
			arr.push(key.toUpperCase());
		}
	}
	console.log(arr.join(''));
});
